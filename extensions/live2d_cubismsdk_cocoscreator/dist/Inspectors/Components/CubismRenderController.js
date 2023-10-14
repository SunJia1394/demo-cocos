"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = exports.ready = exports.update = exports.$ = exports.template = void 0;
const { Path } = Editor.Utils;
module.paths.push(Path.join(Editor.App.path, 'node_modules'));
const TagName_1 = __importDefault(require("../TagName"));
const SceneScriptHelper_1 = __importDefault(require("../../SceneScriptHelper"));
const Utils_1 = require("../Utils");
exports.template = ``;
exports.$ = {};
async function update(dump) {
    const root = this.$this.shadowRoot;
    if (root == null) {
        return;
    }
    const createElement = root.ownerDocument.createElement.bind(root.ownerDocument);
    const nSection = createElement('section');
    nSection.id = 'main';
    const helper = new UI(nSection, dump.value);
    helper.opacity();
    helper.overwriteFragForModelMultiplyColors();
    helper.overwriteFragForModelScreenColors();
    helper.orderInLayer();
    helper.sortingMode();
    helper.cameraToFace();
    helper.opacityHandler();
    helper.drawOrderHandler();
    helper.depthOffset();
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
async function setProperty(uuid, path, dump) {
    return Editor.Message.request('scene', 'set-property', {
        uuid: uuid,
        path: path,
        dump: dump,
    });
}
class UI extends Utils_1.InspectorComponentGuiHelper {
    constructor(parent, values) {
        super(parent);
        this.values = values;
    }
    opacity() {
        const { opacity, node } = this.values;
        const prop = this.createPropBase('Opacity');
        const slider = this.create('ui-slider');
        slider.slot = 'content';
        slider.step = 0.001;
        slider.preci = 20;
        slider.min = 0;
        slider.max = 1;
        slider.value = opacity.value;
        slider.addEventListener('confirm', async (_event) => {
            await setProperty(node.value.uuid, opacity.path, {
                value: slider.value,
                type: opacity.type,
            });
        });
        prop.append(slider);
        this.parent.appendChild(prop);
    }
    overwriteFragForModelMultiplyColors() {
        const { _isOverwrittenModelMultiplyColors: multiplyColor, node } = this.values;
        const prop = this.createPropBase('OverwriteFragForModelMultiplyColors');
        const content = this.create(TagName_1.default.UI_CHECKBOX);
        content.slot = 'content';
        content.value = multiplyColor.value;
        content.addEventListener('confirm', async (_) => {
            await setProperty(node.value.uuid, multiplyColor.path, {
                value: content.value,
                type: multiplyColor.type,
            });
        });
        prop.appendChild(content);
        this.parent.appendChild(prop);
    }
    overwriteFragForModelScreenColors() {
        const { _isOverwrittenModelScreenColors: screenColor, node } = this.values;
        const prop = this.createPropBase('OverwriteFragForModelScreenColors');
        const content = this.create(TagName_1.default.UI_CHECKBOX);
        content.slot = 'content';
        content.value = screenColor.value;
        content.addEventListener('confirm', async (_) => {
            await setProperty(node.value.uuid, screenColor.path, {
                value: content.value,
                type: screenColor.type,
            });
        });
        prop.appendChild(content);
        this.parent.appendChild(prop);
    }
    orderInLayer() {
        const { sortingOrder, node } = this.values;
        const prop = this.createPropBase('Order In Layer');
        const input = this.create(TagName_1.default.UI_NUM_INPUT);
        input.slot = 'content';
        input.step = 1;
        input.preci = 0;
        input.min = Number.MIN_SAFE_INTEGER;
        input.max = Number.MAX_SAFE_INTEGER;
        input.value = sortingOrder.value;
        input.addEventListener('confirm', async (_event) => {
            await setProperty(node.value.uuid, sortingOrder.path, {
                value: input.value,
                type: sortingOrder.type,
            });
        });
        prop.appendChild(input);
        this.parent.appendChild(prop);
    }
    sortingMode() {
        const { sortingMode, uuid, node } = this.values;
        const prop = this.createPropBase('Sorting Mode');
        const select = this.create(TagName_1.default.UI_SELECT);
        select.slot = 'content';
        const { enumList } = sortingMode;
        for (let i = 0; i < enumList.length; i++) {
            const option = this.create('option');
            option.value = enumList[i].value.toFixed(0);
            option.text = enumList[i].name;
            select.appendChild(option);
        }
        select.setAttribute('value', sortingMode.value.toFixed(0));
        select.addEventListener('confirm', async (_event) => {
            const renderers = await SceneScriptHelper_1.default.CubismRenderController.getCubismRenderers(uuid.value);
            if (renderers == null) {
                console.error(renderers);
                return;
            }
            const tasks = new Array(renderers.length);
            for (let i = 0; i < renderers.length; i++) {
                const renderer = renderers[i];
                tasks[i] = Editor.Message.request('scene', 'query-node', renderer.node);
            }
            const nodeProxies = await Promise.all(tasks);
            const paths = new Array(nodeProxies.length);
            for (let i = 0; i < nodeProxies.length; i++) {
                paths[i] = (0, Utils_1.getComponentPath)(nodeProxies[i], renderers[i].component);
            }
            const changeValue = Reflect.get(select, 'value');
            const setPropertyTasks = new Array(paths.length);
            for (let j = 0; j < paths.length; j++) {
                const path = `${paths[j]}.sortingMode`;
                if (path != null) {
                    setPropertyTasks[j] = setProperty(renderers[j].node, path, {
                        value: Number(changeValue),
                        type: sortingMode.type,
                    });
                }
            }
            await Promise.all(setPropertyTasks);
            await setProperty(node.value.uuid, sortingMode.path, {
                value: Number(changeValue),
                type: sortingMode.type,
            });
        });
        prop.appendChild(select);
        this.parent.appendChild(prop);
    }
    cameraToFace() {
        const { cameraToFace, node } = this.values;
        const prop = this.createPropBase('Camera To Face');
        const comp = this.create(TagName_1.default.UI_COMPONENT);
        comp.slot = 'content';
        comp.droppable = 'cc.Camera';
        if (cameraToFace.value.uuid.length > 0) {
            comp.value = cameraToFace.value.uuid;
        }
        comp.addEventListener('confirm', async (_event) => {
            await setProperty(node.value.uuid, cameraToFace.path, {
                value: {
                    uuid: comp.value && Editor.Utils.UUID.isUUID(comp.value) ? comp.value : '',
                },
                type: cameraToFace.type,
            });
        });
        prop.appendChild(comp);
        this.parent.appendChild(prop);
    }
    objectField(label, comp, node, asset) {
        const { uuid: nUuid } = this.values.node.value;
        const { Type } = Utils_1.HTMLObjectFieldElement;
        const value = comp.value.uuid.length > 0
            ? { uuid: comp.value.uuid, type: Type.component }
            : node.value.uuid.length > 0
                ? { uuid: node.value.uuid, type: Type.node }
                : asset.value.uuid.length > 0
                    ? { uuid: asset.value.uuid, type: Type.asset }
                    : null;
        const prop = this.createPropBase(label);
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
    opacityHandler() {
        const { opacityHandlerComponent: hComp, opacityHandlerNode: hNode, opacityHandlerAsset: hAsset, } = this.values;
        this.objectField('Opacity Handler', hComp, hNode, hAsset);
    }
    drawOrderHandler() {
        const { drawOrderHandlerComponent: hComp, drawOrderHandlerNode: hNode, drawOrderHandlerAsset: hAsset, } = this.values;
        this.objectField('Draw Order Handler', hComp, hNode, hAsset);
    }
    depthOffset() {
        const { depthOffset, node } = this.values;
        const prop = this.createPropBase('Depth Offset');
        const input = this.create(TagName_1.default.UI_NUM_INPUT);
        input.slot = 'content';
        input.preci = 20;
        input.step = 0.000001;
        input.min = 0.000001;
        input.max = Number.MAX_SAFE_INTEGER;
        input.value = depthOffset.value;
        input.addEventListener('confirm', async (_event) => {
            await setProperty(node.value.uuid, depthOffset.path, {
                value: input.value,
                type: depthOffset.type,
            });
        });
        prop.appendChild(input);
        this.parent.appendChild(prop);
    }
}
