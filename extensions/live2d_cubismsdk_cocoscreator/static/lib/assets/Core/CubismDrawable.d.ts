/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component, Node, math, Color } from 'cc';
import type { Model } from '../CubismCore';
import CubismMeshPrimitive from '../Rendering/CubismMeshPrimitive';
/**
 * Single CubismModel drawable.
 *
 * **Sealed class.**
 */
export default class CubismDrawable extends Component {
    /**
     * Creates drawables for a {@link CubismModel}.
     * @param model Handle to unmanaged model.
     * @returns Drawables root.
     */
    static createDrawables(model: Model): Node;
    private _unmanagedDrawables;
    /** Unmanaged drawables from unmanaged model. */
    private get unmanagedDrawables();
    private set unmanagedDrawables(value);
    /** {@link unmanagedIndex} backing field. */
    private _unmanagedIndex;
    /** Position in unmanaged arrays. */
    get unmanagedIndex(): number;
    private set unmanagedIndex(value);
    /** Copy of Id. */
    get id(): string;
    /** Texture UnmanagedIndex. */
    get textureIndex(): number;
    /** Copy of the masks. */
    get masks(): Array<CubismDrawable>;
    /** Copy of vertex positions. */
    get vertexPositions(): Array<math.Vec3>;
    /** Copy of vertex texture coordinates. */
    get vertexUvs(): Array<math.Vec2>;
    /** Copy of triangle indices. */
    get indices(): Uint16Array;
    generateMeshPrimitive(): CubismMeshPrimitive | null;
    /** True if double-sided. */
    get isDoubleSided(): boolean;
    /** True if masking is requested. */
    get isMasked(): boolean;
    /** True if inverted mask. */
    get isInverted(): boolean;
    /** True if additive blending is requested. */
    get blendAdditive(): boolean;
    /** True if multiply blending is setd. */
    get multiplyBlend(): boolean;
    get multiplyColor(): Color;
    get screenColor(): Color;
    /**
     * Revives instance.
     * @param model Handle to unmanaged model.
     */
    revive(model: Model): void;
    /**
     * Restores instance to initial state.
     * @param model Handle to unmanaged model.
     * @param index Position in unmanaged arrays.
     */
    reset(model: Model, index: number): void;
}
