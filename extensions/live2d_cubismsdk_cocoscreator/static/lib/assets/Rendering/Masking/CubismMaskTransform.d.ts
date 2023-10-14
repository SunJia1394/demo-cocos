/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { math } from 'cc';
import type IStructLike from '../../IStructLike';
/** Holds info used for masking. (struct) */
declare class CubismMaskTransform implements IStructLike<CubismMaskTransform> {
    /** UniqueId backing field. */
    private static _uniqueId;
    /**
     * HACK Prevents dynamic batching of <see cref="CubismRenderer"/>s that are masked.
     *
     * As Unity transforms vertex positions into world space on dynamic batching,
     * and masking relies on vertex positions to be in local space,
     * masking isn't compatible with dynamic batching.
     *
     * Unity exposes a shader tag for disabling dynamic batching ("DynamicBatching"), but this would make it necessary for creating separate shaders...
     */
    private static get uniqueId();
    /**
     * Converts a CubismMaskTransform to a Vector4.
     * @returns Value to convert.
     */
    toVec4(): math.Vec4;
    /** Offset in model space. */
    readonly offset: Readonly<math.Vec2>;
    /** Scale in model space. */
    readonly scale: number;
    constructor(args?: {
        offset?: Readonly<math.Vec2>;
        scale?: number;
    });
    equals(other: CubismMaskTransform): boolean;
    strictEquals(other: CubismMaskTransform): boolean;
    copyWith(args?: {
        offset?: Readonly<math.Vec2>;
        scale?: number;
    }): CubismMaskTransform;
}
declare namespace CubismMaskTransform {
    const DEFAULT: CubismMaskTransform;
}
export default CubismMaskTransform;
