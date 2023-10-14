/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { Model } from '../CubismCore';
import CubismDynamicDrawableData from './CubismDynamicDrawableData';
import type CubismMoc from './CubismMoc';
import type CubismParameter from './CubismParameter';
import type CubismPart from './CubismPart';
import type ICubismTask from './ICubismTask';
/**
 * 'Atomic' {@link CubismModel} update task.
 *
 * **Sealed class**
 */
export default class CubismTaskableModel implements ICubismTask {
    /**
     * Initializes instance.
     * @param moc Moc unmanaged model was instantiated from.
     * @param unmanagedModel
     * @param dynamicDrawableData
     */
    static instantiate(moc: CubismMoc, unmanagedModel: Model, dynamicDrawableData: CubismDynamicDrawableData[]): CubismTaskableModel;
    private constructor();
    /**
     * Creates a CubismTaskableModel from a CubismMoc.
     * @param moc Moc source.
     * @returns Instance.
     */
    static createTaskableModel(moc: CubismMoc): CubismTaskableModel | null;
    private _unmanagedModel;
    /**
     * Handle to unmanaged model.
     *
     * CubismUnmanagedModel
     */
    get unmanagedModel(): Model | null;
    private set unmanagedModel(value);
    private _moc;
    /** CubismMoc the model was instantiated from. */
    get moc(): CubismMoc;
    private set moc(value);
    private _dynamicDrawableData;
    /** Buffer to write dynamic data to. */
    get dynamicDrawableData(): Array<CubismDynamicDrawableData>;
    private set dynamicDrawableData(value);
    /** True if task is currently executing. */
    get isExecuting(): boolean;
    /** True if did run to completion at least once. */
    get didExecute(): boolean;
    /** True if unmanaged model and moc should be released. */
    private _shouldReleaseUnmanaged;
    get shouldReleaseUnmanaged(): boolean;
    set shouldReleaseUnmanaged(value: boolean);
    /**
     * Tries to read parameters into a buffer.
     * @param parameters Buffer to write to.
     * @returns true on success; false otherwise.
     */
    tryReadParameters(parameters: Array<CubismParameter>): boolean;
    /**
     * Tries to write parameters to a buffer.
     * @param parameters Buffer to read from.
     * @param parts true on success; false otherwise.
     */
    tryWriteParametersAndParts(parameters: Array<CubismParameter>, parts: Array<CubismPart>): boolean;
    /** Dispatches the task for (maybe async) execution. */
    update(): void;
    /**
     * Forces the task to run now to completion.
     * @returns
     */
    updateNow(): boolean;
    /** Releases unmanaged resource. */
    releaseUnmanaged(): void;
    /** Runs the task. */
    execute(): void;
    /** Actually releases native resource(s). */
    private onReleaseUnmanaged;
    private _state;
    /** Internal state. */
    private get state();
    private set state(value);
}
