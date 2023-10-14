/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/** Component of source physical force. */
declare enum CubismPhysicsSourceComponent {
    /** Use X-axis position. */
    X = 0,
    /** Use Y-axis position. */
    Y = 1,
    /** Use angle. */
    Angle = 2
}
declare namespace CubismPhysicsSourceComponent {
    function purse(text: string): CubismPhysicsSourceComponent | null;
}
export default CubismPhysicsSourceComponent;
