"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const { Path } = Editor.Utils;
module.paths.push(Path.join(Editor.App.path, 'node_modules'));
const asset_db_1 = require("@editor/asset-db");
const ProjectModules_1 = require("../../ProjectModules");
const Utils_1 = require("./Utils");
const CubismFadeMotionListSerializedAsset_1 = require("../../SerializedAssets/CubismFadeMotionListSerializedAsset");
const UTF8 = 'utf8';
const EXTENSION = 'fadeMotionList.asset';
class CubismFadeMotionListImporter extends asset_db_1.Importer {
    get version() {
        return '1.0.0';
    }
    get name() {
        return 'fadeMotionList.asset';
    }
    get assetType() {
        return 'CubismFadeMotionList';
    }
    async validate(asset) {
        if (asset.isDirectory()) {
            return false;
        }
        if ('.fadeMotionList' != Path.extname(Path.basenameNoExt(asset.source))) {
            return false;
        }
        return true;
    }
    async import(asset) {
        if (!(await (0, Utils_1.registerImportTaskIfItCannotBeCoreInitialized)(asset.source))) {
            return false;
        }
        const { default: CubismFadeMotionData } = await ProjectModules_1.ProjectModules.getModule('Framework/MotionFade/CubismFadeMotionData');
        const { default: CubismFadeMotionList } = await ProjectModules_1.ProjectModules.getModule('Framework/MotionFade/CubismFadeMotionList');
        const source = JSON.parse((0, fs_1.readFileSync)(asset.source, UTF8));
        const sList = CubismFadeMotionListSerializedAsset_1.CubismFadeMotionListSerializedAsset.instantiateFromJson(source);
        if (sList == undefined) {
            console.error('CubismFadeMotionListSerializedAsset parse error.');
            return false;
        }
        const cubismFadeMotionObjects = new Array(sList.cubismFadeMotionObjects.length);
        for (let i = 0; i < sList.cubismFadeMotionObjects.length; i++) {
            const uuid = sList.cubismFadeMotionObjects[i];
            cubismFadeMotionObjects[i] = EditorExtends.serialize.asAsset(uuid, CubismFadeMotionData);
        }
        const list = new CubismFadeMotionList();
        list.cubismFadeMotionObjects = cubismFadeMotionObjects;
        list.motionInstanceIds = Array.from(sList.motionInstanceIds);
        asset.setData && asset.setData('depends', sList.cubismFadeMotionObjects);
        await asset.saveToLibrary('.json', EditorExtends.serialize(list));
        return true;
    }
}
CubismFadeMotionListImporter.extension = EXTENSION;
exports.default = CubismFadeMotionListImporter;
