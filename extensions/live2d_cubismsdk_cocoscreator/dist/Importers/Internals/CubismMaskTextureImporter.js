"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const { Path } = Editor.Utils;
module.paths.push(Path.join(Editor.App.path, 'node_modules'));
const asset_db_1 = require("@editor/asset-db");
const ProjectModules_1 = require("../../ProjectModules");
const Utils_1 = require("./Utils");
const UTF8 = 'utf8';
const EXTENSION = 'asset';
class CubismMaskTextureImporter extends asset_db_1.Importer {
    get version() {
        return '1.0.0';
    }
    get name() {
        return 'asset';
    }
    get assetType() {
        return 'CubismMaskTexture';
    }
    async validate(asset) {
        if (asset.isDirectory()) {
            return false;
        }
        try {
            const str = (0, fs_1.readFileSync)(asset.source, UTF8);
            const json = JSON.parse(str);
            return json.type == 'CubismMaskTexture';
        }
        catch (error) { }
        return false;
    }
    async import(asset) {
        if (!(await (0, Utils_1.registerImportTaskIfItCannotBeCoreInitialized)(asset.source))) {
            return false;
        }
        const { default: CubismMaskTexture } = await ProjectModules_1.ProjectModules.getModule('Rendering/Masking/CubismMaskTexture');
        const jsonSource = (0, fs_1.readFileSync)(asset.source, UTF8);
        const json = parse(jsonSource);
        if (json == null) {
            return false;
        }
        const fromInspector = getUserDataFromInspector(asset.userData);
        if (fromInspector != null) {
            (0, fs_1.writeFileSync)(asset.source, JSON.stringify({
                type: 'CubismMaskTexture',
                size: fromInspector.size,
                subdivisions: fromInspector.subdivisions,
            }), UTF8);
            json.size = fromInspector.size;
            json.subdivisions = fromInspector.subdivisions;
            Reflect.deleteProperty(asset.userData, 'fromInspector');
        }
        const nAsset = CubismMaskTexture.generateCubismMaskTexture(json.size, json.subdivisions);
        if (nAsset == null) {
            console.error('CubismMaskTexture.generateCubismMaskTexture() failed.');
            return false;
        }
        nAsset.name = asset.basename;
        const content = EditorExtends.serialize(nAsset);
        await asset.saveToLibrary('.json', content);
        return true;
    }
}
CubismMaskTextureImporter.extension = EXTENSION;
exports.default = CubismMaskTextureImporter;
function getUserDataFromInspector(obj) {
    const fromInspector = Reflect.get(obj, 'fromInspector');
    if (fromInspector == null) {
        return undefined;
    }
    const size = Reflect.get(fromInspector, 'size');
    const subdivisions = Reflect.get(fromInspector, 'subdivisions');
    if (Number.isInteger(size) && Number.isInteger(subdivisions)) {
        return { size: size, subdivisions: subdivisions };
    }
    console.error('Internal error.');
    return undefined;
}
function parse(source) {
    let json;
    try {
        json = JSON.parse(source);
    }
    catch (error) {
        if (error instanceof SyntaxError) {
            console.error(error.message);
            return null;
        }
        else {
            throw error;
        }
    }
    if (!Number.isInteger(json.size)) {
        console.error('Json parsing error.');
        return null;
    }
    const size = json.size;
    if (!Number.isInteger(json.subdivisions)) {
        console.error('Json parsing error.');
        return null;
    }
    const subdivisions = json.subdivisions;
    if (1 > subdivisions || subdivisions > 5) {
        console.error('Json parsing error.');
        return null;
    }
    return { size: size, subdivisions: subdivisions };
}
