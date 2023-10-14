/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { math } from 'cc';
import type IStructLike from '../../IStructLike';
/** Vertex data of physics. (struct) */
export default class CubismPhysicsParticle implements IStructLike<CubismPhysicsParticle> {
    /** Initial position. */
    readonly initialPosition: math.Vec2;
    /** Mobility ratio. */
    readonly mobility: number;
    /** Delay ratio. */
    readonly delay: number;
    /** Current acceleration. */
    readonly acceleration: number;
    /** Length of radius. */
    readonly radius: number;
    /** Current position. (NonSerialized) */
    readonly position: math.Vec2;
    /** Last position. (NonSerialized) */
    readonly lastPosition: math.Vec2;
    /** Last gravity. (NonSerialized) */
    readonly lastGravity: math.Vec2;
    /** Current force. (NonSerialized) */
    readonly force: math.Vec2;
    /** Current velocity. (NonSerialized) */
    readonly velocity: math.Vec2;
    constructor(args?: {
        initialPosition?: Readonly<math.Vec2>;
        mobility?: number;
        delay?: number;
        acceleration?: number;
        radius?: number;
        position?: Readonly<math.Vec2>;
        lastPosition?: Readonly<math.Vec2>;
        lastGravity?: Readonly<math.Vec2>;
        force?: Readonly<math.Vec2>;
        velocity?: Readonly<math.Vec2>;
    });
    copyWith(args?: {
        initialPosition?: Readonly<math.Vec2>;
        mobility?: number;
        delay?: number;
        acceleration?: number;
        radius?: number;
        position?: Readonly<math.Vec2>;
        lastPosition?: Readonly<math.Vec2>;
        lastGravity?: Readonly<math.Vec2>;
        force?: Readonly<math.Vec2>;
        velocity?: Readonly<math.Vec2>;
    }): CubismPhysicsParticle;
    equals(other: CubismPhysicsParticle): boolean;
    strictEquals(other: CubismPhysicsParticle): boolean;
}
