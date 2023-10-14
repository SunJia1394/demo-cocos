/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component } from 'cc';
import ICubismUpdatable from '../ICubismUpdatable';
import CubismExpressionList from './CubismExpressionList';
export default class CubismExpressionController extends Component implements ICubismUpdatable {
    /** Expressions data list. */
    expressionsList: CubismExpressionList | null;
    /** CubismModel cache. */
    private _model;
    /** Playing expressions index. */
    currentExpressionIndex: number;
    /** Playing expressions. */
    private _playingExpressions;
    /** Last playing expressions index. */
    private _lastExpressionIndex;
    private _hasUpdateController;
    /** Model has update controller component. */
    get hasUpdateController(): boolean;
    set hasUpdateController(value: boolean);
    /** Add new expression to playing expressions. */
    private startExpression;
    /** Called by cubism update controller. Order to invoke OnLateUpdate. */
    get executionOrder(): number;
    /** Called by cubism update controller. Needs to invoke OnLateUpdate on Editing. */
    get needsUpdateOnEditing(): boolean;
    /** Called by cubism update manager. */
    onLateUpdate(): void;
    readonly bindedOnLateUpdate: ICubismUpdatable.CallbackFunction;
    /** Called by Cocos Creator. */
    protected onEnable(): void;
    /** Called by Cocos Creator. */
    protected lateUpdate(): void;
    readonly [ICubismUpdatable.SYMBOL]: typeof ICubismUpdatable.SYMBOL;
}
