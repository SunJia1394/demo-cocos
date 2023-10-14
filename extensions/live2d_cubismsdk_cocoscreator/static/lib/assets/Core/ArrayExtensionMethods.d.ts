/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import type { Model } from '../CubismCore';
import type CubismDrawable from './CubismDrawable';
import type CubismDynamicDrawableData from './CubismDynamicDrawableData';
import type CubismParameter from './CubismParameter';
import type CubismPart from './CubismPart';
/** Extension for Cubism related arrays. */
declare namespace ArrayExtensionMethods {
    /**
     * Finds a {@link CubismParameter} by its ID.
     * @param self Container.
     * @param id ID to match.
     * @returns Parameter on success; null otherwise.
     */
    function findByIdFromParameters(self: readonly CubismParameter[], id: string): CubismParameter | null;
    /**
     * Revives (and sorts) CubismParameters.
     * @param self Container.
     * @param model TaskableModel to unmanaged model.
     * @returns
     */
    function reviveParameters(self: CubismParameter[], model: Model): void;
    /**
     * Writes opacities to unmanaged model.
     * @param self Source buffer.
     * @param model
     * @returns
     */
    function writeToModelFromParameters(self: readonly CubismParameter[], model: Model): void;
    /**
     * Writes opacities to unmanaged model.
     * @param self Source buffer.
     * @param model
     * @returns
     */
    function readFromParameters(self: readonly CubismParameter[], model: Model): void;
    /**
     * Finds a CubismPart by its ID.
     * @param self this.
     * @param id ID to match.
     * @returns Part if found; null otherwise.
     */
    function findByIdFromParts(self: readonly CubismPart[], id: string): CubismPart | null;
    /**
     * Revives (and sorts) CubismParts.
     * @param self Container.
     * @param model TaskableModel to unmanaged model.
     */
    function reviveParts(self: CubismPart[], model: Model): void;
    /**
     * Writes opacities to unmanaged model.
     * @param self Source buffer.
     * @param model
     * @returns
     */
    function writeToModelFromParts(self: CubismPart[], model: Model): void;
    /**
     * Finds a CubismDrawable by its ID.
     * @param self this.
     * @param id ID to match.
     * @returns Part if found; null otherwise.
     */
    function findByIdFromDrawables(self: readonly CubismDrawable[], id: string): CubismDrawable | null;
    /**
     * Revives (and sorts) CubismDrawables.
     * @param self Container.
     * @param model TaskableModel to unmanaged model.
     */
    function reviveDrawables(self: CubismDrawable[], model: Model): void;
    /**
     * Reads new data from a model.
     * @param self Buffer to write to.
     * @param model Unmanaged model to read from.
     */
    function readFromArrayCubismDynamicDrawableData(self: readonly CubismDynamicDrawableData[], unmanagedModel: Model): void;
}
export default ArrayExtensionMethods;
