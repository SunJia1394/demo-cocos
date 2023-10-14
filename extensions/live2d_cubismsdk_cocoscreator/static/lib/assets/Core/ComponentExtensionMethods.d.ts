/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component } from 'cc';
import CubismModel from '../Core/CubismModel';
/** Extensions for {@link Component}s. */
declare namespace ComponentExtensionMethods {
    /**
     * Finds a {@link CubismModel} relative to a {@link Component}.
     * @param self Component to base search on.
     * @param includeParents Condition for including parents in search.
     * @returns The relative {@link CubismModel} if found; null otherwise.
     */
    function findCubismModel(self: Component, includeParents?: boolean): CubismModel | null;
}
export default ComponentExtensionMethods;
