/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { AnimationClip, JsonAsset, __private } from 'cc';
import type CubismPose3Json from './CubismPose3Json';
import type IStructLike from '../../IStructLike';
interface RealKeyframeValue {
    value: number;
    rightTangent: number;
    rightTangentWeight: number;
    leftTangent: number;
    leftTangentWeight: number;
}
declare namespace RealKeyframeValue {
    function instantiate(value: number): {
        value: number;
        rightTangent: number;
        rightTangentWeight: number;
        leftTangent: number;
        leftTangentWeight: number;
    };
}
type RealKeyframe = __private._cocos_core_curves_keyframe_curve__KeyFrame<RealKeyframeValue>;
export declare class SerializableMeta implements IStructLike<SerializableMeta> {
    /** Duration in seconds. */
    readonly duration: number;
    /** Framerate in seconds. */
    readonly fps: number;
    /** True if motion is looping. */
    readonly loop: boolean;
    /** Number of curves. */
    readonly curveCount: number;
    /** Total number of curve segments. */
    readonly totalSegmentCount: number;
    /** Total number of curve points. */
    readonly totalPointCount: number;
    /** True if beziers are restricted. */
    readonly areBeziersRestricted: boolean;
    /** Total number of UserData. */
    readonly userDataCount: number;
    /** Total size of UserData in bytes. */
    readonly totalUserDataSize: number;
    /** [Optional] Time of the Fade-In for easing in seconds. */
    readonly fadeInTime: number;
    /** [Optional] Time of the Fade-Out for easing in seconds. */
    readonly fadeOutTime: number;
    constructor(args?: {
        duration?: number;
        fps?: number;
        loop?: boolean;
        curveCount?: number;
        totalSegmentCount?: number;
        totalPointCount?: number;
        areBeziersRestricted?: boolean;
        userDataCount?: number;
        totalUserDataSize?: number;
        fadeInTime?: number;
        fadeOutTime?: number;
    });
    copyWith(args?: {
        duration?: number;
        fps?: number;
        loop?: boolean;
        curveCount?: number;
        totalSegmentCount?: number;
        totalPointCount?: number;
        areBeziersRestricted?: boolean;
        userDataCount?: number;
        totalUserDataSize?: number;
        fadeInTime?: number;
        fadeOutTime?: number;
    }): SerializableMeta;
    equals(other: SerializableMeta): boolean;
    strictEquals(other: SerializableMeta): boolean;
    /**
     * **Required properties**
     * - Duration
     * - Fps
     * - CurveCount
     * - TotalSegmentCount
     * - TotalPointCount
     *
     * **Optional properties**
     * - Loop
     * - AreBeziersRestricted
     * - FadeInTime
     * - FadeOutTime
     * - UserDataCount
     * - TotalUserDataSize
     * @param json
     * @returns
     */
    static instantiateFromJson(json: any): SerializableMeta | undefined;
}
export declare class SerializableCurve implements IStructLike<SerializableCurve> {
    /** Target type. */
    readonly target: string;
    /** Id within target. */
    readonly id: string;
    /** Flattened curve segments. */
    readonly segments: Array<number>;
    /** [Optional] Time of the overall Fade-In for easing in seconds. */
    readonly fadeInTime: number;
    /** [Optional] Time of the overall Fade-Out for easing in seconds. */
    readonly fadeOutTime: number;
    constructor(args?: {
        target?: string;
        id?: string;
        segments?: Array<number>;
        fadeInTime?: number;
        fadeOutTime?: number;
    });
    copyWith(args?: {
        target?: string;
        id?: string;
        segments?: Array<number>;
        fadeInTime?: number;
        fadeOutTime?: number;
    }): SerializableCurve;
    equals(other: SerializableCurve): boolean;
    strictEquals(other: SerializableCurve): boolean;
    /**
     * **Required properties**
     * - Target
     * - Id
     * - Segments
     *
     * **Optional properties**
     * - FadeInTime
     * - FadeOutTime
     * @param json
     * @returns
     */
    static instantiateFromJson(json: any): SerializableCurve | undefined;
}
export declare class SerializableUserData implements IStructLike<SerializableUserData> {
    /** Time in seconds. */
    readonly time: number;
    /** Content of user data. */
    readonly value: string;
    constructor(args?: {
        time?: number;
        value?: string;
    });
    copyWith(args?: {
        time?: number;
        value?: string;
    }): SerializableUserData;
    equals(other: SerializableUserData): boolean;
    strictEquals(other: SerializableUserData): boolean;
    /**
     * **Required properties**
     * - Time
     * - Value
     * @param json
     * @returns
     */
    static instantiateFromJson(json: any): SerializableUserData | undefined;
}
export declare namespace SerializableMeta {
    const DEFAULT: SerializableMeta;
}
export declare namespace SerializableCurve {
    const DEFAULT: SerializableCurve;
}
export declare namespace SerializableUserData {
    const DEFAULT: SerializableUserData;
}
/**
 * Contains Cubism motion3.json data.
 *
 * **Sealed class.**
 */
