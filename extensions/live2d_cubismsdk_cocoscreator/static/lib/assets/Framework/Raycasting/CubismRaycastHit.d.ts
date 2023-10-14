/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import CubismDrawable from '../../Core/CubismDrawable';
import { CubismVector3 as Vector3 } from '../../Core/CubismVector';
import type IStructLike from '../../IStructLike';
/** Contains raycast information. */
export default class CubismRaycastHit implements IStructLike<CubismRaycastHit> {
    /** The hit {@link CubismDrawable} */
    readonly drawable: CubismDrawable | null;
    /** The distance the ray traveled until it hit the {@link CubismDrawable}. */
    readonly distance: number;
    /** The hit position local to the {@link CubismDrawable}. */
    readonly localPosition: Vector3;
    /** The hit position in world coordinates. */
    readonly worldPosition: Vector3;
    constructor(args?: {
        drawable?: CubismDrawable | null;
        distance?: number;
        localPosition?: Vector3;
        worldPosition?: Vector3;
    });
    copyWith(args?: {
        drawable?: CubismDrawable | null;
        distance?: number;
        localPosition?: Vector3;
        worldPosition?: Vector3;
    }): CubismRaycastHit;
    equals(other: CubismRaycastHit): boolean;
    strictEquals(other: CubismRaycastHit): boolean;
}
