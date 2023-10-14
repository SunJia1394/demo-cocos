/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { RealCurve } from 'cc';
import CubismSerializableKeyFrame from './CubismSerializableKeyFrame';
export default class CubismSerializableCurve {
    private data;
    constructor(arrayLength?: number | undefined);
    get length(): number;
    setKeyFrame(index: number, value: CubismSerializableKeyFrame): void;
    toRealCurve(): RealCurve;
    static instantiateFromJson(src: any): CubismSerializableCurve | undefined;
}
