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
const POWER_OF_TWO_MAX = 4503599627370496;
function update(assetList, metaList) {
    const root = this.$this.shadowRoot;
    if (root == null) {
        return;
    }
    const createElement = root.ownerDocument.createElement.bind(root.ownerDocument);
    const nSection = createElement('SECTION');
    nSection.id = 'main';
    const createProp = (dump, name) => {
        const prop = createElement(TagName_1.default.UI_PROP);
        prop.setAttribute('dump', dump);
        const label = createElement(TagName_1.default.UI_LABEL);
        label.slot = 'label';
        label.innerText = name;
        prop.appendChild(label);
        return prop;
    };
    const createButton = (name, isDisabled) => {
        const button = createElement(TagName_1.default.UI_BUTTON);
        button.innerText = name;
        if (isDisabled) {
            button.setAttribute('disabled', '');
        }
        return button;
    };
    const asset = assetList[0];
    if (assetList.length > 1) {
        const p = createElement('p');
        p.innerText = 'Can not edit multiple objects.';
        nSection.appendChild(p);
    }
    else {
        const jsonSrc = (0, fs_1.readFileSync)(asset.file, 'utf8');
        const json = JSON.parse(jsonSrc);
        {
            const prop = createProp('Integer', 'Size');
            const input = createElement(TagName_1.default.UI_NUM_INPUT);
            input.slot = 'content';
            input.setAttribute('step', '1');
            input.setAttribute('preci', '0');
            input.setAttribute('min', '2');
            input.setAttribute('max', POWER_OF_TWO_MAX.toFixed(0));
            input.setAttribute('value', json.size.toFixed(0));
            input.addEventListener('blur', (ev) => {
                const value = Reflect.get(input, 'value');
                if (typeof value == 'number') {
                    const fix = closestPowerOfTwo(value);
                    Reflect.set(input, 'value', fix);
                    metaList.forEach((element) => {
                        if (Reflect.has(element.userData, 'fromInspector')) {
                            element.userData['fromInspector'].size = fix;
                        }
                        else {
                            element.userData['fromInspector'] = { size: fix, subdivisions: json.subdivisions };
                        }
                    });
                    this.dispatch('change');
                }
            });
            prop.appendChild(input);
            nSection.appendChild(prop);
        }
        {
            const prop = createProp('Integer', 'Subdivisions');
            const slider = createElement(TagName_1.default.UI_SLIDER);
            slider.slot = 'content';
            slider.setAttribute('step', '1');
            slider.setAttribute('min', '1');
            slider.setAttribute('max', '5');
            slider.setAttribute('value', json.subdivisions.toFixed(0));
            slider.addEventListener('confirm', (ev) => {
                const value = Reflect.get(slider, 'value');
                if (typeof value == 'number') {
                    metaList.forEach((element) => {
                        if (Reflect.has(element.userData, 'fromInspector')) {
                            element.userData['fromInspector'].subdivisions = value;
                        }
                        else {
                            element.userData['fromInspector'] = { size: json.size, subdivisions: value };
                        }
                    });
                    this.dispatch('change');
                }
            });
            prop.appendChild(slider);
            nSection.appendChild(prop);
        }
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
function closestPowerOfTwo(value) {
    if (value > POWER_OF_TWO_MAX) {
        return POWER_OF_TWO_MAX;
    }
    if (value < 1) {
        return 1;
    }
    let prev = 1;
    let next = 1;
    while (next < value && next < POWER_OF_TWO_MAX) {
        prev = next;
        next *= 2;
    }
    if (next > POWER_OF_TWO_MAX) {
        return prev;
    }
    return next - value < value - prev ? next : prev;
}
