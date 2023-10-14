/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import type IStructLike from '../../IStructLike';
/** Normalization tuplet. (struct) */
export declare class CubismPhysicsNormalizationTuplet implements IStructLike<CubismPhysicsNormalizationTuplet> {
    /** Normalized maximum value. */
    readonly maximum: number;
    /** Normalized minimum value. */
    readonly minimum: number;
    /** Normalized default value. */
    readonly default: number;
    constructor(args?: {
        maximum?: number;
        minimum?: number;
        defaultValue?: number;
    });
    equals(other: CubismPhysicsNormalizationTuplet): boolean;
    strictEquals(other: CubismPhysicsNormalizationTuplet): boolean;
    copyWith(args?: {
        maximum?: number;
        minimum?: number;
        defaultValue?: number;
    }): CubismPhysicsNormalizationTuplet;
}
/** Normalization parameters of physics. (struct) */
declare class CubismPhysicsNormalization implements IStructLike<CubismPhysicsNormalization> {
    /** Normalized position. */
    readonly position: CubismPhysicsNormalizationTuplet;
    /** Normalized angle. */
    readonly angle: CubismPhysicsNormalizationTuplet;
    constructor(args?: {
        position?: CubismPhysicsNormalizationTuplet;
        angle?: CubismPhysicsNormalizationTuplet;
    });
    equals(other: CubismPhysicsNormalization): boolean;
    strictEquals(other: CubismPhysicsNormalization): boolean;
    copyWith(args?: {
        position?: CubismPhysicsNormalizationTuplet;
        angle?: CubismPhysicsNormalizationTuplet;
    }): CubismPhysicsNormalization;
}
declare namespace CubismPhysicsNormalization {
    const DEFAULT: CubismPhysicsNormalization;
}
export default CubismPhysicsNormalization;
export declare namespace CubismPhysicsNormalizationTuplet {
    const DEFAULT: CubismPhysicsNormalizationTuplet;
}
