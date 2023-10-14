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
    const getPartsResult = (await Editor.Message.request('scene', 'execute-component-method', {
        uuid: dump.value.uuid.value,
        name: 'getParts',
        args: [],
    }));
    if (getPartsResult == null) {
        return;
    }
    const { parts } = getPartsResult;
    const root = this.$this.shadowRoot;
    if (root == null) {
        return;
    }
    const createElement = root.ownerDocument.createElement.bind(root.ownerDocument);
    const nSection = createElement('SECTION');
    nSection.id = 'main';
    for (let i = 0; i < parts.length; i++) {
        const { nodeUuid, componentUuid, opacity, displayName } = parts[i];
        const nodeProxy = (await Editor.Message.request('scene', 'query-node', nodeUuid));
        const path = (0, Utils_1.getComponentPath)(nodeProxy, componentUuid);
        if (path == null) {
            console.error('Find Component path failed.');
            continue;
        }
        const prop = createElement(TagName_1.default.UI_PROP);
        prop.setAttribute('dump', 'Float');
        const label = createElement(TagName_1.default.UI_LABEL);
        label.innerText = displayName;
        label.slot = 'label';
        const slider = createElement(TagName_1.default.UI_SLIDER);
        slider.setAttribute('value', opacity.toFixed(20));
        slider.setAttribute('step', '0.001');
        slider.setAttribute('min', '0');
        slider.setAttribute('max', '1');
        slider.slot = 'content';
        slider.addEventListener('confirm', async (_event) => {
            var _a;
            const value = ((_a = Reflect.get(slider, 'value')) !== null && _a !== void 0 ? _a : 0);
            (0, Utils_1.requestSetProperty)(nodeUuid, `${path}.opacityInEditor`, { value: value, type: 'Float' });
        });
        prop.append(label, slider);
        nSection.appendChild(prop);
    }
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
