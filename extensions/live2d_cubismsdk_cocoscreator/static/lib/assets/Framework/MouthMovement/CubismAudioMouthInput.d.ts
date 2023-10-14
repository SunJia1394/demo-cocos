/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { AudioSource, Component } from 'cc';
import CubismAudioSamplingQuality from './CubismAudioSamplingQuality';
export default class CubismAudioMouthInput extends Component {
    audioInput: AudioSource | null;
    samplingQuality: CubismAudioSamplingQuality;
    gain: number;
    smoothing: number;
    private _samples;
    private get samples();
    private set samples(value);
    private _lastRms;
    private get lastRms();
    private set lastRms(value);
    private velocityBuffer;
    private _target;
    private get target();
    private set target(value);
    private isInitializing;
    private get isInitialized();
    private sampleRate;
    private tryInitialize;
    private initSamples;
    protected update(deltaTime: number): void;
    protected onEnable(): void;
}
