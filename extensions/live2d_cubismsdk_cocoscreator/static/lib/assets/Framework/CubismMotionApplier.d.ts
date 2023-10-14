/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component } from 'cc';
import ICubismUpdatable from './ICubismUpdatable';
export default class CubismMotionApplier extends Component implements ICubismUpdatable {
    /** AnimationController cache. */
    private animCtrl;
    /** Parameters cache. */
    private parameters;
    /** Parts cache. */
    private parts;
    refresh(): void;
    private valueUpdate;
    private setCache;
    private setParameterCache;
    private setPartCache;
    private calcCache;
    private applyValues;
    private onLateUpdate;
    /** Called by Cocos Creator. Makes sure cache is initialized. */
    protected start(): void;
    /** Called by Cocos Creator. Updates controller. */
    protected lateUpdate(deltaTime: number): void;
    /** ICubismUpdatable Binded callback function. */
    bindedOnLateUpdate: ICubismUpdatable.CallbackFunction;
    get executionOrder(): number;
    get needsUpdateOnEditing(): boolean;
    private _hasUpdateController;
    /** Model has update controller component. */
    get hasUpdateController(): boolean;
    set hasUpdateController(value: boolean);
    /** ICubismUpdatable metadata */
    [ICubismUpdatable.SYMBOL]: typeof ICubismUpdatable.SYMBOL;
}
