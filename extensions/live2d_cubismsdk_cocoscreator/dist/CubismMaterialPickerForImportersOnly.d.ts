/// <reference types="./@types" />
import type { Material } from 'cc';
import type CubismDrawable from '../static/assets/Core/CubismDrawable';
import type CubismModel3Json from '../static/assets/Framework/Json/CubismModel3Json';
export default class CubismMaterialPickerForImportersOnly {
    private readonly unlit;
    private readonly unlitAdditive;
    private readonly unlitAdditiveCulling;
    private readonly unlitAdditiveMasked;
    private readonly unlitAdditiveMaskedCulling;
    private readonly unlitAdditiveMaskedInverted;
    private readonly unlitAdditiveMaskedInvertedCulling;
    private readonly unlitCulling;
    private readonly unlitMasked;
    private readonly unlitMaskedCulling;
    private readonly unlitMaskedInverted;
    private readonly unlitMaskedInvertedCulling;
    private readonly unlitMultiply;
    private readonly unlitMultiplyCulling;
    private readonly unlitMultiplyMasked;
    private readonly unlitMultiplyMaskedCulling;
    private readonly unlitMultiplyMaskedInverted;
    private readonly unlitMultiplyMaskedInvertedCulling;
    constructor(unlit: Material | null, unlitAdditive: Material | null, unlitAdditiveCulling: Material | null, unlitAdditiveMasked: Material | null, unlitAdditiveMaskedCulling: Material | null, unlitAdditiveMaskedInverted: Material | null, unlitAdditiveMaskedInvertedCulling: Material | null, unlitCulling: Material | null, unlitMasked: Material | null, unlitMaskedCulling: Material | null, unlitMaskedInverted: Material | null, unlitMaskedInvertedCulling: Material | null, unlitMultiply: Material | null, unlitMultiplyCulling: Material | null, unlitMultiplyMasked: Material | null, unlitMultiplyMaskedCulling: Material | null, unlitMultiplyMaskedInverted: Material | null, unlitMultiplyMaskedInvertedCulling: Material | null);
    private _pick;
    private __pick;
    pick: (sender: CubismModel3Json, drawable: CubismDrawable) => Promise<Material | null>;
}
