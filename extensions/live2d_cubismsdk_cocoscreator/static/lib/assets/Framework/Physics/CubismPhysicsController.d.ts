/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component } from 'cc';
import CubismPhysicsRig from './CubismPhysicsRig';
import ICubismUpdatable from '../ICubismUpdatable';
import type CubismParameter from '../../Core/CubismParameter';
export default class CubismPhysicsController extends Component implements ICubismUpdatable {
    private get rig();
    private set rig(value);
    private _rig;
    private _parameters;
    get parameters(): CubismParameter[] | null;
    private set parameters(value);
    private _hasUpdateController;
    get hasUpdateController(): boolean;
    private set hasUpdateController(value);
    get executionOrder(): number;
    get needsUpdateOnEditing(): boolean;
    onLateUpdate(deltaTime: number): void;
    /** Calculate until the physics is stable and update the model information. */
    stabilization(): void;
    /** ICubismUpdatable Binded callback function. */
    readonly bindedOnLateUpdate: ICubismUpdatable.CallbackFunction;
    /** ICubismUpdatable metadata */
    readonly [ICubismUpdatable.SYMBOL]: typeof ICubismUpdatable.SYMBOL;
    initialize(rig: CubismPhysicsRig): void;
    onLoad(): void;
    start(): void;
    protected lateUpdate(deltaTime: number): void;
}
