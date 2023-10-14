/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component } from 'cc';
import CubismParameterBlendMode from '../CubismParameterBlendMode';
import ICubismUpdatable from '../ICubismUpdatable';
/**
 * Controller for {@link CubismHarmonicMotionParameter}s.
 *
 * **Sealed class.**
 */
export default class CubismHarmonicMotionController extends Component implements ICubismUpdatable {
    /** Default number of channels. */
    private readonly defaultChannelCount;
    /** Blend mode. */
    blendMode: CubismParameterBlendMode;
    /** The timescales for each channel. */
    channelTimescales: number[];
    private _sources;
    /** Sources. */
    private get sources();
    private set sources(value);
    private _destinations;
    /** Destinations. */
    private get destinations();
    private set destinations(value);
    private _hasUpdateController;
    /** Model has update controller component. */
    get hasUpdateController(): boolean;
    set hasUpdateController(value: boolean);
    /** Refreshes the controller. Call this method after adding and/or removing {@link CubismHarmonicMotionParameter}. */
    refresh(): void;
    /** Called by cubism update controller. Order to invoke OnLateUpdate. */
    get executionOrder(): number;
    /** Called by cubism update controller. Needs to invoke OnLateUpdate on Editing. */
    get needsUpdateOnEditing(): boolean;
    /** Called by cubism update controller. Updates controller. */
    protected onLateUpdate(deltaTime: number): void;
    /** ICubismUpdatable Binded callback function. */
    readonly bindedOnLateUpdate: ICubismUpdatable.CallbackFunction;
    /** ICubismUpdatable metadata */
    readonly [ICubismUpdatable.SYMBOL]: typeof ICubismUpdatable.SYMBOL;
    /** Called by Cocos Creator. Makes sure cache is initialized. */
    protected start(): void;
    /** Called by Cocos Creator. Updates controller. */
    protected lateUpdate(deltaTime: number): void;
    /** Called by Cocos Creator. Resets channels. */
    resetInEditor(): void;
}
