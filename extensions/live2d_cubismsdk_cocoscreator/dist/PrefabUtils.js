"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePrefab = void 0;
const { Path } = Editor.Utils;
module.paths.push(Path.join(Editor.App.path, 'node_modules'));
function getCompressedUuid(name) {
    const { v5 } = require('uuid');
    let uuid = v5(name, '5c51b329-9d2b-4e0d-afbd-090999198a9f');
    uuid = EditorExtends.UuidUtils.compressUuid(uuid, true);
    return uuid;
}
function nodeFileIdGenerator(node) {
    const nodePath = getNodePath(node);
    const nodeFileld = getCompressedUuid(nodePath);
    return nodeFileld;
}
function compFileIdGenerator(comp, index) {
    const nodePath = getNodePath(comp.node);
    const compPath = nodePath + '/comp' + index;
    const compFileld = getCompressedUuid(compPath);
    return compFileld;
}
const addPrefabInfoOption = {
    nodeFileIdGenerator,
    compFileIdGenerator,
};
function getNodePath(node) {
    let nodePath = '';
    const nodePathArray = [];
    let nodeltr = node;
    while (nodeltr) {
        const siblingIndex = nodeltr.getSiblingIndex();
        nodePathArray.push(nodeltr.name + siblingIndex);
        nodeltr = nodeltr.parent;
    }
    nodePath = nodePathArray.reverse().join('/');
    return nodePath;
}
function generatePrefab(node) {
    const prefab = new cc.Prefab();
    EditorExtends.PrefabUtils.addPrefabInfo(node, node, prefab, addPrefabInfoOption);
    EditorExtends.PrefabUtils.checkAndStripNode(node);
    prefab.data = node;
    return prefab;
}
exports.generatePrefab = generatePrefab;
