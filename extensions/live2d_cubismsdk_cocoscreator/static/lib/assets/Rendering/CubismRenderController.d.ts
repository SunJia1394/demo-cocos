/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Camera, math, Node, Component, Asset } from 'cc';
import CubismRenderer from './CubismRenderer';
import CubismSortingMode from './CubismSortingMode';
import ICubismUpdatable from '../Framework/ICubismUpdatable';
import ICubismOpacityHandler from './ICubismOpacityHandler';
import ICubismBlendColorHandler from './ICubismBlendColorHandler';
import type CubismModel from '../Core/CubismModel';
import type CubismDynamicDrawableData from '../Core/CubismDynamicDrawableData';
export default class CubismRenderController extends Component implements ICubismUpdatable {
    /**
     * Model opacity.
     *
     * This is turned into a field to be available to AnimationClips...
     */
    opacity: number;
    /** {@link lastOpacity} backing field. */
    private _lastOpacity;
    /** Last model opacity. */
    get lastOpacity(): number;
    set lastOpacity(value: number);
    /** {@link overwriteFlagForModelMultiplyColors} backing field. */
    private _isOverwrittenModelMultiplyColors;
    /** Whether to overwrite with multiply color from the model. */
    get overwriteFlagForModelMultiplyColors(): boolean;
    set overwriteFlagForModelMultiplyColors(value: boolean);
    /** {@link overwriteFlagForModelScreenColors} backing field. */
    private _isOverwrittenModelScreenColors;
    /** Whether to overwrite with screen color from the model. */
    get overwriteFlagForModelScreenColors(): boolean;
    set overwriteFlagForModelScreenColors(value: boolean);
    /** {@link modelMultiplyColor} backing field. */
    private _modelMultiplyColor;
    get modelMultiplyColor(): Readonly<math.Color>;
    set modelMultiplyColor(value: Readonly<math.Color>);
    /** {@link modelScreenColor} backing field. */
    private _modelScreenColor;
    get modelScreenColor(): Readonly<math.Color>;
    set modelScreenColor(value: Readonly<math.Color>);
    get sortingLayer(): string;
    set sortingLayer(value: string);
    /** {@link sortingLayerId} backing field. */
    private _sortingLayerId;
    /** Sorting layer Id. */
    get sortingLayerId(): number;
    set sortingLayerId(value: number);
    /** {@link sortingMode} backing field. */
    private _sortingMode;
    /** CubismDrawable sorting. */
    get sortingMode(): CubismSortingMode;
    set sortingMode(value: CubismSortingMode);
    /** {@link sortingOrder} backing field. */
    private _sortingOrder;
    /** Order in sorting layer. */
    get sortingOrder(): number;
    set sortingOrder(value: number);
    /** [Optional] Camera to face. */
    cameraToFace: Camera | null;
    /** {@link drawOrderHandler} backing field. */
    private _drawOrderHandler;
    /** Draw order handler proxy object. */
    get drawOrderHandler(): Node | ((Component | Asset) & ICubismOpacityHandler) | null;
    set drawOrderHandler(value: Node | ((Component | Asset) & ICubismOpacityHandler) | null);
    /** {@link drawOrderHandlerInterface} backing field. */
    private _drawOrderHandlerInterface;
    /** Listener for draw order changes. */
    private get drawOrderHandlerInterface();
    /** {@link opacityHandler} backing field. */
    private _opacityHandler;
    /** Opacity handler proxy object. */
    get opacityHandler(): Node | ((Component | Asset) & ICubismOpacityHandler) | null;
    set opacityHandler(value: Node | ((Component | Asset) & ICubismOpacityHandler) | null);
    /** {@link opacityHandlerInterface} backing field. */
    private _opacityHandlerInterface;
    /** Listener for opacity changes. */
    private get opacityHandlerInterface();
    /** {@link multiplyColorHandler} backing field. */
    private _multiplyColorHandler;
    get multiplyColorHandler(): Node | ((Component | Asset) & ICubismBlendColorHandler) | null;
    set multiplyColorHandler(value: Node | ((Component | Asset) & ICubismBlendColorHandler) | null);
    /** {@link multiplyColorHandlerInterface} backing field. */
    private _multiplyColorHandlerInterface;
    /** Listener for blend color changes. */
    private get multiplyColorHandlerInterface();
    /** {@link screenColorHandler} backing field. */
    private _screenColorHandler;
    get screenColorHandler(): Node | ((Component | Asset) & ICubismBlendColorHandler) | null;
    set screenColorHandler(value: Node | ((Component | Asset) & ICubismBlendColorHandler) | null);
    /** {@link screenColorHandlerInterface} backing field. */
    private _screenColorHandlerInterface;
    /** Listener for blend color changes. */
    private get screenColorHandlerInterface();
    /**
     * The value to offset the CubismDrawables by.
     *
     * You only need to adjust this value when using perspective cameras.
     */
    private _depthOffset;
    /** Depth offset used when sorting by depth. */
    get depthOffset(): number;
    set depthOffset(value: number);
    /** Model the controller belongs to. */
    private get model();
    /** DrawablesRootTransform backing field. */
    private _drawablesRootTransform;
    /** Root transform of all CubismDrawables of the model. */
    private get drawablesRootTransform();
    /** Renderers backing field. */
    private _renderers;
    /** CubismRenderers */
    get renderers(): Array<CubismRenderer> | null;
    private set renderers(value);
    private _hasUpdateController;
    /** Model has update controller component. */
    get hasUpdateController(): boolean;
    set hasUpdateController(value: boolean);
    /** Makes sure all CubismDrawables have CubismRenderers attached to them. */
    private tryInitializeRenderers;
    /** Updates opacity if necessary. */
    private updateOpacity;
    /** Updates Blend Colors if necessary. */
    private updateBlendColors;
    /** Called by cubism update controller. Order to invoke OnLateUpdate. */
    get executionOrder(): number;
    /** Called by cubism update controller. Needs to invoke OnLateUpdate on Editing. */
    get needsUpdateOnEditing(): boolean;
    /** Called by cubism update controller. Applies billboarding. */
    onLateUpdate(): void;
    /** ICubismUpdatable Binded callback function. */
    readonly bindedOnLateUpdate: ICubismUpdatable.CallbackFunction;
    /** ICubismUpdatable metadata */
    readonly [ICubismUpdatable.SYMBOL]: typeof ICubismUpdatable.SYMBOL;
    /** Called by Cocos Creator. */
    protected start(): void;
    /** Called by Cocos Creator. Enables listening to render data updates. */
    protected onEnable(): void;
    /** Called by Cocos Creator. Disables listening to render data updates. */
    protected onDisable(): void;
    /** Called by Cocos Creator. */
    protected lateUpdate(deltaTime: number): void;
    /**
     * Called whenever new render data is available.
     * @param sender Model with new render data.
     * @param data New render data.
     */
    private onDynamicDrawableData;
    /**
     *
     * @param sender
     * @param data
     */
    protected bindedOnDynamicDrawableDataFunc: (sender: CubismModel, data: Array<CubismDynamicDrawableData>) => void;
    private get opacityHandlerComponent();
    private set opacityHandlerComponent(value);
    private get opacityHandlerAsset();
    private set opacityHandlerAsset(value);
    private get opacityHandlerNode();
    private set opacityHandlerNode(value);
    private get drawOrderHandlerComponent();
    private set drawOrderHandlerComponent(value);
    private get drawOrderHandlerAsset();
    private set drawOrderHandlerAsset(value);
    private get drawOrderHandlerNode();
    private set drawOrderHandlerNode(value);
}
