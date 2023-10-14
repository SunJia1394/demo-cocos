"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = exports.unload = exports.load = void 0;
const CubismMocImporter_1 = __importDefault(require("./Internals/CubismMocImporter"));
const CubismModel3JsonImporter_1 = __importDefault(require("./Internals/CubismModel3JsonImporter"));
const CubismMaskTextureImporter_1 = __importDefault(require("./Internals/CubismMaskTextureImporter"));
const CubismExp3JsonImporter_1 = __importDefault(require("./Internals/CubismExp3JsonImporter"));
const CubismMotion3JsonImporter_1 = __importDefault(require("./Internals/CubismMotion3JsonImporter"));
const CubismExpressionDataImporter_1 = __importDefault(require("./Internals/CubismExpressionDataImporter"));
const CubismExpressionListImporter_1 = __importDefault(require("./Internals/CubismExpressionListImporter"));
const CubismFadeMotionDataImporter_1 = __importDefault(require("./Internals/CubismFadeMotionDataImporter"));
const CubismFadeMotionListImporter_1 = __importDefault(require("./Internals/CubismFadeMotionListImporter"));
function load() { }
exports.load = load;
function unload() { }
exports.unload = unload;
var methods;
(function (methods) {
    function registerCubismModel3JsonImporter() {
        return register(['.json'], CubismModel3JsonImporter_1.default);
    }
    methods.registerCubismModel3JsonImporter = registerCubismModel3JsonImporter;
    function registerCubismExp3JsonImporter() {
        return register(['.json'], CubismExp3JsonImporter_1.default);
    }
    methods.registerCubismExp3JsonImporter = registerCubismExp3JsonImporter;
    function registerCubismMotion3JsonImporter() {
        return register(['.json'], CubismMotion3JsonImporter_1.default);
    }
    methods.registerCubismMotion3JsonImporter = registerCubismMotion3JsonImporter;
    function registerCubismMocImporter() {
        return register(['.moc3'], CubismMocImporter_1.default);
    }
    methods.registerCubismMocImporter = registerCubismMocImporter;
    function registerCubismExpressionDataImporter() {
        return register(['.asset'], CubismExpressionDataImporter_1.default);
    }
    methods.registerCubismExpressionDataImporter = registerCubismExpressionDataImporter;
    function registerCubismExpressionListImporter() {
        return register(['.asset'], CubismExpressionListImporter_1.default);
    }
    methods.registerCubismExpressionListImporter = registerCubismExpressionListImporter;
    function registerCubismFadeMotionDataImporter() {
        return register(['.asset'], CubismFadeMotionDataImporter_1.default);
    }
    methods.registerCubismFadeMotionDataImporter = registerCubismFadeMotionDataImporter;
    function registerCubismFadeMotionListImporter() {
        return register(['.asset'], CubismFadeMotionListImporter_1.default);
    }
    methods.registerCubismFadeMotionListImporter = registerCubismFadeMotionListImporter;
    function registerCubismMaskTextureImporter() {
        return register(['.asset'], CubismMaskTextureImporter_1.default);
    }
    methods.registerCubismMaskTextureImporter = registerCubismMaskTextureImporter;
    function register(extname, importer) {
        return { extname: extname, importer: importer };
    }
})(methods || (exports.methods = methods = {}));
