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
exports.template = ``;
exports.$ = {};
async function update(dump) {
    const root = this.$this.shadowRoot;
    if (root == null) {
        return;
    }
    const nSection = root.ownerDocument.createElement('SECTION');
    nSection.id = 'main';
    const helper = new UI(nSection, dump.value);
    helper.overwriteFlagDrawableMultiplyColor();
    helper.overwriteFlagDrawableScreenColor();
    helper.color();
    helper.multiplyColor();
    helper.screenColor();
    helper.mainTexture();
    helper.localOrder();
    helper.priority();
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
    overwriteFlagDrawableMultiplyColor() {
        const { _isOverwrittenDrawableMultiplyColors: multiplyColor, node } = this.values;
        const prop = this.createPropBase('OverwriteFlagDrawableMultiplyColor');
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
    overwriteFlagDrawableScreenColor() {
        const { _isOverwrittenDrawableScreenColor: screenColor, node } = this.values;
        const prop = this.createPropBase('OverwriteFlagDrawableScreenColor');
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
    color() {
        const { color, node } = this.values;
        const prop = this.createPropBase('Color');
        const content = this.create(TagName_1.default.UI_COLOR);
        content.slot = 'content';
        const { r, g, b, a } = color.value;
        content.value = [r, g, b, a];
        content.addEventListener('confirm', async (_) => {
            const { value: v } = content;
            const dValue = v ? { r: v[0], g: v[1], b: v[2], a: v[3] } : { r, g, b, a };
            await setProperty(node.value.uuid, color.path, {
                value: dValue,
                type: color.type,
            });
        });
        prop.appendChild(content);
        this.parent.appendChild(prop);
    }
    multiplyColor() {
        const { _multiplyColor, node } = this.values;
        const prop = this.createPropBase('MultiplyColor');
        const content = this.create(TagName_1.default.UI_COLOR);
        content.slot = 'content';
        const { r, g, b, a } = _multiplyColor.value;
        content.value = [r, g, b, a];
        content.addEventListener('confirm', async (_) => {
            const { value: v } = content;
            const dValue = v ? { r: v[0], g: v[1], b: v[2], a: v[3] } : { r, g, b, a };
            await setProperty(node.value.uuid, _multiplyColor.path, {
                value: dValue,
                type: _multiplyColor.type,
            });
        });
        prop.appendChild(content);
        this.parent.appendChild(prop);
    }
    screenColor() {
        const { _screenColor, node } = this.values;
        const prop = this.createPropBase('ScreenColor');
        const content = this.create(TagName_1.default.UI_COLOR);
        content.slot = 'content';
        const { r, g, b, a } = _screenColor.value;
        content.value = [r, g, b, a];
        content.addEventListener('confirm', async (_) => {
            const { value: v } = content;
            const dValue = v ? { r: v[0], g: v[1], b: v[2], a: v[3] } : { r, g, b, a };
            await setProperty(node.value.uuid, _screenColor.path, {
                value: dValue,
                type: _screenColor.type,
            });
        });
        prop.appendChild(content);
        this.parent.appendChild(prop);
    }
    mainTexture() {
        const { mainTexture, node } = this.values;
        const prop = this.createPropBase('Main Texture');
        const content = this.create(TagName_1.default.UI_ASSET);
        content.slot = 'content';
        content.droppable = 'cc.Texture2D';
        content.value = mainTexture.value.uuid;
        content.addEventListener('confirm', async (_event) => {
            var _a;
            await setProperty(node.value.uuid, mainTexture.path, {
                value: { uuid: (_a = content.value) !== null && _a !== void 0 ? _a : '' },
                type: mainTexture.type,
            });
        });
        prop.appendChild(content);
        this.parent.appendChild(prop);
    }
    localOrder() {
        const { localSortingOrder, node } = this.values;
        const prop = this.createPropBase('Local Order');
        const content = this.create(TagName_1.default.UI_NUM_INPUT);
        content.slot = 'content';
        content.preci = 0;
        content.step = 1;
        content.min = Number.MIN_SAFE_INTEGER;
        content.max = Number.MAX_SAFE_INTEGER;
        content.value = localSortingOrder.value;
        content.addEventListener('confirm', async (_event) => {
            await setProperty(node.value.uuid, localSortingOrder.path, {
                value: content.value,
                type: localSortingOrder.type,
            });
        });
        prop.appendChild(content);
        this.parent.appendChild(prop);
    }
    priority() {
        const { _priorityInEditor, node } = this.values;
        const prop = this.createPropBase('Priority');
        const content = this.create(TagName_1.default.UI_NUM_INPUT);
        content.slot = 'content';
        content.preci = 7;
        content.step = 0.000001;
        content.min = Number.MIN_SAFE_INTEGER;
        content.max = Number.MAX_SAFE_INTEGER;
        content.value = _priorityInEditor.value;
        prop.appendChild(content);
        this.parent.appendChild(prop);
    }
}
