/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Node } from 'cc';
/** Extensions for Objects. */
declare namespace ObjectExtensionMethods {
    /**
     * Extracts an interface from an Object.
     * @param T Interface type to extract.
     * @param self this.
     * @returns Valid reference on success; null otherwise.
     */
    function getInterface<T extends object = object>(self: object, isImplementsFunc: (obj: object) => obj is T): T | null;
    /**
     * Nulls reference in case an Object doesn't expose an interface requested.
     * @param T Type of interface to check for.
     * @param self this.
     * @returns self if object exposes interface; null otherwise.
     */
    function toNullUnlessImplementsInterface<T extends object = object>(self: unknown, isImplementsFunc: (obj: unknown) => obj is T): T | Node | null;
    /**
     * Checks whether a {@link CCObject} implements an interface.
     * @param T Interface type to check against.
     * @param self this.
     * @returns true if interface is exposed; false otherwise.
     */
    function implementsInterface<T extends object = object>(self: unknown, isImplementsFunc: (obj: unknown) => obj is T): self is T | Node;
}
export default ObjectExtensionMethods;
