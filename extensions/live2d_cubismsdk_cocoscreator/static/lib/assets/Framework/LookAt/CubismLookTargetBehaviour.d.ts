/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component, math } from 'cc';
import ICubismLookTarget from './ICubismLookTarget';
/** Straight-forward {@link ICubismLookTarget} {@link Component}. */
export default class CubismLookTargetBehaviour extends Component implements ICubismLookTarget {
    readonly [ICubismLookTarget.SYMBOL]: typeof ICubismLookTarget.SYMBOL;
    /**
     * Gets the position of the target.
     * @returns The position of the target in world space.
     */
    getPosition(): Readonly<math.Vec3>;
    /**
     * Gets whether the target is active.
     * @returns true if the target is active; false otherwise.
     */
    isActive(): boolean;
}
