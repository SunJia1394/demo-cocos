/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { math } from 'cc';
import type CubismParameter from '../../Core/CubismParameter';
/** Math utilities for physics. */
export default class CubismPhysicsMath {
    static degreesToRadian(degrees: number): number;
    /**
     * Gets angle from both vector direction.
     * @param from From vector.
     * @param to To vector.
     * @returns Angle of radian.
     */
    static directionToRadian(from: math.Vec2, to: math.Vec2): number;
    static getAngleDiff(q1: number, q2: number): number;
    static radianToDirection(totalAngle: number): math.Vec2;
    private static getRangeValue;
    private static getDefaultValue;
    static normalize(parameter: CubismParameter, parameterValue: number, normalizedMinimum: number, normalizedMaximum: number, normalizedDefault: number, isInverted?: boolean): {
        normalized: number;
        clamped: number;
    };
}
