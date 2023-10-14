/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/** Core.CubismDrawable render sort modes. */
declare enum CubismSortingMode {
    /** Painter's algorithm sorting that works well with other Cocos Creator elements. Offsets by depth. */
    backToFrontZ = 0,
    /** Offset by depth from front to back. */
    frontToBackZ = 1,
    /** Offsets by Cocos Creator's sorting order from back to front. */
    backToFrontOrder = 2,
    /** Offsets by Cocos Creator's sorting order from front to back. */
    frontToBackOrder = 3
}
declare namespace CubismSortingMode {
    /**
     * Checks whether a mode sorts by depth.
     * @param self Mode to query.
     * @returns true if mode sorts by depth; false otherwise.
     */
    function sortByDepth(self: CubismSortingMode): boolean;
    /**
     * Checks whether a mode sorts by order.
     * @param self Mode to query.
     * @returns true if mode sorts by order; false otherwise.
     */
    function sortByOrder(self: CubismSortingMode): boolean;
}
export default CubismSortingMode;