export default class CubismMotion3Json {
    private constructor();
    /**
     * Loads a motion3.json asset.
     * @param motion3Json motion3.json to deserialize.
     * @returns Deserialized motion3.json on success; null otherwise.
     */
    static loadFrom(motion3Json: string): CubismMotion3Json | null;
    /**
     * Loads a motion3.json asset.
     * @param motion3JsonAsset motion3.json to deserialize.
     * @returns Deserialized motion3.json on success; null otherwise.
     */
    static loadFromJsonAsset(motion3JsonAsset: JsonAsset): CubismMotion3Json | null;
    private static loadFromJson;
    /** The model3.json format version. */
    version: number;
    /** Motion meta info. */
    meta: SerializableMeta;
    /** Curves. */
    curves: SerializableCurve[];
    /** User data. */
    userData: SerializableUserData[];
    /**
     * Converts motion curve segments into Keyframes.
     * @param segments Data to convert.
     * @returns Keyframes.
     */
    static convertCurveSegmentsToKeyframes(segments: Array<number>): Array<RealKeyframe>;
    /**
     * Converts stepped curves to liner curves.
     * @param curve Data to convert.
     * @param poseFadeInTime
     * @returns Animation curve.
     */
    static convertSteppedCurveToLinerCurver(curve: SerializableCurve, poseFadeInTime: number): Array<RealKeyframe>;
    /**
     * Instantiates an AnimationClip.
     * Note this method generates AnimationClip.legacy clips when called at runtime.
     * @param shouldImportAsOriginalWorkflow Should import as original workflow.
     * @param shouldClearAnimationCurves Should clear animation clip curves.
     * @param isCallFormModelJson Is function call form CubismModel3Json.
     * @param poseJson pose3.json asset.
     * @returns The instantiated clip on success; null otherwise.
     */
    toAnimationClipA(shouldImportAsOriginalWorkflow?: boolean, shouldClearAnimationCurves?: boolean, isCallFormModelJson?: boolean, poseJson?: CubismPose3Json | null): AnimationClip;
    /**
     * Instantiates an AnimationClip.
     * Note this method generates AnimationClip.legacy clips when called at runtime.
     * @param animationClip Previous animation clip.
     * @param shouldImportAsOriginalWorkflow Should import as original workflow.
     * @param shouldClearAnimationCurves Should clear animation clip curves.
     * @param isCallFormModelJson Is function call form CubismModel3Json.
     * @param poseJson pose3.json asset.
     * @returns The instantiated clip on success; null otherwise.
     */
    toAnimationClipB(animationClip: AnimationClip, shouldImportAsOriginalWorkflow?: boolean, shouldClearAnimationCurves?: boolean, isCallFormModelJson?: boolean, poseJson?: CubismPose3Json | null): AnimationClip;
    /** Offset to use for setting of keyframes. */
    private static get offsetGranularity();
    /** Available segment parsers. */
    private static parsers;
    /** Parses a linear segment. */
    private static parseLinearSegment;
    /** Parses a bezier segment. */
    private static parseBezierSegment;
    /** Parses a stepped segment. */
    private static parseSteppedSegment;
    /** Parses a inverse-stepped segment. */
    private static parseInverseSteppedSegment;
}
export {};
