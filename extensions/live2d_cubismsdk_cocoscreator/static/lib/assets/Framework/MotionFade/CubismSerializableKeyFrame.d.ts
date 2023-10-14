/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { TangentWeightMode } from 'cc';
export default class CubismSerializableKeyFrame {
    time: number;
    value: number;
    inTangent: number;
    inWeight: number;
    outTangent: number;
    outWeight: number;
    weightedMode: TangentWeightMode;
    constructor(time?: number, value?: number, inTangent?: number, inWeight?: number, outTangent?: number, outWeight?: number, weightedMode?: TangentWeightMode);
    static instantiateFromJson(src: any): CubismSerializableKeyFrame | undefined;
}
