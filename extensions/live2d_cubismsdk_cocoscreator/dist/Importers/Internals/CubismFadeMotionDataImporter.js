"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const { Path } = Editor.Utils;
module.paths.push(Path.join(Editor.App.path, 'node_modules'));
const asset_db_1 = require("@editor/asset-db");
const Utils_1 = require("./Utils");
const ProjectModules_1 = require("../../ProjectModules");
const CubismFadeMotionListImporter_1 = __importDefault(require("./CubismFadeMotionListImporter"));
const UTF8 = 'utf8';
const EXTENSION = 'fade.asset';
class CubismFadeMotionDataImporter extends asset_db_1.Importer {
    get version() {
        return '1.0.0';
    }
    get name() {
        return 'fade.asset';
    }
    get assetType() {
        return 'CubismFadeMotionData';
    }
    async validate(asset) {
        if (asset.isDirectory()) {
            return false;
        }
        if ('.fade' != Path.extname(Path.basenameNoExt(asset.source))) {
            return false;
        }
        return true;
    }
    async import(asset) {
        if (!(await (0, Utils_1.registerImportTaskIfItCannotBeCoreInitialized)(asset.source))) {
            return false;
        }
        const baseDir = Path.dirname(asset.source);
        const name = Path.basenameNoExt(asset.source);
        const outputFilePath = Path.join(baseDir, name + `.${EXTENSION}`);
        const { default: CubismFadeMotionData } = await ProjectModules_1.ProjectModules.getModule('Framework/MotionFade/CubismFadeMotionData');
        const jsonSrc = (0, fs_1.readFileSync)(asset.source, UTF8);
        const json = JSON.parse(jsonSrc);
        const data = CubismFadeMotionData.deserializeFromJson(json);
        const serialized = EditorExtends.serialize(data);
        asset.saveToLibrary('.json', serialized);
        (0, asset_db_1.refresh)(outputFilePath);
        const dirPath = Path.join(Path.dirname(asset.source), '../');
        const dirName = Path.basename(dirPath);
        if (dirPath.length == 0) {
            console.warn('Not subdirectory.');
            return true;
        }
        const fadeMotionDataFilePath = Path.join(dirPath, `${dirName}.${CubismFadeMotionListImporter_1.default.extension}`);
        updateFadeMotionListFile(fadeMotionDataFilePath, asset.uuid);
        (0, asset_db_1.refresh)(fadeMotionDataFilePath);
        return true;
    }
}
CubismFadeMotionDataImporter.extension = EXTENSION;
exports.default = CubismFadeMotionDataImporter;
function updateFadeMotionListFile(path, setUuid) {
    let fadeMotionData;
    if ((0, Utils_1.existsFile)(path)) {
        const source = (0, fs_1.readFileSync)(path, UTF8);
        const json = JSON.parse(source);
        const cubismFadeMotionObjectsSource = Array.isArray(json.cubismFadeMotionObjects)
            ? json.cubismFadeMotionObjects
            : undefined;
        if (cubismFadeMotionObjectsSource == null) {
            console.error('FadeMotionList file parse error.');
            return;
        }
        const cubismFadeMotionObjects = purseCubismFadeMotionObjects(cubismFadeMotionObjectsSource, setUuid);
        if (cubismFadeMotionObjects == null) {
            console.error('FadeMotionList file CubismFadeMotionObjects parse error.');
            return;
        }
        const motionInstanceIds = new Array(cubismFadeMotionObjects.length);
        for (let i = 0; i < motionInstanceIds.length; i++) {
            motionInstanceIds[i] = 0;
        }
        fadeMotionData = {
            motionInstanceIds: motionInstanceIds,
            cubismFadeMotionObjects: cubismFadeMotionObjects,
        };
    }
    else {
        fadeMotionData = {
            motionInstanceIds: [0],
            cubismFadeMotionObjects: [setUuid],
        };
    }
    (0, fs_1.writeFileSync)(path, JSON.stringify(fadeMotionData), UTF8);
}
function purseCubismFadeMotionObjects(arr, setUuid) {
    let existsUuid = false;
    const result = new Array(arr.length);
    for (let i = 0; i < result.length; i++) {
        const uuid = typeof arr[i] == 'string' && Editor.Utils.UUID.isUUID(arr[i])
            ? arr[i]
            : undefined;
        if (uuid == null) {
            return null;
        }
        if (uuid == setUuid) {
            existsUuid = true;
        }
        result[i] = uuid;
    }
    if (!existsUuid) {
        result.push(setUuid);
    }
    return result;
}
