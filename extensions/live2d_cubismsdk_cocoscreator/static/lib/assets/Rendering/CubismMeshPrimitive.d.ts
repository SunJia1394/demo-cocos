/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
/// <reference types="../@types/cc" />
import { Color, math, Mesh, primitives } from 'cc';
import { CubismBounds as Bounds } from '../Core/CubismGeometry';
export default class CubismMeshPrimitive {
    private _rawPositions;
    private _rawUvs;
    private _rawColors;
    private _rawIndices;
    get indexCount(): number;
    setColors(source: ArrayLike<Color>): void;
    setColorsFromRaw(source: ArrayLike<number>): void;
    getIndices(): ArrayLike<number>;
    setIndices(source: ArrayLike<number>): void;
    private constructor();
    static from(positions: ArrayLike<number>, uvs: ArrayLike<number>, colors: ArrayLike<number>): CubismMeshPrimitive | null;
    static makeEmpty(): CubismMeshPrimitive;
    get vertexCount(): number;
    getPositions(): math.Vec3[];
    setPositions(source: readonly math.IVec3Like[]): void;
    setPositions(source: ArrayLike<math.IVec3Like>): void;
    getUvs(): math.Vec2[];
    getColors(): Color[];
    createRuntimeMeshPrimitive(): primitives.IGeometry;
    createMesh(): Mesh | null;
    calculateBounds(): Bounds;
}
