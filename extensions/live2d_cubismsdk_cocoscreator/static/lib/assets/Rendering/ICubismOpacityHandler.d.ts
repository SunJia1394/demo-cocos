/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import type CubismRenderController from './CubismRenderController';
declare namespace ICubismOpacityHandler {
    const SYMBOL: unique symbol;
    function isImplements(obj: unknown): obj is ICubismOpacityHandler;
}
/** Allows listening to <see cref="CubismDrawable"/> draw order changes. */
interface ICubismOpacityHandler {
    readonly [ICubismOpacityHandler.SYMBOL]: typeof ICubismOpacityHandler.SYMBOL;
    /**
     * Called when opacity did change.
     * @param controller The CubismRenderController.
     * @param newOpacity New opacity.
     */
    onOpacityDidChange(controller: CubismRenderController, newOpacity: number): void;
}
export default ICubismOpacityHandler;
