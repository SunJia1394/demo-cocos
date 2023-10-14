/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { EffectAsset } from 'cc';
/**
 * Default shader assets.
 */
export declare namespace CubismBuiltinShaders {
    /**
     * Default unlit shader.
     * @returns Default unlit shader EffectAsset Object
     */
    function getUnlit(): Promise<EffectAsset | null>;
    /**
     * Shader for drawing masks.
     * @returns Shader for drawing masks EffectAsset Object
     */
    function getMask(): Promise<EffectAsset | null>;
}
