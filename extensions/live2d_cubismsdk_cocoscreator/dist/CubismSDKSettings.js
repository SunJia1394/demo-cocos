"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PLUGIN_NAME = 'live2d_cubismsdk_cocoscreator';
var CubismSDKSettings;
(function (CubismSDKSettings) {
    function getShouldImportAsOriginalWorkflow() {
        return Editor.Message.request(PLUGIN_NAME, 'getShouldImportAsOriginalWorkflow');
    }
    CubismSDKSettings.getShouldImportAsOriginalWorkflow = getShouldImportAsOriginalWorkflow;
    function getShouldClearAnimationCurves() {
        return Editor.Message.request(PLUGIN_NAME, 'getShouldClearAnimationCurves');
    }
    CubismSDKSettings.getShouldClearAnimationCurves = getShouldClearAnimationCurves;
})(CubismSDKSettings || (CubismSDKSettings = {}));
exports.default = CubismSDKSettings;
