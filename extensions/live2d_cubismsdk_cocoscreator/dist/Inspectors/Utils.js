"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InspectorComponentGuiHelper = exports.InspectorGuiHelper = exports.HTMLObjectFieldElement = exports.getStringValue = exports.getFloatValue = exports.getIntegerValue = exports.requestSetProperty = exports.selectAddEnumListToOptions = exports.createPropBase = exports.getComponentPath = void 0;
const TagName_1 = __importDefault(require("./TagName"));
function getComponentPath(self, uuid) {
    const comps = self.__comps__;
    for (let i = 0; i < comps.length; i++) {
        if (comps[i].value.uuid.value == uuid) {
            return '__comps__.' + i;
        }
    }
    return null;
}
exports.getComponentPath = getComponentPath;
function createPropBase(create, name) {
    const prop = create(TagName_1.default.UI_PROP);
    const label = create(TagName_1.default.UI_LABEL);
    label.slot = 'label';
    label.innerText = name;
    prop.appendChild(label);
    return prop;
}
exports.createPropBase = createPropBase;
function selectAddEnumListToOptions(select, enumList) {
    const createElement = select.ownerDocument.createElement.bind(select.ownerDocument);
    for (let i = 0; i < enumList.length; i++) {
        const option = createElement('option');
        option.setAttribute('value', enumList[i].value.toFixed(0));
        option.innerText = enumList[i].name;
        select.appendChild(option);
    }
}
exports.selectAddEnumListToOptions = selectAddEnumListToOptions;
async function requestSetProperty(uuid, path, dump) {
    return Editor.Message.request('scene', 'set-property', {
        uuid: uuid,
        path: path,
        dump: dump,
    });
}
exports.requestSetProperty = requestSetProperty;
function getIntegerValue(target) {
    const value = Reflect.get(target, 'value');
    return Number.isInteger(value) ? value : undefined;
}
exports.getIntegerValue = getIntegerValue;
function getFloatValue(target) {
    const value = Reflect.get(target, 'value');
    return Number.isFinite(value) ? value : undefined;
}
exports.getFloatValue = getFloatValue;
function getStringValue(target) {
    const value = Reflect.get(target, 'value');
    return typeof value == 'string' ? value : undefined;
}
exports.getStringValue = getStringValue;
const styleSheet = new CSSStyleSheet();
styleSheet.insertRule(`:host { display: flex; flex-direction: column; }`);
styleSheet.insertRule(`ui-tab { display: block; margin-bottom: 10px; align-self: flex-start; }`);
styleSheet.insertRule(`ui-component, ui-node, ui-asset { display: none; flex-basis: auto; align-self: stretch; }`);
styleSheet.insertRule(`ui-tab[value="0"] ~ ui-component { display: block; }`);
styleSheet.insertRule(`ui-tab[value="1"] ~ ui-node { display: block; }`);
styleSheet.insertRule(`ui-tab[value="2"] ~ ui-asset { display: block; }`);
const TAB_LABELS = ['Component', 'Node', 'Asset'];
class HTMLObjectFieldElement extends HTMLElement {
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value;
        if (this.isConnected) {
            this.tab.value = value;
        }
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (value == null) {
            this._value = null;
        }
        else {
            this._value = { uuid: value.uuid, type: value.type };
            Object.freeze(this._value);
        }
    }
    constructor() {
        super();
        this.tab = null;
        this.component = null;
        this.node = null;
        this.asset = null;
        this._selected = HTMLObjectFieldElement.Type.component;
        this._value = null;
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a, _b, _c;
        const { Type, generateValueChangeEvent } = HTMLObjectFieldElement;
        const create = this.ownerDocument.createElement.bind(this.ownerDocument);
        const { shadowRoot } = this;
        if (shadowRoot == null) {
            return;
        }
        shadowRoot.adoptedStyleSheets = [styleSheet];
        const tab = create(TagName_1.default.UI_TAB);
        for (let i = 0; i < TAB_LABELS.length; i++) {
            const button = create(TagName_1.default.UI_BUTTON);
            button.innerText = TAB_LABELS[i];
            tab.appendChild(button);
        }
        tab.value = this.selected;
        tab.addEventListener('confirm', (_) => {
            this._selected = tab.value;
        });
        this.tab = shadowRoot.appendChild(tab);
        const comp = create(TagName_1.default.UI_COMPONENT);
        comp.droppable = 'cc.Component';
        if (((_a = this.value) === null || _a === void 0 ? void 0 : _a.type) === Type.component) {
            comp.value = this.value.uuid;
        }
        comp.addEventListener('confirm', this.generateEventListenerFunc(comp, Type.component));
        this.component = shadowRoot.appendChild(comp);
        const node = create(TagName_1.default.UI_NODE);
        node.droppable = 'cc.Node';
        if (((_b = this.value) === null || _b === void 0 ? void 0 : _b.type) === Type.node) {
            node.value = this.value.uuid;
        }
        node.addEventListener('confirm', this.generateEventListenerFunc(node, Type.node));
        this.node = shadowRoot.appendChild(node);
        const asset = create(TagName_1.default.UI_ASSET);
        asset.droppable = 'cc.Asset';
        if (((_c = this.value) === null || _c === void 0 ? void 0 : _c.type) === Type.asset) {
            asset.value = this.value.uuid;
        }
        asset.addEventListener('confirm', this.generateEventListenerFunc(asset, Type.asset));
        this.asset = shadowRoot.appendChild(asset);
    }
    disconnectedCallback() {
        const { shadowRoot } = this;
        if (shadowRoot == null) {
            return;
        }
        while (shadowRoot.firstChild != null) {
            shadowRoot.removeChild(shadowRoot.firstChild);
        }
    }
    generateEventListenerFunc(target, type) {
        return function (event) {
            const { self, target, type } = this;
            const backup = self.value;
            if (target.value) {
                self._value = { uuid: target.value, type: type };
            }
            else {
                self._value = null;
            }
            const cancel = self.dispatchEvent(HTMLObjectFieldElement.generateValueChangeEvent(event, type));
            if (event.cancelable && !cancel) {
                self._value = backup;
                event.preventDefault();
            }
        }.bind({ self: this, target: target, type: type });
    }
    static generateValueChangeEvent(event, detail) {
        return new CustomEvent('confirm', {
            bubbles: event.bubbles,
            cancelable: event.cancelable,
            composed: event.composed,
            detail: detail,
        });
    }
}
exports.HTMLObjectFieldElement = HTMLObjectFieldElement;
customElements.define('cubism-object-field', HTMLObjectFieldElement);
(function (HTMLObjectFieldElement) {
    let Type;
    (function (Type) {
        Type[Type["component"] = 0] = "component";
        Type[Type["node"] = 1] = "node";
        Type[Type["asset"] = 2] = "asset";
    })(Type = HTMLObjectFieldElement.Type || (HTMLObjectFieldElement.Type = {}));
})(HTMLObjectFieldElement || (exports.HTMLObjectFieldElement = HTMLObjectFieldElement = {}));
class InspectorGuiHelper {
    constructor(parent) {
        this.parent = parent;
    }
    create(tagName, options) {
        return this.parent.ownerDocument.createElement(tagName, options);
    }
    createPropBase(name) {
        const prop = this.create(TagName_1.default.UI_PROP);
        const label = this.create(TagName_1.default.UI_LABEL);
        label.slot = 'label';
        label.innerText = name;
        prop.appendChild(label);
        return prop;
    }
}
exports.InspectorGuiHelper = InspectorGuiHelper;
class InspectorComponentGuiHelper extends InspectorGuiHelper {
    constructor(parent) {
        super(parent);
    }
}
exports.InspectorComponentGuiHelper = InspectorComponentGuiHelper;
