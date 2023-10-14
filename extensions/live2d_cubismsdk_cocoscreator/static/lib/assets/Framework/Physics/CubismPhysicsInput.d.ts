/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { math } from 'cc';
import CubismPhysicsSourceComponent from './CubismPhysicsSourceComponent';
import type CubismPhysicsNormalization from './CubismPhysicsNormalization';
import type CubismParameter from '../../Core/CubismParameter';
type NormalizedParameterValueGetter = (targetTranslation: math.Vec2, targetAngle: number, parameter: CubismParameter, parameterValue: number, normalization: CubismPhysicsNormalization, weight: number) => {
    translation: math.Vec2;
    angle: number;
    parameterValue: number;
};
/** Input data of physics. (struct) */
export default class CubismPhysicsInput {
    private getInputTranslationXFromNormalizedParameterValue;
    private getInputTranslationYFromNormalizedParameterValue;
    private getInputAngleFromNormalizedParameterValue;
    initializeGetter(): void;
    /** Parameter ID of source. */
    sourceId: string | null;
    /** Scale of translation. */
    scaleOfTranslation: math.Vec2;
    /** Scale of angle. */
    angleScale: number;
    /** Weight. */
    weight: number;
    /** Component of source. */
    sourceComponent: CubismPhysicsSourceComponent;
    /** True if value is inverted; otherwise. */
    isInverted: boolean;
    /** Source data from parameter. */
    source: CubismParameter | null;
    /** Function of getting normalized parameter value. */
    getNormalizedParameterValue: NormalizedParameterValueGetter | null;
}
export {};
