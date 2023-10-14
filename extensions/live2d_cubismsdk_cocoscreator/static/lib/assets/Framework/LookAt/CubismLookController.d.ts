/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Asset, Component, math, Node } from 'cc';
import CubismParameter from '../../Core/CubismParameter';
import CubismParameterBlendMode from '../CubismParameterBlendMode';
import ICubismUpdatable from '../ICubismUpdatable';
import CubismLookParameter from './CubismLookParameter';
import ICubismLookTarget from './ICubismLookTarget';
/**
 * Controls {@link CubismLookParameter}s.
 *
 * **Sealed class**
 */
export declare class CubismLookController extends Component implements ICubismUpdatable {
    /** Blend mode. */
    blendMode: CubismParameterBlendMode;
    /** {@link target} backing field. */
    private _target;
    /** Target. */
    get target(): ((Component | Asset) & ICubismLookTarget) | Node | null;
    set target(value: ((Component | Asset) & ICubismLookTarget) | Node | null);
    private get targetComponent();
    private set targetComponent(value);
    private get targetNode();
    private set targetNode(value);
    private get targetAsset();
    private set targetAsset(value);
    /** TargetInterface backing field. */
    private _targetInterface;
    /** Interface of target. */
    private get targetInterface();
    /** Local center position. */
    center: Node | null;
    /** Damping to apply. */
    damping: number;
    private _sources;
    /** Source parameters. */
    get sources(): CubismLookParameter[];
    set sources(value: CubismLookParameter[]);
    private _destinations;
    /** The actual parameters to apply the source values to. */
    get destinations(): (CubismParameter | null)[];
    set destinations(value: (CubismParameter | null)[]);
    private _lastPosition;
    /** Position at last frame. */
    get lastPosition(): math.Vec3;
    set lastPosition(value: math.Vec3);
    /** Goal position. */
    private _goalPosition;
    get goalPosition(): math.Vec3;
    set goalPosition(value: math.Vec3);
    /** Buffer for Mathf.SmoothDamp(float, float, ref float, float) velocity. */
    private velocityBuffer;
    private _hasUpdateController;
    /** Model has update controller component. */
    get hasUpdateController(): boolean;
    set hasUpdateController(value: boolean);
    /** Refreshes the controller. Call this method after adding and/or removing {@link CubismLookParameter}s. */
    refresh(): void;
    /** Called by cubism update controller. Order to invoke OnLateUpdate. */
    get executionOrder(): number;
    /** Called by cubism update controller. Needs to invoke OnLateUpdate on Editing. */
    get needsUpdateOnEditing(): boolean;
    /** Called by cubism update controller. Updates controller. */
    onLateUpdate(): void;
    /** Called by Cocos Creator. Makes sure cache is initialized. */
    protected start(): void;
    /** Called by Cocos Creator. Updates controller. */
    protected lateUpdate(): void;
    readonly bindedOnLateUpdate: ICubismUpdatable.CallbackFunction;
    readonly [ICubismUpdatable.SYMBOL]: typeof ICubismUpdatable.SYMBOL;
}
