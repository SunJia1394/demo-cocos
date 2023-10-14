"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.ready = exports.update = exports.$ = exports.template = void 0;
const { Path } = Editor.Utils;
module.paths.push(Path.join(Editor.App.path, 'node_modules'));
const fs_1 = require("fs");
const CubismFadeMotionListSerializedAsset_1 = require("../../SerializedAssets/CubismFadeMotionListSerializedAsset");
const TagName_1 = __importDefault(require("../TagName"));
const Utils_1 = require("../Utils");
exports.template = ``;
exports.$ = {};
const UTF8 = 'utf8';
function update(assetList, metaList) {
    const root = this.$this.shadowRoot;
    if (root == null) {
        return;
    }
    if (assetList.length != 1) {
        errorMessage(root, 'Multiple edit unsupported.');
        return;
    }
    const { 0: asset } = assetList;
    const json = JSON.parse((0, fs_1.readFileSync)(asset.file, UTF8));
    const fadeMotionList = CubismFadeMotionListSerializedAsset_1.CubismFadeMotionListSerializedAsset.instantiateFromJson(json);
    if (fadeMotionList == null) {
        errorMessage(root, 'Parsing error.');
        return;
    }
    const nSection = root.ownerDocument.createElement('SECTION');
    nSection.id = 'main';
    const helper = new UI(nSection, fadeMotionList);
    helper.motionInstanceIds();
    helper.cubismFadeMotionObjects();
    const oSection = root.getElementById('main');
    if (oSection) {
        root.replaceChild(nSection, oSection);
    }
    else {
        root.appendChild(nSection);
    }
}
exports.update = update;
function ready() { }
exports.ready = ready;
function close() { }
exports.close = close;
function errorMessage(root, message) {
    const nSection = root.ownerDocument.createElement('SECTION');
    nSection.id = 'main';
    const p = root.ownerDocument.createElement('p');
    p.innerText = message;
    nSection.appendChild(p);
    const oSection = root.getElementById('main');
    if (oSection) {
        root.replaceChild(nSection, oSection);
    }
    else {
        root.appendChild(nSection);
    }
}
class UI extends Utils_1.InspectorGuiHelper {
    constructor(parent, values) {
        super(parent);
        this.values = values;
    }
    motionInstanceIds() {
        const { motionInstanceIds } = this.values;
        const section = this.create(TagName_1.default.UI_SECTION);
        section.header = 'Motion Instance Ids';
        for (let i = 0; i < motionInstanceIds.length; i++) {
            const prop = this.createPropBase(`Element ${i}`);
            const content = this.create(TagName_1.default.UI_NUM_INPUT);
            content.slot = 'content';
            content.value = motionInstanceIds[i];
            prop.appendChild(content);
            section.appendChild(prop);
        }
        this.parent.appendChild(section);
    }
    cubismFadeMotionObjects() {
        const { cubismFadeMotionObjects } = this.values;
        const section = this.create(TagName_1.default.UI_SECTION);
        section.header = 'Cubism Fade Motion Objects';
        for (let i = 0; i < cubismFadeMotionObjects.length; i++) {
            const prop = this.createPropBase(`Element ${i}`);
            const content = this.create(TagName_1.default.UI_ASSET);
            content.slot = 'content';
            content.droppable = 'CubismFadeMotionData';
            content.value = cubismFadeMotionObjects[i];
            prop.appendChild(content);
            section.appendChild(prop);
        }
        this.parent.appendChild(section);
    }
}
