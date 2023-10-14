"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unload = exports.load = exports.methods = void 0;
const { Path } = Editor.Utils;
module.paths.push(Path.join(Editor.App.path, 'node_modules'));
const fs_1 = require("fs");
const ENABLE = 'Enable';
const DISABLE = 'Disable';
class Live2DCubismSDKSettings {
    constructor(json) {
        var _a, _b;
        this.shouldImportAsOriginalWorkflow = true;
        this.shouldClearAnimationCurves = false;
        if (json) {
            this.shouldImportAsOriginalWorkflow = (_a = json === null || json === void 0 ? void 0 : json.shouldImportAsOriginalWorkflow) !== null && _a !== void 0 ? _a : true;
            this.shouldClearAnimationCurves = (_b = json === null || json === void 0 ? void 0 : json.shouldClearAnimationCurves) !== null && _b !== void 0 ? _b : false;
        }
    }
    static initialize() {
        if (Live2DCubismSDKSettings.loadSettings()) {
            return;
        }
        Live2DCubismSDKSettings.writeSettingsFile();
    }
    static loadSettings() {
        const { settingsDir, settingsFile } = Live2DCubismSDKSettings;
        const fileStat = (0, fs_1.existsSync)(settingsFile) ? (0, fs_1.statSync)(settingsFile) : null;
        if (fileStat === null || fileStat === void 0 ? void 0 : fileStat.isFile()) {
            const str = (0, fs_1.readFileSync)(settingsFile, 'utf8');
            const json = JSON.parse(str);
            Live2DCubismSDKSettings._instance = new Live2DCubismSDKSettings(json);
            return true;
        }
        return false;
    }
    static writeSettingsFile() {
        const { settingsDir, settingsFile } = Live2DCubismSDKSettings;
        const dirStat = (0, fs_1.existsSync)(settingsDir) ? (0, fs_1.statSync)(settingsDir) : null;
        if (dirStat == null || !dirStat.isDirectory()) {
            (0, fs_1.mkdirSync)(settingsDir);
        }
        (0, fs_1.writeFileSync)(settingsFile, JSON.stringify(Live2DCubismSDKSettings._instance));
    }
    static get shouldImportAsOriginalWorkflow() {
        return Live2DCubismSDKSettings._instance.shouldImportAsOriginalWorkflow;
    }
    static set shouldImportAsOriginalWorkflow(value) {
        Live2DCubismSDKSettings._instance.shouldImportAsOriginalWorkflow = value;
        Live2DCubismSDKSettings.writeSettingsFile();
    }
    static toggleShouldImportAsOriginalWorkflow() {
        const { _instance: instance } = Live2DCubismSDKSettings;
        instance.shouldImportAsOriginalWorkflow = !instance.shouldImportAsOriginalWorkflow;
        Live2DCubismSDKSettings.writeSettingsFile();
    }
    static get shouldClearAnimationCurves() {
        return Live2DCubismSDKSettings._instance.shouldClearAnimationCurves;
    }
    static set shouldClearAnimationCurves(value) {
        Live2DCubismSDKSettings._instance.shouldClearAnimationCurves = value;
        Live2DCubismSDKSettings.writeSettingsFile();
    }
    static toggleShouldClearAnimationCurves() {
        const { _instance: instance } = Live2DCubismSDKSettings;
        instance.shouldClearAnimationCurves = !instance.shouldClearAnimationCurves;
        Live2DCubismSDKSettings.writeSettingsFile();
    }
}
Live2DCubismSDKSettings.settingsDir = Path.join(Editor.Project.path, 'Live2DCubismSDKSettings');
Live2DCubismSDKSettings.settingsFile = Path.join(Live2DCubismSDKSettings.settingsDir, 'settings.json');
Live2DCubismSDKSettings._instance = new Live2DCubismSDKSettings();
var methods;
(function (methods) {
    function getShouldImportAsOriginalWorkflow() {
        return Live2DCubismSDKSettings.shouldImportAsOriginalWorkflow;
    }
    methods.getShouldImportAsOriginalWorkflow = getShouldImportAsOriginalWorkflow;
    function setShouldImportAsOriginalWorkflow(value) {
        Live2DCubismSDKSettings.shouldImportAsOriginalWorkflow = value;
    }
    methods.setShouldImportAsOriginalWorkflow = setShouldImportAsOriginalWorkflow;
    async function showShouldImportAsOriginalWorkflowSettingDialog() {
        let state = Live2DCubismSDKSettings.shouldImportAsOriginalWorkflow ? ENABLE : DISABLE;
        const returnValue = await Editor.Dialog.info(`Should import as OriginalWorkflow: ${state}`, {
            buttons: [ENABLE, DISABLE],
        });
        switch (returnValue.response) {
            case 0:
                if (!Live2DCubismSDKSettings.shouldImportAsOriginalWorkflow) {
                    Live2DCubismSDKSettings.shouldImportAsOriginalWorkflow = true;
                }
                break;
            case 1:
                if (Live2DCubismSDKSettings.shouldImportAsOriginalWorkflow) {
                    Live2DCubismSDKSettings.shouldImportAsOriginalWorkflow = false;
                }
                break;
            default:
                Live2DCubismSDKSettings.shouldImportAsOriginalWorkflow = false;
                break;
        }
        await showSettingsViewDialog();
    }
    methods.showShouldImportAsOriginalWorkflowSettingDialog = showShouldImportAsOriginalWorkflowSettingDialog;
    function getShouldClearAnimationCurves() {
        return Live2DCubismSDKSettings.shouldClearAnimationCurves;
    }
    methods.getShouldClearAnimationCurves = getShouldClearAnimationCurves;
    function setShouldClearAnimationCurves(value) {
        Live2DCubismSDKSettings.shouldClearAnimationCurves = value;
    }
    methods.setShouldClearAnimationCurves = setShouldClearAnimationCurves;
    async function showShouldClearAnimationCurvesSettingDialog() {
        let state = Live2DCubismSDKSettings.shouldClearAnimationCurves ? ENABLE : DISABLE;
        const returnValue = await Editor.Dialog.info(`Should clear animation curves: ${state}`, {
            buttons: [ENABLE, DISABLE],
        });
        switch (returnValue.response) {
            case 0:
                if (!Live2DCubismSDKSettings.shouldClearAnimationCurves) {
                    Live2DCubismSDKSettings.shouldClearAnimationCurves = true;
                }
                break;
            case 1:
                if (Live2DCubismSDKSettings.shouldClearAnimationCurves) {
                    Live2DCubismSDKSettings.shouldClearAnimationCurves = false;
                }
                break;
            default:
                Live2DCubismSDKSettings.shouldClearAnimationCurves = false;
                break;
        }
        await showSettingsViewDialog();
    }
    methods.showShouldClearAnimationCurvesSettingDialog = showShouldClearAnimationCurvesSettingDialog;
    async function showSettingsViewDialog() {
        const shouldImportAsOriginalWorkflowState = Live2DCubismSDKSettings.shouldImportAsOriginalWorkflow ? ENABLE : DISABLE;
        const shouldClearAnimationCurvesState = Live2DCubismSDKSettings.shouldClearAnimationCurves
            ? ENABLE
            : DISABLE;
        await Editor.Dialog.info(`Should import as OriginalWorkflow: ${shouldImportAsOriginalWorkflowState}\n` +
            `Should clear animation curves: ${shouldClearAnimationCurvesState}`, {
            buttons: ['OK'],
        });
    }
    methods.showSettingsViewDialog = showSettingsViewDialog;
})(methods || (exports.methods = methods = {}));
function load() {
    console.log('cubism sdk extensions load.');
    Live2DCubismSDKSettings.initialize();
}
exports.load = load;
function unload() {
    console.log('cubism sdk extensions unload.');
}
exports.unload = unload;
