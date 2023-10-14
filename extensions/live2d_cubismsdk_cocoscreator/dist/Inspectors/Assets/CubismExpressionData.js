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
    const createProp = (dump, name) => {
        const prop = createElement(TagName_1.default.UI_PROP);
        prop.setAttribute('readonly', 'true');
        prop.setAttribute('dump', dump);
        const label = createElement(TagName_1.default.UI_LABEL);
        label.slot = 'label';
        label.innerText = name;
        prop.appendChild(label);
        return prop;
    };
    const createInput = (value) => {
        const input = createElement(TagName_1.default.UI_INPUT);
        input.slot = 'content';
        input.setAttribute('readonly', '');
        input.setAttribute('value', value);
        return input;
    };
    const createNumInput = (value) => {
        const input = createElement(TagName_1.default.UI_NUM_INPUT);
        input.slot = 'content';
        input.setAttribute('readonly', '');
        input.setAttribute('step', '0.001');
        input.setAttribute('preci', '20');
        input.setAttribute('min', Number.MIN_SAFE_INTEGER.toFixed(20));
        input.setAttribute('max', Number.MAX_SAFE_INTEGER.toFixed(20));
        input.setAttribute('value', value);
        return input;
    };
    const asset = assetList[0];
    if (assetList.length > 1) {
        const p = createElement('p');
        p.innerText = 'Can not edit multiple objects.';
        nSection.appendChild(p);
    }
    else {
        const jsonSrc = (0, fs_1.readFileSync)(asset.library['.json'], 'utf8');
        const json = JSON.parse(jsonSrc);
        const { type, fadeInTime, fadeOutTime, parameters } = json[0];
        {
            const prop = createProp('String', 'Type');
            const input = createInput(type);
            prop.appendChild(input);
            nSection.appendChild(prop);
        }
        {
            const prop = createProp('Float', 'Fade In Time');
            const input = createNumInput(fadeInTime.toFixed(20));
            prop.appendChild(input);
            nSection.appendChild(prop);
        }
        {
            const prop = createProp('Float', 'Fade Out Time');
            const input = createNumInput(fadeOutTime.toFixed(20));
            prop.appendChild(input);
            nSection.appendChild(prop);
        }
        for (let i = 0; i < parameters.length; i++) {
            const { id, value, blend } = json[parameters[i].__id__];
            const session = createElement(TagName_1.default.UI_SECTION);
            session.setAttribute('header', id);
            {
                const prop = createProp('String', 'ID');
                const input = createInput(id);
                prop.appendChild(input);
                session.appendChild(prop);
            }
            {
                const prop = createProp('Float', 'Value');
                const input = createNumInput(value.toFixed(20));
                prop.appendChild(input);
                session.appendChild(prop);
            }
            const options = Array(CubismParameterBlendMode.count());
            for (let j = 0; j < options.length; j++) {
                const option = createElement('option');
                option.setAttribute('value', j.toFixed(0));
                option.innerText = CubismParameterBlendMode[j];
                options[j] = option;
            }
            {
                const prop = createProp('Enum', 'Value');
                const select = createElement(TagName_1.default.UI_SELECT);
                select.slot = 'content';
                select.setAttribute('readonly', '');
                for (let j = 0; j < options.length; j++) {
                    select.appendChild(options[j]);
                }
                select.setAttribute('value', blend.toFixed(0));
                prop.appendChild(select);
                session.appendChild(prop);
            }
            nSection.appendChild(session);
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
function ready() {
    console.info('ready');
}
exports.ready = ready;
function close() {
    console.info('close');
}
exports.close = close;
var CubismParameterBlendMode;
(function (CubismParameterBlendMode) {
    CubismParameterBlendMode[CubismParameterBlendMode["Override"] = 0] = "Override";
    CubismParameterBlendMode[CubismParameterBlendMode["Additive"] = 1] = "Additive";
    CubismParameterBlendMode[CubismParameterBlendMode["Multiply"] = 2] = "Multiply";
})(CubismParameterBlendMode || (CubismParameterBlendMode = {}));
(function (CubismParameterBlendMode) {
    function count() {
        let length = 0;
        for (let j = 0; CubismParameterBlendMode[j] !== undefined; j++) {
            length = j;
        }
        return length;
    }
    CubismParameterBlendMode.count = count;
})(CubismParameterBlendMode || (CubismParameterBlendMode = {}));
