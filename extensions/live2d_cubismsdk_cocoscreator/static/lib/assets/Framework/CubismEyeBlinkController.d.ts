/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component } from 'cc';
import CubismParameterBlendMode from './CubismParameterBlendMode';
import ICubismUpdatable from './ICubismUpdatable';
import CubismParameter from '../Core/CubismParameter';
/**
 * {@link CubismEyeBlinkParameter} controller.
 *
 * **Sealed class**
 */
export default class CubismEyeBlinkController extends Component implements ICubismUpdatable {
    /** Blend mode. */
    blendMode: CubismParameterBlendMode;
    /** Opening of the eyes. */
    eyeOpening: number;
    /** Eye blink parameters cache. */
    private _destinations;
    get destinations(): (CubismParameter | null)[] | null;
    set destinations(value: (CubismParameter | null)[] | null);
    /** Model has update controller component. */
    private _hasUpdateController;
    get hasUpdateController(): boolean;
    set hasUpdateController(value: boolean);
    /** Refreshes controller. Call this method after adding and/or removing <see cref="CubismEyeBlinkParameter"/>s. */
    refresh(): void;
    /** Called by cubism update controller. Order to invoke OnLateUpdate. */
    get executionOrder(): number;
    /** Called by cubism update controller. Needs to invoke OnLateUpdate on Editing. */
    get needsUpdateOnEditing(): boolean;
    /** Called by cubism update controller. Updates controller. */
    onLateUpdate(): void;
    /** Called by Cocos Creator. Makes sure cache is initialized. */
    protected start(): void;
    /** Called by Cocos Creator. */
    protected lateUpdate(): void;
    /** ICubismUpdatable Binded callback function. */
    readonly bindedOnLateUpdate: () => void;
    /** ICubismUpdatable metadata */
    readonly [ICubismUpdatable.SYMBOL]: typeof ICubismUpdatable.SYMBOL;
}
