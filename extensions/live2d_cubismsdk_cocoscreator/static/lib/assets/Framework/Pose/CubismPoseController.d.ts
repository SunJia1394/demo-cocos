/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component } from 'cc';
import ICubismUpdatable from '../ICubismUpdatable';
/**
 * Cubism pose controller.
 *
 * **Sealed class**
 */
export default class CubismPoseController extends Component implements ICubismUpdatable {
    /** Default visible pose index. */
    defaultPoseIndex: number;
    /** Cubism model cache. */
    private _model;
    private _hasUpdateController;
    /** Model has update controller component. */
    get hasUpdateController(): boolean;
    set hasUpdateController(value: boolean);
    /** Pose data. */
    private _poseData;
    /** update hidden part opacity. */
    refresh(): void;
    /** update hidden part opacity. */
    private doFade;
    /** Copy opacity to linked parts. */
    private copyPartOpacities;
    /** Save parts opacity. */
    private savePartOpacities;
    /** Called by cubism update controller. Order to invoke OnLateUpdate. */
    get executionOrder(): number;
    /** Called by cubism update controller. Needs to invoke OnLateUpdate on Editing. */
    get needsUpdateOnEditing(): boolean;
    /** Called by cubism update manager. Updates controller. */
    onLateUpdate(): void;
    /** Called by Cocos Creator. Makes sure cache is initialized. */
    protected onEnable(): void;
    /** Called by Cocos Creator. */
    protected lateUpdate(): void;
    /** ICubismUpdatable Binded callback function. */
    bindedOnLateUpdate: ICubismUpdatable.CallbackFunction;
    /** ICubismUpdatable metadata */
    readonly [ICubismUpdatable.SYMBOL]: typeof ICubismUpdatable.SYMBOL;
}
