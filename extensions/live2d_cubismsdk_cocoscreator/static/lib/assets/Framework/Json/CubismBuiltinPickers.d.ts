/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import type { Material, Texture2D } from 'cc';
import type CubismModel3Json from './CubismModel3Json';
import type CubismDrawable from '../../Core/CubismDrawable';
/** Default pickers. */
declare namespace CubismBuiltinPickers {
    /**
     * Builtin Material picker.
     * @param sender Event source.
     * @param drawable Drawable to map to.
     * @returns Mapped texture.
     */
    function materialPicker(_sender: CubismModel3Json, drawable: CubismDrawable): Promise<Material | null>;
    /**
     * Builtin Texture2D picker.
     * @param sender Event source.
     * @param drawable Drawable to map to.
     * @returns Mapped texture.
     */
    function texturePicker(sender: CubismModel3Json, drawable: CubismDrawable): Promise<Texture2D | null>;
}
export default CubismBuiltinPickers;
