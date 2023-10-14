/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Material } from 'cc';
/** Default materials. */
declare namespace CubismBuiltinMaterials {
    /** Default unlit material. */
    function getUnlit(): Promise<Material | null>;
    /** Default unlit, additively blending material. */
    function getUnlitAdditive(): Promise<Material | null>;
    /** Default unlit culled, additively blending material. */
    function getUnlitAdditiveCulling(): Promise<Material | null>;
    /** Default unlit masked, additively blending material. */
    function getUnlitAdditiveMasked(): Promise<Material | null>;
    /** Default unlit masked culled, additively blending material. */
    function getUnlitAdditiveMaskedCulling(): Promise<Material | null>;
    /** Default unlit masked inverted, additively blending material. */
    function getUnlitAdditiveMaskedInverted(): Promise<Material | null>;
    /** Default unlit masked inverted culled, additively blending material. */
    function getUnlitAdditiveMaskedInvertedCulling(): Promise<Material | null>;
    /** Default unlit culled material. */
    function getUnlitCulling(): Promise<Material | null>;
    /** Default unlit masked material. */
    function getUnlitMasked(): Promise<Material | null>;
    /** Default unlit masked culled material. */
    function getUnlitMaskedCulling(): Promise<Material | null>;
    /** Default unlit masked inverted material. */
    function getUnlitMaskedInverted(): Promise<Material | null>;
    /** Default unlit masked inverted culled material. */
    function getUnlitMaskedInvertedCulling(): Promise<Material | null>;
    /** Default unlit multiply material. */
    function getUnlitMultiply(): Promise<Material | null>;
    /** Default unlit culled, multiply blending material. */
    function getUnlitMultiplyCulling(): Promise<Material | null>;
    /** Default unlit masked, multiply blending material. */
    function getUnlitMultiplyMasked(): Promise<Material | null>;
    /** Default unlit masked culled material. */
    function getUnlitMultiplyMaskedCulling(): Promise<Material | null>;
    /** Default unlit masked inverted, multiply blending material. */
    function getUnlitMultiplyMaskedInverted(): Promise<Material | null>;
    /** Default unlit masked inverted culled, multiply blending material. */
    function getUnlitMultiplyMaskedInvertedCulling(): Promise<Material | null>;
    /** Default mask material. */
    function getMask(): Promise<Material | null>;
    /** Default culled mask material. */
    function getMaskCulling(): Promise<Material | null>;
}
export default CubismBuiltinMaterials;
