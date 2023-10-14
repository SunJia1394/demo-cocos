"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const { Path } = Editor.Utils;
module.paths.push(Path.join(Editor.App.path, 'node_modules'));
const asset_db_1 = require("@editor/asset-db");
const ProjectModules_1 = require("../../ProjectModules");
const CubismSDKSettings_1 = __importDefault(require("../../CubismSDKSettings"));
const CubismFadeMotionDataImporter_1 = __importDefault(require("./CubismFadeMotionDataImporter"));
const CubismModel3JsonImporter_1 = __importDefault(require("./CubismModel3JsonImporter"));
const cc_1 = require("cc");
const UTF8 = 'utf8';
class CubismMotion3JsonImporter extends asset_db_1.Importer {
    get version() {
        return '1.0.0';
    }
    get name() {
        return 'motion3.json';
    }
    get assetType() {
        return 'undefined';
    }
    async validate(asset) {
        const ext = '.motion3';
        if (asset.isDirectory()) {
            return false;
        }
        const baseDir = Path.dirname(asset.source);
        const basenameExt = Path.basenameNoExt(asset.source);
        const basename = Path.basenameNoExt(basenameExt);
        const secondExt = Path.extname(basenameExt);
        if (ext != secondExt) {
            return false;
        }
        const { default: CubismMotion3Json } = await ProjectModules_1.ProjectModules.getModule('Framework/Json/CubismMotion3Json');
        const { default: CubismFadeMotionData } = await ProjectModules_1.ProjectModules.getModule('Framework/MotionFade/CubismFadeMotionData');
        const shouldImportAsOriginalWorkflow = await CubismSDKSettings_1.default.getShouldImportAsOriginalWorkflow();
        const shouldClearAnimationCurves = await CubismSDKSettings_1.default.getShouldClearAnimationCurves();
        const jsonSrc = (0, fs_1.readFileSync)(asset.source, UTF8);
        const json = CubismMotion3Json.loadFrom(jsonSrc);
        if (json == null) {
            console.error('CubismMotion3Json.loadFrom() is failed.');
            return false;
        }
        const clipFilePath = Path.join(baseDir, basename + '.anim');
        const cfmdFilePath = Path.join(baseDir, basename + `.${CubismFadeMotionDataImporter_1.default.extension}`);
        const isCubismModelImport = CubismModel3JsonImporter_1.default.getMotionImportFlag(asset.source);
        let clip = new cc_1.AnimationClip();
        const clipAsset = this.assetDB.path2asset.get(clipFilePath);
        if (clipAsset) {
            if (!clipAsset.invalid) {
                const clipJsonStr = (0, fs_1.readFileSync)(clipAsset.source, UTF8);
                clip = cc_1.Asset.deserialize(clipJsonStr);
            }
        }
        clip = json.toAnimationClipB(clip, shouldImportAsOriginalWorkflow, shouldClearAnimationCurves, isCubismModelImport);
        const serialized = EditorExtends.serialize(clip);
        asset.saveToLibrary('.json', serialized);
        (0, fs_1.writeFileSync)(clipFilePath, serialized);
        const data = CubismFadeMotionData.createInstance(json, asset.displayName, 0);
        const serializedData = JSON.stringify(data);
        (0, fs_1.writeFileSync)(cfmdFilePath, serializedData);
        (0, asset_db_1.refresh)(clipFilePath);
        (0, asset_db_1.refresh)(cfmdFilePath);
        if (isCubismModelImport) {
            CubismModel3JsonImporter_1.default.clearMotionImportFlag(asset.source);
        }
        return false;
    }
    async import(asset) {
        return false;
    }
}
exports.default = CubismMotion3JsonImporter;
