"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneScriptHelper = void 0;
var SceneScriptHelper;
(function (SceneScriptHelper) {
    function executeSceneScript(methodName, args) {
        return Editor.Message.request('scene', 'execute-scene-script', {
            name: 'live2d_cubismsdk_cocoscreator',
            method: methodName,
            args: args,
        });
    }
    let CubismRenderController;
    (function (CubismRenderController) {
        function getCubismRenderers(uuid) {
            return executeSceneScript('cubismRenderControllerGetCubismRenderers', [uuid]);
        }
        CubismRenderController.getCubismRenderers = getCubismRenderers;
    })(CubismRenderController = SceneScriptHelper.CubismRenderController || (SceneScriptHelper.CubismRenderController = {}));
})(SceneScriptHelper || (exports.SceneScriptHelper = SceneScriptHelper = {}));
exports.default = SceneScriptHelper;
