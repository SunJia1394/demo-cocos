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
    const getParametersResult = (await Editor.Message.request('scene', 'execute-component-method', {
        uuid: dump.value.uuid.value,
        name: 'getParameters',
        args: [],
    }));
    if (getParametersResult == null) {
        return;
    }
    const { parameters } = getParametersResult;
    const root = this.$this.shadowRoot;
    if (root == null) {
        return;
    }
    const doc = root.ownerDocument;
    const nSection = doc.createElement('SECTION');
    nSection.id = 'main';
    for (let i = 0; i < parameters.length; i++) {
        const { nodeUuid, componentUuid, value, minimumValue: min, maximumValue: max, displayName, } = parameters[i];
        const nodeProxy = (await Editor.Message.request('scene', 'query-node', nodeUuid));
        const path = (0, Utils_1.getComponentPath)(nodeProxy, componentUuid);
        if (path == null) {
            console.error('findCompPath failed.');
            continue;
        }
        const prop = doc.createElement(TagName_1.default.UI_PROP);
        prop.setAttribute('dump', 'Float');
        const label = doc.createElement(TagName_1.default.UI_LABEL);
        label.innerText = displayName;
        label.slot = 'label';
        const slider = doc.createElement(TagName_1.default.UI_SLIDER);
        slider.min = min;
        slider.max = max;
        slider.value = value;
        slider.step = 0.001;
        slider.slot = 'content';
        slider.addEventListener('confirm', async (event) => {
            (0, Utils_1.requestSetProperty)(nodeUuid, `${path}.valueInEditor`, { value: slider.value, type: 'Float' });
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
