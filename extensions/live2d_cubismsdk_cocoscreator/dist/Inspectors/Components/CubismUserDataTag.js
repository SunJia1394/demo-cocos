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
    helper.value();
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
    value() {
        const { value, node } = this.values;
        const prop = this.createPropBase('Value');
        const content = this.create(TagName_1.default.UI_TEXTAREA);
        content.slot = 'content';
        content.value = value.value;
        content.addEventListener('confirm', async (_) => {
            await setProperty(node.value.uuid, value.path, {
                value: content.value,
                type: value.type,
            });
        });
        prop.appendChild(content);
        this.parent.appendChild(prop);
    }
}
