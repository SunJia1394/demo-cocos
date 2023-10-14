"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const { Path } = Editor.Utils;
module.paths.push(Path.join(Editor.App.path, 'node_modules'));
const asset_db_1 = require("@editor/asset-db");
const CubismExpressionDataImporter_1 = __importDefault(require("./CubismExpressionDataImporter"));
const Utils_1 = require("./Utils");
const UTF8 = 'utf8';
class CubismExp3JsonImporter extends asset_db_1.Importer {
    get version() {
        return '1.0.0';
    }
    get name() {
        return 'exp3.json';
    }
    get assetType() {
        return 'CubismExpressionData';
    }
    async validate(asset) {
        if (asset.isDirectory()) {
            return false;
        }
        const baseDir = Path.dirname(asset.source);
        const basenameExt = Path.basenameNoExt(asset.source);
        const basename = Path.basenameNoExt(basenameExt);
        const secondExt = Path.extname(basenameExt);
        if ('.exp3' != secondExt) {
            return false;
        }
        const outputFilePath = Path.join(baseDir, basename + `.${CubismExpressionDataImporter_1.default.extension}`);
        const jsonSrcJson = (0, fs_1.readFileSync)(asset.source, UTF8);
        let needToCopy = false;
        if ((0, Utils_1.existsFile)(outputFilePath)) {
            const jsonSrcAsset = (0, fs_1.readFileSync)(outputFilePath, UTF8);
            needToCopy = jsonSrcJson != jsonSrcAsset;
        }
        else {
            needToCopy = true;
        }
        if (!needToCopy) {
            return false;
        }
        (0, fs_1.writeFileSync)(outputFilePath, jsonSrcJson);
        (0, asset_db_1.refresh)(outputFilePath);
        return false;
    }
    async import(asset) {
        return false;
    }
}
exports.default = CubismExp3JsonImporter;
