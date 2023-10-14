"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModules = void 0;
var ProjectModules;
(function (ProjectModules) {
    const BASE_URL = 'db://live2d_cubismsdk_cocoscreator/';
    const modules = {};
    async function getModule(path) {
        const module = modules[path];
        if (module != null) {
            return module;
        }
        const imported = (await Editor.Module.importProjectModule(`${BASE_URL}${path}.ts`));
        modules[path] = imported;
        return imported;
    }
    ProjectModules.getModule = getModule;
})(ProjectModules || (exports.ProjectModules = ProjectModules = {}));
