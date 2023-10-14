/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component, math } from 'cc';
import CubismLookAxis from './CubismLookAxis';
/**
 * Look at parameter.
 *
 * **Sealed class**
 */
export default class CubismLookParameter extends Component {
    /** Look axis. */
    axis: CubismLookAxis;
    /** Factor. */
    factor: number;
    /** Called by Cocos Creator. Guesses best settings. */
    private reset;
    /**
     * Updates and evaluates the instance.
     * @param targetOffset Delta to target.
     * @returns Evaluation result.
     */
    tickAndEvaluate(targetOffset: math.Vec3): number;
}
