/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { math } from 'cc';
import type IStructLike from '../IStructLike';
export interface IVector2 {
    readonly x: number;
    readonly y: number;
}
export interface IVector3 extends IVector2 {
    readonly z: number;
}
export interface IVector4 extends IVector3 {
    readonly w: number;
}
export declare class CubismVector2 implements IVector2, IStructLike<CubismVector2> {
    readonly x: number;
    readonly y: number;
    constructor(args?: {
        readonly x?: number;
        readonly y?: number;
    });
    copyWith(args?: {
        readonly x?: number;
        readonly y?: number;
    }): CubismVector2;
    equals(other: CubismVector2): boolean;
    strictEquals(other: CubismVector2): boolean;
    toBuiltinType(): math.Vec2;
}
export declare class CubismVector3 implements IVector3, IStructLike<CubismVector3> {
    readonly x: number;
    readonly y: number;
    readonly z: number;
    copyWith(args?: {
        readonly x?: number;
        readonly y?: number;
        readonly z?: number;
    }): CubismVector3;
    equals(other: CubismVector3): boolean;
    strictEquals(other: CubismVector3): boolean;
    toBuiltinType(): math.Vec3;
    add(value: IVector3): CubismVector3;
    subtract(value: IVector3): CubismVector3;
    multiplySingle(value: number): CubismVector3;
    sqrMagnitude(): number;
    magnitude(): number;
    constructor(x: number, y: number, z: number);
    static from(args?: {
        readonly x?: number;
        readonly y?: number;
        readonly z?: number;
    }): CubismVector3;
    static ZERO: CubismVector3;
}
export declare class CubismVector4 implements IVector4, IStructLike<CubismVector4> {
    readonly x: number;
    readonly y: number;
    readonly z: number;
    readonly w: number;
    constructor(args?: {
        readonly x?: number;
        readonly y?: number;
        readonly z?: number;
        readonly w?: number;
    });
    copyWith(args?: {
        readonly x?: number;
        readonly y?: number;
        readonly z?: number;
        readonly w?: number;
    }): CubismVector4;
    equals(other: CubismVector4): boolean;
    strictEquals(other: CubismVector4): boolean;
    toBuiltinType(): math.Vec4;
}
