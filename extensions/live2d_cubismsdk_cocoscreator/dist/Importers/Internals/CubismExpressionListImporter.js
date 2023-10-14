"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const { Path } = Editor.Utils;
module.paths.push(Path.join(Editor.App.path, 'node_modules'));
const asset_db_1 = require("@editor/asset-db");
const ProjectModules_1 = require("../../ProjectModules");
const Utils_1 = require("./Utils");
const UTF8 = 'utf8';
const EXTENSION = 'expressionList.asset';
class CubismExpressionListImporter extends asset_db_1.Importer {
    get version() {
        return '1.0.0';
    }
    get name() {
        return 'expressionList.asset';
    }
    get assetType() {
        return 'CubismExpressionList';
    }
    async validate(asset) {
        if (asset.isDirectory()) {
            return false;
        }
        if ('.expressionList' != Path.extname(Path.basenameNoExt(asset.source))) {
            return false;
        }
        return true;
    }
    async import(asset) {
        if (!(await (0, Utils_1.registerImportTaskIfItCannotBeCoreInitialized)(asset.source))) {
            return false;
        }
        const { default: CubismExpressionData } = await ProjectModules_1.ProjectModules.getModule('Framework/Expression/CubismExpressionData');
        const { default: CubismExpressionList } = await ProjectModules_1.ProjectModules.getModule('Framework/Expression/CubismExpressionList');
        const source = JSON.parse((0, fs_1.readFileSync)(asset.source, UTF8));
        const expDataUuidsSource = Array.isArray(source.cubismExpressionObjects)
            ? source.cubismExpressionObjects
            : undefined;
        if (expDataUuidsSource == null) {
            console.error('CubismExpressionListImporter.import(): parse error.');
            return false;
        }
        const expDataUuids = purseCubismExpressionObjects(expDataUuidsSource);
        if (expDataUuids == null) {
            console.error('CubismExpressionListImporter.import(): CubismExpressionObjects parse error.');
            return false;
        }
        const cubismExpressionObjects = new Array(expDataUuids.length);
        for (let i = 0; i < cubismExpressionObjects.length; i++) {
            const uuid = expDataUuids[i];
            cubismExpressionObjects[i] = EditorExtends.serialize.asAsset(uuid, CubismExpressionData);
        }
        const list = new CubismExpressionList();
        list.cubismExpressionObjects = cubismExpressionObjects;
        asset.setData && asset.setData('depends', expDataUuids);
        await asset.saveToLibrary('.json', EditorExtends.serialize(list));
        return true;
    }
}
CubismExpressionListImporter.extension = EXTENSION;
exports.default = CubismExpressionListImporter;
function purseCubismExpressionObjects(arr) {
    const result = new Array(arr.length);
    for (let i = 0; i < result.length; i++) {
        const uuid = typeof arr[i] == 'string' && Editor.Utils.UUID.isUUID(arr[i])
            ? arr[i]
            : undefined;
        if (uuid == null) {
            return null;
        }
        result[i] = uuid;
    }
    return result;
}
