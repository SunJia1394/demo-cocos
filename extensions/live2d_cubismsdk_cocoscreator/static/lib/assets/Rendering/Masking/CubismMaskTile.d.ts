/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { math } from 'cc';
import type IStructLike from '../../IStructLike';
/** Single mask tile. (struct) */
declare class CubismMaskTile implements IStructLike<CubismMaskTile> {
    /**
     * Converts a CubismMaskTile to a Vector4.
     * @returns
     */
    toVec4(): math.Vec4;
    /**
     * Color channel of the tile.
     *
     * Valid values are 0f, 1f, 2, and 3f.
     */
    readonly channel: number;
    /** Column index of the tile in subdivided texture. */
    readonly column: number;
    /** Row index of the tile in subdivided texture. */
    readonly row: number;
    /** Size of the tile in texture coordinates. */
    readonly size: number;
    constructor(args?: {
        channel?: number;
        column?: number;
        row?: number;
        size?: number;
    });
    copyWith(args?: {
        channel?: number;
        column?: number;
        row?: number;
        size?: number;
    }): CubismMaskTile;
    equals(other: CubismMaskTile): boolean;
    strictEquals(other: CubismMaskTile): boolean;
    static isEquals(a: CubismMaskTile, b: CubismMaskTile): boolean;
}
declare namespace CubismMaskTile {
    const DEFAULT: CubismMaskTile;
}
export default CubismMaskTile;
