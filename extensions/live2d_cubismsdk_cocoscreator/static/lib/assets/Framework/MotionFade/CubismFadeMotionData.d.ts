/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Asset, RealCurve } from 'cc';
import CubismMotion3Json from '../Json/CubismMotion3Json';
import CubismSerializableCurve from './CubismSerializableCurve';
/** from ScriptableObject */
export default class CubismFadeMotionData extends Asset {
    /** Name of motion. */
    motionName: string;
    /** Time to fade in. */
    fadeInTime: number;
    /** Time to fade out. */
    fadeOutTime: number;
    /** Parameter ids. */
    parameterIds: string[];
    /** Parameter curves. */
    parameterCurves: RealCurve[];
    private internalParameterCurves;
    /** Fade in time parameters. */
    parameterFadeInTimes: number[];
    /** Fade out time parameters. */
    parameterFadeOutTimes: number[];
    /** Motion length. */
    motionLength: number;
    onLoaded(): void;
    constructor(motionName?: string, fadeInTime?: number, fadeOutTime?: number, parameterIds?: string[], internalParameterCurves?: CubismSerializableCurve[], parameterFadeInTimes?: number[], parameterFadeOutTimes?: number[], motionLength?: number);
    private internalConvertToCurves;
    /**
     * Create CubismFadeMotionData from CubismMotion3Json.
     * @param motion3Json Motion3json as the creator.
     * @param motionName Motion name of interest.
     * @param motionLength Length of target motion.
     * @param shouldImportAsOriginalWorkflow Whether the original work flow or not.
     * @param isCallFromModelJson Whether it is a call from the model json.
     * @returns Fade data created based on motion3json.
     */
    static createInstance(motion3Json: CubismMotion3Json, motionName: string, motionLength: number, shouldImportAsOriginalWorkflow?: boolean, isCallFromModelJson?: boolean): CubismFadeMotionData;
    /**
     * Put motion3json's fade information back into fade motion data.
     * @param fadeMotion Instance containing fade information.
     * @param motion3Json Target motion3json.
     * @param motionName Motion name of interest.
     * @param motionLength Motion length.
     * @param shouldImportAsOriginalWorkflow Whether the original work flow or not.
     * @param isCallFormModelJson Whether it is a call from the model json.
     * @returns Fade data created based on fademotiondata.
     */
    static toSetInstance(fadeMotion: CubismFadeMotionData, motion3Json: CubismMotion3Json, motionName: string, motionLength: number, shouldImportAsOriginalWorkflow?: boolean, isCallFormModelJson?: boolean): CubismFadeMotionData;
    static deserializeFromJson(json: any): CubismFadeMotionData | undefined;
}
