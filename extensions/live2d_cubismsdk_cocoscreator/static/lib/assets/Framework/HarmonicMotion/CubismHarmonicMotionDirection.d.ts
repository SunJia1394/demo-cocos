/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/** Determines the direction of a harmonic motion from its origin. */
declare enum CubismHarmonicMotionDirection {
    /** Motion to the left of the origin. */
    Left = 0,
    /** Motion to the right of the origin. */
    Right = 1,
    /** Centric left-right motion around the origin. */
    Centric = 2
}
export default CubismHarmonicMotionDirection;
