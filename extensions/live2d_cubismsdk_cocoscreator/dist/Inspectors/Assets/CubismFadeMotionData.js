"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.ready = exports.update = exports.$ = exports.template = void 0;
const { Path } = Editor.Utils;
module.paths.push(Path.join(Editor.App.path, 'node_modules'));
const fs_1 = require("fs");
const CubismFadeMotionDataAsset_1 = __importDefault(require("../../SerializedAssets/CubismFadeMotionDataAsset"));
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
    const str = (0, fs_1.readFileSync)(asset.file, UTF8);
    const data = JSON.parse(str);
    const instance = CubismFadeMotionDataAsset_1.default.deserializeFromJson(data);
    if (!instance) {
        errorMessage(root, 'Deserialize error.');
        return;
    }
    const nSection = root.ownerDocument.createElement('SECTION');
    nSection.id = 'main';
    const helper = new UI(nSection, instance);
    helper.fadeInTime();
    helper.fadeOutTime();
    helper.parameterIds();
    helper.parameterCurves();
    helper.parameterFadeInTimes();
    helper.parameterFadeOutTimes();
    helper.motionLength();
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
    fadeInTime() {
        const { fadeInTime } = this.values;
        const prop = this.createPropBase(`Fade In Time`);
        const content = this.create(TagName_1.default.UI_NUM_INPUT);
        content.slot = 'content';
        content.value = fadeInTime;
        content.disabled = true;
        prop.appendChild(content);
        this.parent.appendChild(prop);
    }
    fadeOutTime() {
        const { fadeOutTime } = this.values;
        const prop = this.createPropBase(`Fade Out Time`);
        const content = this.create(TagName_1.default.UI_NUM_INPUT);
        content.slot = 'content';
        content.value = fadeOutTime;
        content.disabled = true;
        prop.appendChild(content);
        this.parent.appendChild(prop);
    }
    parameterIds() {
        const { parameterIds } = this.values;
        const section = this.create(TagName_1.default.UI_SECTION);
        section.header = 'Parameter Ids';
        for (let i = 0; i < parameterIds.length; i++) {
            const prop = this.createPropBase(`Element ${i}`);
            const content = this.create(TagName_1.default.UI_INPUT);
            content.slot = 'content';
            content.value = parameterIds[i];
            content.disabled = true;
            prop.appendChild(content);
            section.appendChild(prop);
        }
        this.parent.appendChild(section);
    }
    parameterCurves() {
        const { internalParameterCurves: curves } = this.values;
        const section = this.create(TagName_1.default.UI_SECTION);
        section.header = 'Parameter Curves';
        for (let i = 0; i < curves.length; i++) {
            const prop = this.createPropBase(`Element ${i}`);
            const content = this.create(TagName_1.default.UI_CURVE);
            content.slot = 'content';
            const keys = new Array(curves[i].length);
            const k = curves[i].getKeyFrame(0);
            let tMax = k.time;
            let tMin = k.time;
            let vMax = 0;
            let vMin = 0;
            for (let j = 0; j < keys.length; j++) {
                const { time, value, inTangent, inWeight, outTangent, outWeight } = curves[i].getKeyFrame(j);
                tMax = Math.max(tMax, time);
                tMin = Math.min(tMin, time);
                vMax = Math.max(vMax, value);
                vMin = Math.min(vMin, value);
                keys[j] = {
                    point: { x: time, y: value },
                    inTangent: inTangent,
                    inTangentWeight: inWeight,
                    outTangent: outTangent,
                    outTangentWeight: outWeight,
                    interpMode: 2,
                    tangentWeightMode: 0,
                };
            }
            let b = Math.max(Math.abs(vMax), Math.abs(vMin));
            content._config = {
                precision: 4,
                showPostWrapMode: true,
                showPreWrapMode: true,
                type: 'hermit',
                xRange: [tMin, tMax],
                yRange: [vMin < 0 ? -b : 0, b],
            };
            content.value = {
                color: 'red',
                keys: keys,
                multiplier: 1,
                preWrapMode: 0,
                postWrapMode: 0,
            };
            content.disabled = true;
            prop.appendChild(content);
            section.appendChild(prop);
        }
        this.parent.appendChild(section);
    }
    parameterFadeInTimes() {
        const { parameterFadeInTimes } = this.values;
        const section = this.create(TagName_1.default.UI_SECTION);
        section.header = 'Parameter Fade In Times';
        for (let i = 0; i < parameterFadeInTimes.length; i++) {
            const prop = this.createPropBase(`Element ${i}`);
            const content = this.create(TagName_1.default.UI_NUM_INPUT);
            content.slot = 'content';
            content.value = parameterFadeInTimes[i];
            content.disabled = true;
            prop.appendChild(content);
            section.appendChild(prop);
        }
        this.parent.appendChild(section);
    }
    parameterFadeOutTimes() {
        const { parameterFadeOutTimes } = this.values;
        const section = this.create(TagName_1.default.UI_SECTION);
        section.header = 'Parameter Fade Out Times';
        for (let i = 0; i < parameterFadeOutTimes.length; i++) {
            const prop = this.createPropBase(`Element ${i}`);
            const content = this.create(TagName_1.default.UI_NUM_INPUT);
            content.slot = 'content';
            content.value = parameterFadeOutTimes[i];
            content.disabled = true;
            prop.appendChild(content);
            section.appendChild(prop);
        }
        this.parent.appendChild(section);
    }
    motionLength() {
        const { motionLength } = this.values;
        const prop = this.createPropBase(`Motion Length`);
        const content = this.create(TagName_1.default.UI_NUM_INPUT);
        content.slot = 'content';
        content.value = motionLength;
        content.disabled = true;
        prop.appendChild(content);
        this.parent.appendChild(prop);
    }
}
