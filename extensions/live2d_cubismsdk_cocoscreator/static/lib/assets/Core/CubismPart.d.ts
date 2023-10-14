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
 * Single CubismModel part.
 *
 * **Sealed class.**
 */
export default class CubismPart extends Component {
    /**
     * Creates parts for a {@link CubismModel}.
     * @param model Handle to unmanaged model.
     * @returns Parts root.
     */
    static createParts(model: Model): Node;
    /** Unmanaged parts from unmanaged model. */
    private unmanagedParts;
    /** {@link unmanagedIndex} backing field. */
    private _unmanagedIndex;
    /** Position in unmanaged arrays. */
    get unmanagedIndex(): number;
    private set unmanagedIndex(value);
    /** Copy of Id. */
    get id(): string;
    /** Current opacity. */
    opacity: number;
    /** Editor Only, For operation from inspector. */
    private _model;
    /** Editor Only, For operation from inspector. */
    private set opacityInEditor(value);
    /**
     * Revives instance.
     * @param model TaskableModel to unmanaged unmanagedModel.
     */
    revive(model: Model): void;
    /**
     * Restores instance to initial state.
     * @param model TaskableModel to unmanaged unmanagedModel.
     * @param index Position in unmanaged arrays.
     */
    reset(model: Model, index: number): void;
}
