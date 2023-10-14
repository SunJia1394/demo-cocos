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
export default class CubismMouthController extends Component implements ICubismUpdatable {
    blendMode: CubismParameterBlendMode;
    mouthOpening: number;
    private _destinations;
    private get destinations();
    private set destinations(value);
    private _hasUpdateController;
    get hasUpdateController(): boolean;
    set hasUpdateController(value: boolean);
    refresh(): void;
    get executionOrder(): number;
    get needsUpdateOnEditing(): boolean;
    protected onLateUpdate(deltaTime: number): void;
    /** Binded callback function */
    readonly bindedOnLateUpdate: ICubismUpdatable.CallbackFunction;
    /** ICubismUpdatable metadata */
    readonly [ICubismUpdatable.SYMBOL]: typeof ICubismUpdatable.SYMBOL;
    protected start(): void;
    protected lateUpdate(deltaTime: number): void;
}
