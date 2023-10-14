/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { CubismBounds as Bounds } from '../../Core/CubismGeometry';
import CubismMaskRenderer from './CubismMaskRenderer';
/** Extensions for CubismMaskRenderer. */
declare namespace CubismMaskRendererExtensionMethods {
    /**
     * Combines bounds of multiple CubismMaskRenderers.
     * @param self Renderers.
     * @returns Combined bounds.
     */
    function getBounds(self: Array<CubismMaskRenderer>): Bounds;
}
export default CubismMaskRendererExtensionMethods;
