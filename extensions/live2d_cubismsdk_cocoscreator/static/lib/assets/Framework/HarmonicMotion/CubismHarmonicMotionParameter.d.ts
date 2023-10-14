/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component } from 'cc';
import CubismHarmonicMotionDirection from './CubismHarmonicMotionDirection';
/**
 * Holds data for controlling the output of simple harmonic motions.
 *
 * This type of motion can be very useful for faking breathing, for example.
 *
 * **Sealed class**
 */
export default class CubismHarmonicMotionParameter extends Component {
    /** Timescale channel. */
    channel: number;
    /** Motion direction. */
    direction: CubismHarmonicMotionDirection;
    /**
     * Normalized origin of motion.
     *
     * The actual origin used for evaluating the motion depends limits of the {@link CubismParameter}.
     */
    normalizedOrigin: number;
    /**
     * Normalized range of motion.
     *
     * The actual origin used for evaluating the motion depends limits of the {@link CubismParameter}.
     */
    normalizedRange: number;
    /** Duration of one motion cycle in seconds. */
    duration: number;
    /** true if this is initialized. */
    private get isInitialized();
    /** Initializes instance. */
    private initialize;
    private _maximumValue;
    /** Cached {@link CubismParameter.maximumValue}. */
    private get maximumValue();
    private set maximumValue(value);
    private _minimumValue;
    /** Cached {@link CubismParameter.minimumValue}. */
    private get minimumValue();
    private set minimumValue(value);
    private _valueRange;
    /** Range of {@link maximumValue} and {@link minimumValue}. */
    private get valueRange();
    private set valueRange(value);
    private _t;
    /** Current time. */
    private get t();
    private set t(value);
    /** Proceeds time. */
    play(channelTimescales: number[]): void;
    /** Evaluates the parameter. */
    evaluate(): number;
    /**
     * Clamp origin and range based on {@link direction}.
     * @param origin Origin to clamp.
     * @param range Range to clamp.
     * @returns
     */
    private clamp;
}
