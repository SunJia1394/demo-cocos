"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CubismFadeMotionDataAsset {
    constructor(motionName, fadeInTime, fadeOutTime, parameterIds, internalParameterCurves, parameterFadeInTimes, parameterFadeOutTimes, motionLength) {
        this.motionName = motionName !== null && motionName !== void 0 ? motionName : '';
        this.fadeInTime = fadeInTime !== null && fadeInTime !== void 0 ? fadeInTime : 0;
        this.fadeOutTime = fadeOutTime !== null && fadeOutTime !== void 0 ? fadeOutTime : 0;
        this.parameterIds = parameterIds !== null && parameterIds !== void 0 ? parameterIds : new Array(0);
        this.internalParameterCurves = internalParameterCurves !== null && internalParameterCurves !== void 0 ? internalParameterCurves : new Array(0);
        this.parameterFadeInTimes = parameterFadeInTimes !== null && parameterFadeInTimes !== void 0 ? parameterFadeInTimes : new Array(0);
        this.parameterFadeOutTimes = parameterFadeOutTimes !== null && parameterFadeOutTimes !== void 0 ? parameterFadeOutTimes : new Array(0);
        this.motionLength = motionLength !== null && motionLength !== void 0 ? motionLength : 0;
    }
    static deserializeFromJson(json) {
        const motionName = json.motionName;
        if (!isString(motionName)) {
            return undefined;
        }
        const fadeInTime = json.fadeInTime;
        if (!isNumber(fadeInTime)) {
            return undefined;
        }
        const fadeOutTime = json.fadeOutTime;
        if (!isNumber(fadeOutTime)) {
            return undefined;
        }
        const parameterIds = asArray(json.parameterIds, isString);
        if (!parameterIds) {
            return undefined;
        }
        const internalParameterCurves = CubismSerializableCurves.instantiateFromJson(json.internalParameterCurves);
        if (!internalParameterCurves) {
            return undefined;
        }
        const parameterFadeInTimes = asArray(json.parameterFadeInTimes, isNumber);
        if (!parameterFadeInTimes) {
            return undefined;
        }
        const parameterFadeOutTimes = asArray(json.parameterFadeOutTimes, isNumber);
        if (!parameterFadeOutTimes) {
            return undefined;
        }
        const motionLength = json.motionLength;
        if (!isNumber(motionLength)) {
            return undefined;
        }
        return new CubismFadeMotionDataAsset(motionName, fadeInTime, fadeOutTime, parameterIds, internalParameterCurves, parameterFadeInTimes, parameterFadeOutTimes, motionLength);
    }
}
exports.default = CubismFadeMotionDataAsset;
var CubismSerializableCurves;
(function (CubismSerializableCurves) {
    function instantiateFromJson(src) {
        if (!Array.isArray(src)) {
            return undefined;
        }
        const curves = new Array(src.length);
        for (let i = 0; i < src.length; i++) {
            const curve = CubismSerializableCurve.instantiateFromJson(src[i]);
            if (curve == null) {
                return undefined;
            }
            curves[i] = curve;
        }
        return curves;
    }
    CubismSerializableCurves.instantiateFromJson = instantiateFromJson;
})(CubismSerializableCurves || (CubismSerializableCurves = {}));
class CubismSerializableCurve {
    constructor(arrayLength) {
        this.data = new Array(arrayLength !== null && arrayLength !== void 0 ? arrayLength : 0);
    }
    get length() {
        return this.data.length;
    }
    setKeyFrame(index, value) {
        this.data[index] = value;
    }
    getKeyFrame(index) {
        return this.data[index];
    }
    static instantiateFromJson(src) {
        if (src == null) {
            return undefined;
        }
        const { data } = src;
        if (!Array.isArray(data)) {
            return undefined;
        }
        const instance = new CubismSerializableCurve(data.length);
        for (let i = 0; i < data.length; i++) {
            const keyFrame = CubismSerializableKeyFrame.instantiateFromJson(data[i]);
            if (!keyFrame) {
                return undefined;
            }
            instance.setKeyFrame(i, keyFrame);
        }
        return instance;
    }
}
class CubismSerializableKeyFrame {
    constructor(time, value, inTangent, inWeight, outTangent, outWeight, weightedMode) {
        this.time = time !== null && time !== void 0 ? time : 0;
        this.value = value !== null && value !== void 0 ? value : 0;
        this.inTangent = inTangent !== null && inTangent !== void 0 ? inTangent : 0;
        this.inWeight = inWeight !== null && inWeight !== void 0 ? inWeight : 0;
        this.outTangent = outTangent !== null && outTangent !== void 0 ? outTangent : 0;
        this.outWeight = outWeight !== null && outWeight !== void 0 ? outWeight : 0;
        this.weightedMode = weightedMode !== null && weightedMode !== void 0 ? weightedMode : 0;
    }
    static instantiateFromJson(src) {
        if (src == null) {
            return undefined;
        }
        const time = src.time;
        if (!isNumber(time)) {
            return undefined;
        }
        const value = src.value;
        if (!isNumber(value)) {
            return undefined;
        }
        const inTangent = isNumber(src.inTangent) ? src.inTangent : undefined;
        const inWeight = isNumber(src.inWeight) ? src.inWeight : undefined;
        const outTangent = isNumber(src.outTangent) ? src.outTangent : undefined;
        const outWeight = isNumber(src.outWeight) ? src.outWeight : undefined;
        const weightedMode = isNumber(src.weightedMode) ? src.weightedMode : undefined;
        return new CubismSerializableKeyFrame(time, value, inTangent, inWeight, outTangent, outWeight, weightedMode);
    }
}
function isString(value) {
    return typeof value == 'string';
}
function isNumber(value) {
    return typeof value == 'number';
}
function asArray(src, isTypeFunc) {
    if (!Array.isArray(src)) {
        return undefined;
    }
    if (!src.every(isTypeFunc)) {
        return undefined;
    }
    return src;
}
