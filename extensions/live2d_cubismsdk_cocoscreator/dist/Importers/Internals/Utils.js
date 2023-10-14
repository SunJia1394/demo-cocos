"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importTask = exports.canCoreInitializeInEditor = exports.registerImportTaskIfItCannotBeCoreInitialized = exports.existsFile = void 0;
module.paths.push(Editor.Utils.Path.join(Editor.App.path, 'node_modules'));
const asset_db_1 = require("@editor/asset-db");
const fs_1 = require("fs");
function existsFile(path) {
    try {
        if ((0, fs_1.statSync)(path).isFile()) {
            return true;
        }
    }
    catch (error) {
        return false;
    }
    return false;
}
exports.existsFile = existsFile;
async function registerImportTaskIfItCannotBeCoreInitialized(path) {
    if (await canCoreInitializeInEditor()) {
        return true;
    }
    window.setImmediate(importTask, path);
    return false;
}
exports.registerImportTaskIfItCannotBeCoreInitialized = registerImportTaskIfItCannotBeCoreInitialized;
async function canCoreInitializeInEditor() {
    const wasmFilePath = await Editor.Message.request('asset-db', 'query-path', '2ae9481d-aa06-4cce-ae8e-bcecaf63d82b');
    return wasmFilePath != null;
}
exports.canCoreInitializeInEditor = canCoreInitializeInEditor;
async function importTask(path) {
    if (await registerImportTaskIfItCannotBeCoreInitialized(path)) {
        (0, asset_db_1.reimport)(path);
    }
    else {
        window.setImmediate(importTask, path);
    }
}
exports.importTask = importTask;
