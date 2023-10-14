"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Path } = Editor.Utils;
module.paths.push(Path.join(Editor.App.path, 'node_modules'));
const asset_db_1 = require("@editor/asset-db");
const ProjectModules_1 = require("../../ProjectModules");
const Utils_1 = require("./Utils");
class Live2DCubismMocImporter extends asset_db_1.Importer {
    get version() {
        return '1.0.0';
    }
    get name() {
        return 'moc3';
    }
    get assetType() {
        return 'CubismMoc';
    }
    async validate(asset) {
        return !asset.isDirectory() && asset instanceof asset_db_1.Asset;
    }
    async import(asset) {
        if (!(await (0, Utils_1.registerImportTaskIfItCannotBeCoreInitialized)(asset.source))) {
            return false;
        }
        const extname = '.bin';
        const basename = Path.basename(asset.source);
        const { default: CubismMoc } = await ProjectModules_1.ProjectModules.getModule('Core/CubismMoc');
        await asset.copyToLibrary(extname, asset.source);
        const nAsset = new CubismMoc();
        nAsset.name = basename;
        nAsset._setRawAsset(extname);
        const content = EditorExtends.serialize(nAsset);
        await asset.saveToLibrary('.json', content);
        return true;
    }
}
exports.default = Live2DCubismMocImporter;
