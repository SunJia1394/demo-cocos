export default class CubismFadeMotionDataAsset {
    motionName: string;
    fadeInTime: number;
    fadeOutTime: number;
    parameterIds: string[];
    internalParameterCurves: CubismSerializableCurve[];
    parameterFadeInTimes: number[];
    parameterFadeOutTimes: number[];
    motionLength: number;
    constructor(motionName?: string, fadeInTime?: number, fadeOutTime?: number, parameterIds?: string[], internalParameterCurves?: CubismSerializableCurve[], parameterFadeInTimes?: number[], parameterFadeOutTimes?: number[], motionLength?: number);
    static deserializeFromJson(json: any): CubismFadeMotionDataAsset | undefined;
}
declare class CubismSerializableCurve {
    private data;
    constructor(arrayLength?: number | undefined);
    get length(): number;
    setKeyFrame(index: number, value: CubismSerializableKeyFrame): void;
    getKeyFrame(index: number): CubismSerializableKeyFrame;
    static instantiateFromJson(src: any): CubismSerializableCurve | undefined;
}
declare class CubismSerializableKeyFrame {
    time: number;
    value: number;
    inTangent: number;
    inWeight: number;
    outTangent: number;
    outWeight: number;
    weightedMode: number;
    constructor(time?: number, value?: number, inTangent?: number, inWeight?: number, outTangent?: number, outWeight?: number, weightedMode?: number);
    static instantiateFromJson(src: any): CubismSerializableKeyFrame | undefined;
}
export {};
