/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { RealCurve, Component } from 'cc';
import ICubismUpdatable from '../ICubismUpdatable';
import CubismFadeMotionList from './CubismFadeMotionList';
export default class CubismFadeController extends Component implements ICubismUpdatable {
    cubismFadeMotionList: CubismFadeMotionList | null;
    private _destinationParameters;
    private get destinationParameters();
    private set destinationParameters(value);
    private _destinationParts;
    private get destinationParts();
    private set destinationParts(value);
    private _motionController;
    private _hasUpdateController;
    get hasUpdateController(): boolean;
    set hasUpdateController(value: boolean);
    private _fadeStates;
    private _animator;
    private _parameterStore;
    private _isFading;
    refresh(): void;
    get executionOrder(): number;
    get needsUpdateOnEditing(): boolean;
    protected onLateUpdate(deltaTime: number): void;
    /** ICubismUpdatable Binded callback function. */
    readonly bindedOnLateUpdate: ICubismUpdatable.CallbackFunction;
    /** ICubismUpdatable metadata */
    readonly [ICubismUpdatable.SYMBOL]: typeof ICubismUpdatable.SYMBOL;
    private updateFade;
    evaluate(curve: RealCurve, elapsedTime: number, endTime: number, fadeInTime: number, fadeOutTime: number, parameterFadeInTime: number, parameterFadeOutTime: number, motionWeight: number, currentValue: number): number;
    onEnable(): void;
    lateUpdate(deltaTime: number): void;
}
