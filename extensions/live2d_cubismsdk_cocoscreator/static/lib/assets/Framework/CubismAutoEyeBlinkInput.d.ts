/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component } from 'cc';
/** Automatic mouth movement. */
export default class CubismAutoEyeBlinkInput extends Component {
    /** Mean time between eye blinks in seconds. */
    mean: number;
    /** Maximum deviation from {@link mean} in seconds. */
    maximumDeviation: number;
    /** Timescale. */
    timescale: number;
    /** Target controller. */
    private _controller;
    private get controller();
    private set controller(value);
    /** Time until next eye blink. */
    private _t;
    private get t();
    private set t(value);
    /** Control over whether output should be evaluated. */
    private _currentPhase;
    private get currentPhase();
    private set currentPhase(value);
    /** Used for switching from {@link Phase.ClosingEyes} to {@link Phase.OpeningEyes} and back to {@link Phase.Idling. */
    private _lastValue;
    private get lastValue();
    private set lastValue(value);
    /** Resets the input. */
    reset(): void;
    resetInEditor(): void;
    /** Called by Cocos Creator. Initializes input. */
    protected start(): void;
    /**
     * Called by Cocos Creator. Updates controller.
     *
     * Make sure this method is called after any animations are evaluated.
     */
    protected lateUpdate(dt: number): void;
}
