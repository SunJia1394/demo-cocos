/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component } from 'cc';
import ICubismUpdatable from './ICubismUpdatable';
import type CubismParameter from '../Core/CubismParameter';
import type CubismPart from '../Core/CubismPart';
export default class CubismParameterStore extends Component implements ICubismUpdatable {
    private _destinationParameters;
    get destinationParameters(): CubismParameter[] | null;
    set destinationParameters(value: CubismParameter[] | null);
    private _destinationParts;
    get destinationParts(): CubismPart[] | null;
    set destinationParts(value: CubismPart[] | null);
    private _parameterValues;
    private _partOpacities;
    private _hasUpdateController;
    get hasUpdateController(): boolean;
    set hasUpdateController(value: boolean);
    get executionOrder(): number;
    get needsUpdateOnEditing(): boolean;
    refresh(): void;
    protected onLateUpdate(deltaTime: number): void;
    /** ICubismUpdatable Binded callback function. */
    readonly bindedOnLateUpdate: ICubismUpdatable.CallbackFunction;
    /** ICubismUpdatable metadata */
    readonly [ICubismUpdatable.SYMBOL]: typeof ICubismUpdatable.SYMBOL;
    saveParameters(): void;
    restoreParameters(): void;
    onEnable(): void;
}
