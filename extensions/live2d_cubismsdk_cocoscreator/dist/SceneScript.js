"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = exports.unload = exports.load = void 0;
const { Path } = Editor.Utils;
module.paths.push(Path.join(Editor.App.path, 'node_modules'));
const cc_1 = require("cc");
function load() { }
exports.load = load;
function unload() { }
exports.unload = unload;
var SceneScript;
(function (SceneScript) {
    function getAllComponentsFromScene() {
        const scene = cc_1.director.getScene();
        if (scene == null) {
            return null;
        }
        return scene.getComponentsInChildren(cc_1.Component);
    }
    let CubismRenderController;
    (function (CubismRenderController) {
        async function getCubismRenderers(uuid) {
            const components = getAllComponentsFromScene();
            if (components == null) {
                return null;
            }
            for (let i = 0; i < components.length; i++) {
                const comp = components[i];
                if (comp.uuid == uuid) {
                    const ctrl = comp;
                    if (ctrl.renderers == null) {
                        return null;
                    }
                    const result = new Array(ctrl.renderers.length);
                    for (let j = 0; j < ctrl.renderers.length; j++) {
                        const renderer = ctrl.renderers[j];
                        result[j] = { node: renderer.node.uuid, component: renderer.uuid };
                    }
                    return result;
                }
            }
            console.error('Find CubismRenderController failed.');
            return null;
        }
        CubismRenderController.getCubismRenderers = getCubismRenderers;
    })(CubismRenderController = SceneScript.CubismRenderController || (SceneScript.CubismRenderController = {}));
})(SceneScript || (SceneScript = {}));
var methods;
(function (methods) {
    methods.cubismRenderControllerGetCubismRenderers = SceneScript.CubismRenderController.getCubismRenderers;
})(methods || (exports.methods = methods = {}));
