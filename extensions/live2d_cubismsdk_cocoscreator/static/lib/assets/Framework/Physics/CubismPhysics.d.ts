/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { math } from 'cc';
/** Global variables of physics. */
declare namespace CubismPhysics {
    /** Default gravity. */
    const gravity: Readonly<math.Vec2>;
    /** Default direction of wind. */
    const wind: Readonly<math.Vec2>;
    /** Air resistance. */
    const airResistance: number;
    /** Physical maximum weight. */
    const maximumWeight: number;
    /** Use fixed delta time. */
    const useFixedDeltaTime: boolean;
    /** Use angle correction. */
    const useAngleCorrection = true;
    /** Threshold of moving. */
    const movementThreshold: number;
    /** Constant of maximum allowed delta time */
    const maxDeltaTime: number;
}
export default CubismPhysics;
