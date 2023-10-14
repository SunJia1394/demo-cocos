/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { CubismBounds as Bounds } from '../Core/CubismGeometry';
import type CubismRenderer from './CubismRenderer';
/** Array extension methods. */
export declare namespace ArrayExtensionMethods {
    /**
     * Combines bounds of multiple CubismRenderers.
     * @param self Renderers.
     * @returns Combined bounds.
     */
    function getMeshRendererBounds(self: Array<CubismRenderer>): Bounds;
}
