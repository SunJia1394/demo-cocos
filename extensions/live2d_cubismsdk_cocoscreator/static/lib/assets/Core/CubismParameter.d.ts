/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component, Node } from 'cc';
import type { Model } from '../CubismCore';
/**
 * Single {@link CubismModel} parameter.
 *
 * **Sealed class**
 */
export default class CubismParameter extends Component {
    /**
     * Creates drawables for a {@link CubismModel}.
     * @param model Handle to unmanaged model.
     * @returns Drawables root.
     */
    static createParameters(model: Model): Node;
    private _unmanagedParameters;
    /** Unmanaged parameters from unmanaged model. */
    private get unmanagedParameters();
    private set unmanagedParameters(value);
    /** {@link unmanagedIndex} backing field. */
    private _unmanagedIndex;
    /** Position in unmanaged arrays. */
    get unmanagedIndex(): number;
    private set unmanagedIndex(value);
    /** Copy of Id. */
    get id(): string;
    /** Minimum value. */
    get minimumValue(): number;
    /** Maximum value. */
    get maximumValue(): number;
    /** Default value. */
    get defaultValue(): number;
    /** Current value. */
    value: number;
    /** Editor Only, For operation from inspector. */
    private _model;
    /** Editor Only, For operation from inspector. */
    private set valueInEditor(value);
    /**
     * Revives the instance.
     * @param model Handle to unmanaged model.
     */
    revive(model: Model): void;
    /**
     * Restores instance to initial state.
     * @param model Handle to unmanaged model.
     * @param index Position in unmanaged arrays.
     */
    private reset;
}
