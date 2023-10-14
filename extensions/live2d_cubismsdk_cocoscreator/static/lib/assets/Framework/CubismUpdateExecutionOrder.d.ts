/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import ICubismUpdatable from './ICubismUpdatable';
declare namespace CubismUpdateExecutionOrder {
    const CUBISM_MOTION_APPLIER = 50;
    const CUBISM_FADE_CONTROLLER = 100;
    const CUBISM_PARAMETER_STORE_SAVE_PARAMETERS = 150;
    const CUBISM_POSE_CONTROLLER = 200;
    const CUBISM_EXPRESSION_CONTROLLER = 300;
    const CUBISM_EYE_BLINK_CONTROLLER = 400;
    const CUBISM_MOUTH_CONTROLLER = 500;
    const CUBISM_HARMONIC_MOTION_CONTROLLER = 600;
    const CUBISM_LOOK_CONTROLLER = 700;
    const CUBISM_PHYSICS_CONTROLLER = 800;
    const CUBISM_RENDER_CONTROLLER = 10000;
    const CUBISM_MASK_CONTROLLER = 10100;
    function sortByExecutionOrder(updatables: Array<ICubismUpdatable>): void;
    function compareByExecutionOrder(a: ICubismUpdatable, b: ICubismUpdatable): number;
}
export default CubismUpdateExecutionOrder;
