/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component } from 'cc';
import CubismDrawable from './CubismDrawable';
import CubismParameter from './CubismParameter';
import CubismPart from './CubismPart';
import CubismCanvasInformation from './CubismCanvasInformation';
import CubismParameterStore from '../Framework/CubismParameterStore';
import CubismMoc from './CubismMoc';
import type CubismDynamicDrawableData from './CubismDynamicDrawableData';
interface IDynamicDrawableDataEvent {
    add(func: DynamicDrawableDataHandler): void;
    remove(func: DynamicDrawableDataHandler): void;
}
/**
 * Runtime Cubism model.
 *
 * **Sealed class.**
 */
export default class CubismModel extends Component {
    protected _onDynamicDrawableData: DynamicDrawableDataEvent;
    /** Event triggered if new CubismDynamicDrawableData is available for instance. */
    get onDynamicDrawableData(): IDynamicDrawableDataEvent;
    /**
     * Instantiates a CubismMoc.
     * @param moc3 Cubism moc to instantiate.
     * @returns Instance.
     */
    static instantiateFrom(moc: CubismMoc): CubismModel | null;
    /**
     * Resets a CubismMoc reference in CubismModel.
     * @param model Target Cubism model.
     * @param moc Cubism moc to reset.
     */
    resetMocReference(model: CubismModel, moc: CubismMoc): void;
    /** Moc backing field. */
    private _moc;
    /** Moc the instance was instantiated from. */
    get moc(): CubismMoc | null;
    private set moc(value);
    private _taskableModel;
    private get taskableModel();
    private set taskableModel(value);
    /** Parameters backing field. */
    private _parameters;
    /** Drawables of model. */
    get parameters(): Array<CubismParameter> | null;
    private set parameters(value);
    /** Parts backing field. */
    private _parts;
    /** Drawables of model. */
    get parts(): Array<CubismPart> | null;
    private set parts(value);
    /** Drawables backing field. */
    private _drawables;
    /** Drawables of model. */
    get drawables(): Array<CubismDrawable> | null;
    private set drawables(value);
    /** CanvasInformation backing field. */
    private _canvasInformation;
    /** Canvas information of model. */
    get canvasInformation(): CubismCanvasInformation | null;
    private set canvasInformation(value);
    /** Parameter store cache. */
    protected _parameterStore: CubismParameterStore | null;
    /** True if instance is revived. */
    get isRevived(): boolean;
    private get canRevive();
    /** Model update functions for player loop. */
    private static _modelUpdateFunctions;
    private static get modelUpdateFunctions();
    private wasAttachedModelUpdateFunction;
    private _wasJustEnabled;
    /** True on the frame the instance was enabled. */
    private get wasJustEnabled();
    private set wasJustEnabled(value);
    private _lastTick;
    /** Frame number last update was done. */
    private get lastTick();
    private set lastTick(value);
    /** Revives instance. */
    private revive;
    /**
     * Initializes instance for first use.
     * @param moc Moc to instantiate from.
     */
    private reset;
    /** Forces update. */
    forceUpdateNow(): void;
    /** Calls model update functions for player loop. */
    private static onModelsUpdate;
    /**
     * Register the model update function into the player loop.
     *
     * Unity における PreLateUpdate の位置で実行できるイベントがないため
     * Unity における onRenderObject と同程度の実行タイミング {@link Director.EVENT_AFTER_DRAW} で
     * {@link CubismModel.onModelsUpdate} が実行されるよう実装
     */
    static registerCallbackFunction(): void;
    /**
     * Called by Cocos Creator. Triggers this to update.
     * @param deltaTime
     */
    protected update(deltaTime: number): void;
    /** Update model states. */
    private onModelUpdate;
    /** Called by Cocos Creator. Revives instance. */
    protected onEnable(): void;
    protected onDisable(): void;
    /** Called by Cocos Creator. Releases unmanaged memory. */
    protected onDestroy(): void;
    /** Called by Cocos Creator. Triggers onEnable. */
    private onValidate;
    /**
     * コールバック登録用 onLoad にて初期化されます。
     * @param sender
     * @param data
     */
    protected bindedOnModelUpdateFunc: () => void;
}
/**
 * Handler for CubismDynamicDrawableData.
 * @param sender Model the dymanic data applies to.
 * @param data New data.
 */
type DynamicDrawableDataHandler = (sender: CubismModel, data: Array<CubismDynamicDrawableData>) => void;
declare class DynamicDrawableDataEvent implements IDynamicDrawableDataEvent {
    private functions;
    add(func: DynamicDrawableDataHandler): void;
    remove(func: DynamicDrawableDataHandler): void;
    invoke(sender: CubismModel, data: Array<CubismDynamicDrawableData>): void;
}
export {};
