"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubismFadeMotionListSerializedAsset = void 0;
class CubismFadeMotionListSerializedAsset {
    constructor(motionInstanceIds, cubismFadeMotionObjects) {
        this.motionInstanceIds = motionInstanceIds;
        this.cubismFadeMotionObjects = cubismFadeMotionObjects;
    }
    static instantiateFromJson(json) {
        if (json == null) {
            return undefined;
        }
        const motionInstanceIds = MotionInstanceIds.instantiateFromJson(json.motionInstanceIds);
        const cubismFadeMotionObjects = CubismFadeMotionObjects.instantiateFromJson(json.cubismFadeMotionObjects);
        if (motionInstanceIds === undefined || cubismFadeMotionObjects === undefined) {
            console.error('json parsing error.');
            return undefined;
        }
        return new CubismFadeMotionListSerializedAsset(motionInstanceIds, cubismFadeMotionObjects);
    }
}
exports.CubismFadeMotionListSerializedAsset = CubismFadeMotionListSerializedAsset;
var MotionInstanceIds;
(function (MotionInstanceIds) {
    function instantiateFromJson(json) {
        const cubismFadeMotionObjects = Array.isArray(json) ? json : undefined;
        if (cubismFadeMotionObjects == undefined) {
            return undefined;
        }
        if (cubismFadeMotionObjects.every((e, _i, _a) => typeof e == 'number')) {
            return cubismFadeMotionObjects;
        }
        return undefined;
    }
    MotionInstanceIds.instantiateFromJson = instantiateFromJson;
})(MotionInstanceIds || (MotionInstanceIds = {}));
var CubismFadeMotionObjects;
(function (CubismFadeMotionObjects) {
    function instantiateFromJson(json) {
        const cubismFadeMotionObjects = Array.isArray(json) ? json : undefined;
        if (cubismFadeMotionObjects == undefined) {
            return undefined;
        }
        if (cubismFadeMotionObjects.every((e, _i, _a) => typeof e == 'string')) {
            return cubismFadeMotionObjects;
        }
        return undefined;
    }
    CubismFadeMotionObjects.instantiateFromJson = instantiateFromJson;
})(CubismFadeMotionObjects || (CubismFadeMotionObjects = {}));
