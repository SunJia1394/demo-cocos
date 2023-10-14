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
const CubismExpressionListImporter_1 = __importDefault(require("./CubismExpressionListImporter"));
const UTF8 = 'utf8';
const EXTENSION = 'exp3.asset';
class CubismExpressionDataImporter extends asset_db_1.Importer {
    get version() {
        return '1.0.0';
    }
    get name() {
        return 'exp3.asset';
    }
    get assetType() {
        return 'CubismExpressionData';
    }
    async validate(asset) {
        if (asset.isDirectory()) {
            return false;
        }
        if ('.exp3' != Path.extname(Path.basenameNoExt(asset.source))) {
            return false;
        }
        return true;
    }
    async import(asset) {
        if (!(await (0, Utils_1.registerImportTaskIfItCannotBeCoreInitialized)(asset.source))) {
            return false;
        }
        const { default: CubismExpressionData } = await ProjectModules_1.ProjectModules.getModule('Framework/Expression/CubismExpressionData');
        const { default: CubismExp3Json } = await ProjectModules_1.ProjectModules.getModule('Framework/Json/CubismExp3Json');
        const jsonSrc = (0, fs_1.readFileSync)(asset.source, 'utf8');
        const json = CubismExp3Json.loadFrom(jsonSrc);
        if (json == null) {
            console.error('CubismExp3Json.loadFrom() is failed.');
            return false;
        }
        const data = CubismExpressionData.createInstance(json);
        const serialized = EditorExtends.serialize(data);
        asset.saveToLibrary('.json', serialized);
        (0, asset_db_1.refresh)(asset.source);
        const dirPath = Path.join(Path.dirname(asset.source), '../');
        const dirName = Path.basename(dirPath);
        if (dirPath.length == 0) {
            console.warn('CubismExpressionDataImporter.import(): Not subdirectory.');
            return true;
        }
        const expressionListFilePath = Path.join(dirPath, dirName + `.${CubismExpressionListImporter_1.default.extension}`);
        updateExpressionListFile(expressionListFilePath, asset.uuid);
        (0, asset_db_1.refresh)(expressionListFilePath);
        return true;
    }
}
CubismExpressionDataImporter.extension = EXTENSION;
exports.default = CubismExpressionDataImporter;
function updateExpressionListFile(path, setUuid) {
    let expressionList;
    if ((0, Utils_1.existsFile)(path)) {
        const source = (0, fs_1.readFileSync)(path, UTF8);
        const json = JSON.parse(source);
        const cubismExpressionObjectsSource = Array.isArray(json.cubismExpressionObjects)
            ? json.cubismExpressionObjects
            : undefined;
        if (cubismExpressionObjectsSource == null) {
            console.error('ExpressionList file parse error.');
            return;
        }
        const cubismExpressionObjects = purseCubismExpressionObjects(cubismExpressionObjectsSource, setUuid);
        if (cubismExpressionObjects == null) {
            console.error('ExpressionList file CubismExpressionObjects parse error.');
            return;
        }
        expressionList = { cubismExpressionObjects: cubismExpressionObjects };
    }
    else {
        expressionList = { cubismExpressionObjects: [setUuid] };
    }
    (0, fs_1.writeFileSync)(path, JSON.stringify(expressionList), UTF8);
}
function purseCubismExpressionObjects(arr, setUuid) {
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
