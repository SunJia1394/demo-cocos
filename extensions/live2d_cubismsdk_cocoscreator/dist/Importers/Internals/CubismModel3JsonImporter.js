"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const Utils_1 = require("./Utils");
const { Path } = Editor.Utils;
module.paths.push(Path.join(Editor.App.path, 'node_modules'));
const asset_db_1 = require("@editor/asset-db");
const cc_1 = require("cc");
const ProjectModules_1 = require("../../ProjectModules");
const PrefabUtils_1 = require("../../PrefabUtils");
const CubismMaterialPickerForImportersOnly_1 = __importDefault(require("../../CubismMaterialPickerForImportersOnly"));
const CubismTexturePickerForImportersOnly_1 = __importDefault(require("../../CubismTexturePickerForImportersOnly"));
const CubismSDKSettings_1 = __importDefault(require("../../CubismSDKSettings"));
const CubismExpressionListImporter_1 = __importDefault(require("./CubismExpressionListImporter"));
const UTF8 = 'utf8';
class CubismModel3JsonImporter extends asset_db_1.Importer {
    get version() {
        return '1.0.0';
    }
    get name() {
        return 'model3.json';
    }
    get assetType() {
        return 'CubismMoc';
    }
    async validate(asset) {
        const ext = '.model3';
        if (asset.isDirectory()) {
            return false;
        }
        if (ext != Path.extname(Path.basenameNoExt(asset.source))) {
            return false;
        }
        return true;
    }
    async import(asset) {
        if (!(await (0, Utils_1.registerImportTaskIfItCannotBeCoreInitialized)(asset.source))) {
            return false;
        }
        const baseDir = Path.dirname(asset.source);
        const { default: CubismModel3Json, CubismModelNodeGenerator } = await ProjectModules_1.ProjectModules.getModule('Framework/Json/CubismModel3Json');
        const { default: CubismMoc } = await ProjectModules_1.ProjectModules.getModule('Core/CubismMoc');
        const shouldImportAsOriginalWorkflow = await CubismSDKSettings_1.default.getShouldImportAsOriginalWorkflow();
        let model3JsonSource;
        try {
            model3JsonSource = (0, fs_1.readFileSync)(asset.source, 'utf8');
        }
        catch (error) {
            console.error(error);
            return false;
        }
        let json;
        try {
            json = JSON.parse(model3JsonSource);
        }
        catch (error) {
            console.error(`Json parsing error.`);
            return false;
        }
        const model3 = CubismModel3Json.loadFromJson(json);
        if (model3 == null) {
            return false;
        }
        const { fileReferences } = model3;
        const moc3Name = Path.basenameNoExt(fileReferences.moc);
        const outputFilePath = Path.join(baseDir, moc3Name + '.prefab');
        const mocAsset = this.assetDB.path2asset.get(Path.join(baseDir, fileReferences.moc));
        if (mocAsset == null) {
            return false;
        }
        if (!mocAsset.imported) {
            if (mocAsset.invalid) {
                return false;
            }
            else {
                window.setImmediate(() => {
                    (0, asset_db_1.reimport)(asset.source);
                });
                return false;
            }
        }
        const moc = EditorExtends.serialize.asAsset(mocAsset.uuid, CubismMoc);
        try {
            const binary = (0, fs_1.readFileSync)(Path.join(baseDir, fileReferences.moc));
            Reflect.set(moc, '_bytes', binary);
        }
        catch (error) {
            console.error(error);
            return false;
        }
        const { textures: texturePaths } = fileReferences;
        const textures = new Array(texturePaths.length);
        for (let i = 0; i < texturePaths.length; i++) {
            const texturePath = Path.join(baseDir, texturePaths[i]);
            const textureAsset = this.assetDB.path2asset.get(texturePath);
            if (textureAsset == null) {
                return false;
            }
            if (!textureAsset.imported) {
                if (textureAsset.invalid) {
                    return false;
                }
                else {
                    window.setImmediate(() => {
                        (0, asset_db_1.reimport)(asset.source);
                    });
                    return false;
                }
            }
            const uuid = getTextureUuid(textureAsset);
            if (uuid == null) {
                return false;
            }
            const rawAsset = EditorExtends.serialize.asAsset(uuid, cc_1.Texture2D);
            textures[i] = rawAsset;
        }
        const { displayInfo, physics, pose, userData } = fileReferences;
        const displayInfoJson = physics ? readJsonFile(Path.join(baseDir, displayInfo)) : null;
        const physics3Json = physics ? readJsonFile(Path.join(baseDir, physics)) : null;
        const pose3Json = pose ? readJsonFile(Path.join(baseDir, pose)) : null;
        const userData3Json = userData ? readJsonFile(Path.join(baseDir, userData)) : null;
        for (const motion of fileReferences.motions.motions) {
            for (let i = 0; i < motion[1].length; i++) {
                const { file } = motion[1][i];
                const path = Path.join(baseDir, file);
                CubismModel3JsonImporter.motionImportFlags.set(path, true);
                setImmediate(() => (0, asset_db_1.reimport)(path));
            }
        }
        const expListFilePath = Path.join(baseDir, Path.basename(baseDir) + `.${CubismExpressionListImporter_1.default.extension}`);
        const expListUuid = (0, asset_db_1.queryUUID)(expListFilePath);
        const CubismExpressionList = (await ProjectModules_1.ProjectModules.getModule('Framework/Expression/CubismExpressionList')).default;
        const provisionalExpList = Editor.Utils.UUID.isUUID(expListUuid)
            ?
                EditorExtends.serialize.asAsset(expListUuid, CubismExpressionList)
            : null;
        const materialPicker = ImporterUtils.generateMaterialPicker();
        const model = await CubismModelNodeGenerator.generateModel({
            model3Json: model3,
            moc: moc,
            materialPicker: materialPicker.pick,
            texturePicker: new CubismTexturePickerForImportersOnly_1.default(textures).pick,
            displayInfo3Json: displayInfoJson,
            physics3Json: physics3Json,
            pose3Json: pose3Json,
            userData3Json: userData3Json,
            expList: provisionalExpList,
            shouldImportAsOriginalWorkflow: shouldImportAsOriginalWorkflow,
        });
        if (model == null) {
            console.error('CubismModelNodeGenerator.generateModel() failed.');
            return false;
        }
        const prefab = (0, PrefabUtils_1.generatePrefab)(model.node);
        const serialized = EditorExtends.serialize(prefab);
        await asset.saveToLibrary('.json', serialized);
        const prefabJson = JSON.parse(serialized);
        const prefabJsonStr = JSON.stringify(prefabJson);
        (0, fs_1.writeFileSync)(outputFilePath, prefabJsonStr);
        asset.saveToLibrary('.json', prefabJsonStr);
        console.info(`CubismModel3JsonImporter.import(): Generate prefab '${outputFilePath}'.`);
        (0, asset_db_1.refresh)(outputFilePath);
        return true;
    }
    static get motionImportFlags() {
        if (!CubismModel3JsonImporter._motionImportFlags) {
            CubismModel3JsonImporter._motionImportFlags = new Map();
        }
        return CubismModel3JsonImporter._motionImportFlags;
    }
    static getMotionImportFlag(path) {
        var _a;
        return (_a = CubismModel3JsonImporter.motionImportFlags.get(path)) !== null && _a !== void 0 ? _a : false;
    }
    static clearMotionImportFlag(path) {
        CubismModel3JsonImporter.motionImportFlags.delete(path);
    }
}
CubismModel3JsonImporter._motionImportFlags = null;
exports.default = CubismModel3JsonImporter;
function readJsonFile(path) {
    if (!(0, Utils_1.existsFile)(path)) {
        console.warn(`File not found. ${path}`);
        return null;
    }
    let str;
    try {
        str = (0, fs_1.readFileSync)(path, UTF8);
    }
    catch (error) {
        console.error(error);
        return null;
    }
    try {
        const json = str != null ? JSON.parse(str) : null;
        return json == null ? null : json;
    }
    catch (error) {
        console.error(`Json parsing error. (${str})`);
        return null;
    }
}
function getTextureUuid(asset) {
    if (asset.meta.importer == 'texture') {
        return asset.uuid;
    }
    for (const key in asset.subAssets) {
        const subAsset = asset.subAssets[key];
        if (subAsset.meta.importer == 'texture') {
            return subAsset.uuid;
        }
    }
    return null;
}
var ImporterUtils;
(function (ImporterUtils) {
    function getMaterial(uuid) {
        try {
            return EditorExtends.serialize.asAsset(uuid, cc_1.Material);
        }
        catch (error) {
            console.error(error);
        }
        return null;
    }
    function generateMaterialPicker() {
        const unlit = getMaterial('00f7219e-619d-4c04-855b-2eabb2e8bcc8');
        const unlitAdditive = getMaterial('8f4be102-82c3-414a-87b5-1d37d0334df9');
        const unlitAdditiveCulling = getMaterial('e1cb9114-4c37-437e-8195-8e118ef3d4ee');
        const unlitAdditiveMasked = getMaterial('1c73aed1-107f-47ef-a951-fc7918c199ad');
        const unlitAdditiveMaskedCulling = getMaterial('74f202c2-6acd-4cfe-8979-e86c785a4ccb');
        const unlitAdditiveMaskedInverted = getMaterial('627747c7-2390-4585-a070-b0832eef1544');
        const unlitAdditiveMaskedInvertedCulling = getMaterial('4fb0ddd5-1460-46d0-ac4e-7de80d58d6f7');
        const unlitCulling = getMaterial('79680d68-a3a9-4c37-9cdd-4192f1a2e90e');
        const unlitMasked = getMaterial('98e5d74e-fc60-43ba-8e80-233738ffcd49');
        const unlitMaskedCulling = getMaterial('b2895826-16c8-4cc3-8057-439e2d38ca00');
        const unlitMaskedInverted = getMaterial('742ada31-4256-4185-b94d-888d2398047d');
        const unlitMaskedInvertedCulling = getMaterial('06799f66-a91c-4e6b-95a4-282c959fd300');
        const unlitMultiply = getMaterial('7c3a25f5-2bc2-4911-adf7-47b62a434c75');
        const unlitMultiplyCulling = getMaterial('9cc9e566-ca39-450c-86f5-36191bd6a1ed');
        const unlitMultiplyMasked = getMaterial('a605be42-e807-4b8d-a0e4-712d0cca5a71');
        const unlitMultiplyMaskedCulling = getMaterial('5818c156-bdb1-41d9-9778-3142b93841dc');
        const unlitMultiplyMaskedInverted = getMaterial('970e7b69-ec3a-49bf-8daa-185db5a4ac58');
        const unlitMultiplyMaskedInvertedCulling = getMaterial('f3d8143c-79c1-4f7e-8f8e-10df323b0b5f');
        return new CubismMaterialPickerForImportersOnly_1.default(unlit, unlitAdditive, unlitAdditiveCulling, unlitAdditiveMasked, unlitAdditiveMaskedCulling, unlitAdditiveMaskedInverted, unlitAdditiveMaskedInvertedCulling, unlitCulling, unlitMasked, unlitMaskedCulling, unlitMaskedInverted, unlitMaskedInvertedCulling, unlitMultiply, unlitMultiplyCulling, unlitMultiplyMasked, unlitMultiplyMaskedCulling, unlitMultiplyMaskedInverted, unlitMultiplyMaskedInvertedCulling);
    }
    ImporterUtils.generateMaterialPicker = generateMaterialPicker;
})(ImporterUtils || (ImporterUtils = {}));
