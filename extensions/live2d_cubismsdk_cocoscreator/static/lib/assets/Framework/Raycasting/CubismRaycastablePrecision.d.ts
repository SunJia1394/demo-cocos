/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/** Precision for casting rays against a {@link CubismRaycastable} */
declare enum CubismRaycastablePrecision {
    /** Cast against bounding box. */
    boundingBox = 0,
    /** Cast against triangles. */
    triangles = 1
}
export default CubismRaycastablePrecision;
