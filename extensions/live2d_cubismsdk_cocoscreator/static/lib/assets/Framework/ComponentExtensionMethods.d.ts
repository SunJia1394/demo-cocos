/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import type { Component, __private } from 'cc';
declare namespace ComponentExtensionMethods {
    function getComponentsMany<T extends Component>(self: Component[], classConstructor: __private._types_globals__Constructor<T>): T[];
    /**
     * Adds a component to multiple objects.
     * @param self Array of objects.
     * @param classConstructor
     * @returns Added components.
     */
    function addComponentEach<T extends Component>(self: Component[], classConstructor: __private._types_globals__Constructor<T>): T[];
}
export default ComponentExtensionMethods;
