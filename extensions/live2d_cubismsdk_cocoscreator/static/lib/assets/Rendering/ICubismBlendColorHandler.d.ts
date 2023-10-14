/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Color } from 'cc';
import type CubismRenderController from './CubismRenderController';
declare namespace ICubismBlendColorHandler {
    const SYMBOL: unique symbol;
    function isImplements(obj: unknown): obj is ICubismBlendColorHandler;
}
/** Allows listening to CubismDrawable draw order changes. */
interface ICubismBlendColorHandler {
    readonly [ICubismBlendColorHandler.SYMBOL]: typeof ICubismBlendColorHandler.SYMBOL;
    /**
     * Called when a draw order did change.
     * @param controller The CubismRenderController.
     * @param drawable The CubismDrawable that draw order did change.
     * @param newDrawOrder New draw order.
     */
    onBlendColorDidChange(controller: CubismRenderController, newColors: Readonly<Color>[]): void;
}
export default ICubismBlendColorHandler;
