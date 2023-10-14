/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import type CubismDrawable from '../Core/CubismDrawable';
import type CubismRenderController from './CubismRenderController';
declare namespace ICubismDrawOrderHandler {
    const SYMBOL: unique symbol;
    function isImplements(obj: unknown): obj is ICubismDrawOrderHandler;
}
/** Allows listening to CubismDrawable draw order changes. */
interface ICubismDrawOrderHandler {
    readonly [ICubismDrawOrderHandler.SYMBOL]: typeof ICubismDrawOrderHandler.SYMBOL;
    /**
     * Called when a draw order did change.
     * @param controller The CubismRenderController.
     * @param drawable The CubismDrawable that draw order did change.
     * @param newDrawOrder New draw order.
     */
    onDrawOrderDidChange(controller: CubismRenderController, drawable: CubismDrawable, newDrawOrder: number): void;
}
export default ICubismDrawOrderHandler;
