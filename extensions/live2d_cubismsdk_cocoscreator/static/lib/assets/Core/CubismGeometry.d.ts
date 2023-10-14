/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { geometry } from 'cc';
import IStructLike from '../IStructLike';
import { IVector3, CubismVector3 as Vector3 } from './CubismVector';
export declare class CubismBounds implements IStructLike<CubismBounds> {
    private readonly cx;
    private readonly cy;
    private readonly cz;
    private readonly hw;
    private readonly hh;
    private readonly hd;
    constructor(cx: number, cy: number, cz: number, hw: number, hh: number, hd: number);
    center(): Vector3;
    extents(): Vector3;
    min(): Vector3;
    max(): Vector3;
    contains(point: IVector3): boolean;
    copyWith(args?: {
        cx?: number;
        cy?: number;
        cz?: number;
        hw?: number;
        hh?: number;
        hd?: number;
    }): CubismBounds;
    equals(other: CubismBounds): boolean;
    strictEquals(other: CubismBounds): boolean;
    toAABB(): geometry.AABB;
    static from6f(args?: {
        cx?: number;
        cy?: number;
        cz?: number;
        hw?: number;
        hh?: number;
        hd?: number;
    }): CubismBounds;
    static fromVector(center: IVector3, size: IVector3): CubismBounds;
    static fromAABB(aabb: geometry.AABB): CubismBounds;
}
