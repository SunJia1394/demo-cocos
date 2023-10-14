/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { math } from 'cc';
import CubismPhysicsController from './CubismPhysicsController';
import CubismPhysicsSubRig from './CubismPhysicsSubRig';
/** Physics rig. */
export default class CubismPhysicsRig {
    /** Children of rig. */
    subRigs: Array<CubismPhysicsSubRig | null>;
    gravity: math.Vec2;
    wind: math.Vec2;
    fps: number;
    private _currentRemainTime;
    private _parametersCache;
    get parametersCache(): number[];
    set parametersCache(value: number[]);
    private _parametersInputCache;
    private _controller;
    /** Reference of controller to refer from children rig. */
    get controller(): CubismPhysicsController | null;
    /** Reference of controller to refer from children rig. */
    set controller(value: CubismPhysicsController | null);
    /** Initializes rigs. */
    initialize(): void;
    /** Calculations are performed until the physics are stable. */
    stabilization(): void;
    /** Evaluate rigs.
     *
     * Pendulum interpolation weights
     *
     * The result of the pendulum calculation is saved and the output to the parameters is interpolated with the saved previous result of the pendulum calculation.
     *
     * The figure shows the interpolation between [1] and [2].
     *
     * The weight of the interpolation are determined by the current time seen between the latest pendulum calculation timing and the next timing.
     *
     * Figure shows the weight of position (3) as seen between [2] and [4].
     *
     * As an interpretation, the pendulum calculation and weights are misaligned.
     *
     * If there is no FPS information in physics3.json, it is always set in the previous pendulum state.
     *
     * The purpose of this specification is to avoid the quivering appearance caused by deviations from the interpolation range.
     *
     * ```
     * ------------ time -------------->
     *    　　　　　　　　|+++++|------| <- weight
     * ==[1]====#=====[2]---(3)----(4)
     *          ^ output contents
     * ```
     *
     * 1. _previousRigOutput
     * 2. _currentRigOutput
     * 3. _currentRemainTime (now rendering)
     * 4. next particles timing
     *
     * @param deltaTime
     */
    evaluate(deltaTime: number): void;
}
