"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.ready = exports.update = exports.$ = exports.template = void 0;
const { Path } = Editor.Utils;
module.paths.push(Path.join(Editor.App.path, 'node_modules'));
const TagName_1 = __importDefault(require("../TagName"));
const Utils_1 = require("../Utils");
exports.template = '';
exports.$ = {};
async function update(dump) {
    const root = this.$this.shadowRoot;
    if (root == null) {
        return;
    }
    const createElement = root.ownerDocument.createElement.bind(root.ownerDocument);
    const nSection = createElement('SECTION');
    nSection.id = 'main';
    const helper = new UI(nSection, dump.value);
    helper.blendMode();
    helper.center();
    helper.damping();
    helper.target();
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
class UI extends Utils_1.InspectorComponentGuiHelper {
    constructor(parent, values) {
        super(parent);
        this.values = values;
    }
    blendMode() {
        const { blendMode, node } = this.values;
        const prop = this.createPropBase('Blend Mode');
        const content = this.create(TagName_1.default.UI_SELECT);
        content.slot = 'content';
        (0, Utils_1.selectAddEnumListToOptions)(content, blendMode.enumList);
        content.value = blendMode.value.toFixed(0);
        content.addEventListener('confirm', async (_event) => {
            await (0, Utils_1.requestSetProperty)(node.value.uuid, blendMode.path, {
                value: content.value != null ? Number.parseInt(content.value) : 0,
                type: blendMode.type,
            });
        });
        prop.appendChild(content);
        this.parent.appendChild(prop);
    }
    center() {
        const { center, node } = this.values;
        const prop = this.createPropBase('Center');
        const content = this.create(TagName_1.default.UI_NODE);
        content.slot = 'content';
        if (center.value.uuid.length > 0) {
            content.value = center.value.uuid;
        }
        content.addEventListener('confirm', async (_event) => {
            var _a;
            await (0, Utils_1.requestSetProperty)(node.value.uuid, center.path, {
                value: { uuid: (_a = content.value) !== null && _a !== void 0 ? _a : '' },
                type: center.type,
            });
        });
        prop.appendChild(content);
        this.parent.appendChild(prop);
    }
    damping() {
        const { damping, node } = this.values;
        const prop = this.createPropBase('Damping');
        const content = this.create(TagName_1.default.UI_NUM_INPUT);
        content.slot = 'content';
        content.preci = 20;
        content.step = 0.001;
        content.min = Number.MIN_SAFE_INTEGER;
        content.max = Number.MAX_SAFE_INTEGER;
        content.value = damping.value;
        content.addEventListener('confirm', async (_) => {
            await (0, Utils_1.requestSetProperty)(node.value.uuid, damping.path, {
                value: content.value,
                type: damping.type,
            });
        });
        prop.appendChild(content);
        this.parent.appendChild(prop);
    }
    target() {
        const { targetAsset: asset, targetComponent: comp, targetNode: node } = this.values;
        const { uuid: nUuid } = this.values.node.value;
        const { Type } = Utils_1.HTMLObjectFieldElement;
        const value = comp.value.uuid.length > 0
            ? { uuid: comp.value.uuid, type: Type.component }
            : node.value.uuid.length > 0
                ? { uuid: node.value.uuid, type: Type.node }
                : asset.value.uuid.length > 0
                    ? { uuid: asset.value.uuid, type: Type.asset }
                    : null;
        const prop = this.createPropBase('Target');
        const objectField = this.create('cubism-object-field');
        if (value != null) {
            objectField.value = { uuid: value.uuid, type: value.type };
        }
        objectField.slot = 'content';
        objectField.addEventListener('confirm', async (event) => {
            var _a, _b, _c;
            const { Type } = Utils_1.HTMLObjectFieldElement;
            const { detail } = event;
            const { value } = objectField;
            switch (detail) {
                case Type.component:
                    await (0, Utils_1.requestSetProperty)(nUuid, comp.path, {
                        value: { uuid: (_a = value === null || value === void 0 ? void 0 : value.uuid) !== null && _a !== void 0 ? _a : '' },
                        type: 'cc.Component',
                    });
                    break;
                case Type.node:
                    await (0, Utils_1.requestSetProperty)(nUuid, node.path, {
                        value: { uuid: (_b = value === null || value === void 0 ? void 0 : value.uuid) !== null && _b !== void 0 ? _b : '' },
                        type: 'cc.Node',
                    });
                    break;
                case Type.asset:
                    await (0, Utils_1.requestSetProperty)(nUuid, asset.path, {
                        value: { uuid: (_c = value === null || value === void 0 ? void 0 : value.uuid) !== null && _c !== void 0 ? _c : '' },
                        type: 'cc.Asset',
                    });
                    break;
                default:
                    const _ = detail;
                    console.error('Property value error.');
                    break;
            }
        });
        prop.appendChild(objectField);
        this.parent.appendChild(prop);
    }
}
