"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.ready = exports.update = exports.$ = exports.template = void 0;
const { Path } = Editor.Utils;
module.paths.push(Path.join(Editor.App.path, 'node_modules'));
const fs_1 = require("fs");
const TagName_1 = __importDefault(require("../TagName"));
exports.template = ``;
exports.$ = {};
function update(assetList, metaList) {
    console.info('update');
    const root = this.$this.shadowRoot;
    if (root == null) {
        return;
    }
    const createElement = root.ownerDocument.createElement.bind(root.ownerDocument);
    const nSection = createElement('SECTION');
    nSection.id = 'main';
    const asset = assetList[0];
    const json = JSON.parse((0, fs_1.readFileSync)(asset.file, 'utf8'));
    const cubismExpressionObjects = Array.isArray(json.cubismExpressionObjects)
        ? CubismExpressionObjectUuids.instantiateFromJson(json.cubismExpressionObjects)
        : null;
    if (cubismExpressionObjects == null) {
        return;
    }
    if (assetList.length > 1) {
        const p = createElement('p');
        p.innerText = 'Can not edit multiple objects.';
        nSection.appendChild(p);
    }
    else {
        for (let i = 0; i < cubismExpressionObjects.length; i++) {
            const uuid = cubismExpressionObjects[i];
            const prop = createElement(TagName_1.default.UI_PROP);
            prop.setAttribute('dump', 'cc.Asset');
            prop.setAttribute('readonly', 'true');
            const label = createElement(TagName_1.default.UI_LABEL);
            label.slot = 'label';
            label.innerText = `${i}`;
            const assetField = createElement(TagName_1.default.UI_ASSET);
            assetField.slot = 'content';
            assetField.setAttribute('droppable', 'CubismExpressionData');
            assetField.setAttribute('placeholder', 'CubismExpressionData');
            assetField.setAttribute('value', uuid);
            assetField.setAttribute('readonly', '');
            prop.append(label, assetField);
            nSection.appendChild(prop);
        }
    }
    const oSection = root.getElementById('main');
    if (oSection != null) {
        root.replaceChild(nSection, oSection);
    }
    else {
        root.appendChild(nSection);
    }
}
exports.update = update;
function ready() {
    console.info('ready');
    const root = this.$this.shadowRoot;
}
exports.ready = ready;
function confirmdEventListener(event) {
    console.info(this);
    console.info(event);
    const path = event.path;
    if (path == null) {
        return;
    }
    console.info(getIndex.call(path[0]));
}
function close() {
    console.info('close');
}
exports.close = close;
function getIndex() {
    return this.getAttribute('value');
}
var CubismExpressionObjectUuids;
(function (CubismExpressionObjectUuids) {
    function instantiateFromJson(arr) {
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
    CubismExpressionObjectUuids.instantiateFromJson = instantiateFromJson;
})(CubismExpressionObjectUuids || (CubismExpressionObjectUuids = {}));
