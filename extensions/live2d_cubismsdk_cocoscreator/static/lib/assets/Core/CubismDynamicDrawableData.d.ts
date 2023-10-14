/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { math } from 'cc';
import type { Model } from '../CubismCore';
/**
 * Dynamic {@link CubismDrawable} data.
 *
 * **Sealed class.**
 */
export default class CubismDynamicDrawableData {
    private constructor();
    /**
     * Creates buffer for dynamic {@link CubismDrawable} data.
     * @param unmanagedModel Unmanaged model to create buffer for.
     * @returns Buffer.
     */
    static createData(unmanagedModel: Model): Array<CubismDynamicDrawableData>;
    private _flags;
    /** Dirty flags. */
    get flags(): number;
    set flags(value: number);
    private _opacity;
    /** Current opacity. */
    get opacity(): number;
    set opacity(value: number);
    private _drawOrder;
    /** Current draw order. */
    get drawOrder(): number;
    set drawOrder(value: number);
    private _renderOrder;
    /** Current render order. */
    get renderOrder(): number;
    set renderOrder(value: number);
    private _vertexPositions;
    /** Current vertex position. */
    get vertexPositions(): Array<Readonly<math.Vec3>>;
    set vertexPositions(value: Array<Readonly<math.Vec3>>);
    private _multiplyColor;
    /** Current multiply color. */
    get multiplyColor(): Readonly<math.Color>;
    set multiplyColor(value: Readonly<math.Color>);
    private _screenColor;
    /** Current screen color. */
    get screenColor(): Readonly<math.Color>;
    set screenColor(value: Readonly<math.Color>);
    /** True if currently visible. */
    get isVisible(): boolean;
    /** True if {@link isVisible} did change. */
    get isVisibilityDirty(): boolean;
    /** True if {@link opacity} did change. */
    get isOpacityDirty(): boolean;
    /** True if {@link drawOrder} did change. */
    get isDrawOrderDirty(): boolean;
    /** True if {@link renderOrder} did change. */
    get isRenderOrderDirty(): boolean;
    /** True if {@link vertexPositions} did change. */
    get areVertexPositionsDirty(): boolean;
    /** True if {@link multiplyColor} and {@link screenColor} did change. */
    get isBlendColorDirty(): boolean;
    /** True if any data did change. */
    get isAnyDirty(): boolean;
}
