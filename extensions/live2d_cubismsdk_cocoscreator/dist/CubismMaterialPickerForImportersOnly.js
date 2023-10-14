"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CubismMaterialPickerForImportersOnly {
    constructor(unlit, unlitAdditive, unlitAdditiveCulling, unlitAdditiveMasked, unlitAdditiveMaskedCulling, unlitAdditiveMaskedInverted, unlitAdditiveMaskedInvertedCulling, unlitCulling, unlitMasked, unlitMaskedCulling, unlitMaskedInverted, unlitMaskedInvertedCulling, unlitMultiply, unlitMultiplyCulling, unlitMultiplyMasked, unlitMultiplyMaskedCulling, unlitMultiplyMaskedInverted, unlitMultiplyMaskedInvertedCulling) {
        this.pick = this.__pick.bind(this);
        this.unlit = unlit;
        this.unlitAdditive = unlitAdditive;
        this.unlitAdditiveCulling = unlitAdditiveCulling;
        this.unlitAdditiveMasked = unlitAdditiveMasked;
        this.unlitAdditiveMaskedCulling = unlitAdditiveMaskedCulling;
        this.unlitAdditiveMaskedInverted = unlitAdditiveMaskedInverted;
        this.unlitAdditiveMaskedInvertedCulling = unlitAdditiveMaskedInvertedCulling;
        this.unlitCulling = unlitCulling;
        this.unlitMasked = unlitMasked;
        this.unlitMaskedCulling = unlitMaskedCulling;
        this.unlitMaskedInverted = unlitMaskedInverted;
        this.unlitMaskedInvertedCulling = unlitMaskedInvertedCulling;
        this.unlitMultiply = unlitMultiply;
        this.unlitMultiplyCulling = unlitMultiplyCulling;
        this.unlitMultiplyMasked = unlitMultiplyMasked;
        this.unlitMultiplyMaskedCulling = unlitMultiplyMaskedCulling;
        this.unlitMultiplyMaskedInverted = unlitMultiplyMaskedInverted;
        this.unlitMultiplyMaskedInvertedCulling = unlitMultiplyMaskedInvertedCulling;
    }
    _pick(_sender, drawable) {
        if (drawable.isDoubleSided) {
            if (drawable.blendAdditive) {
                return drawable.isMasked
                    ? drawable.isInverted
                        ? this.unlitAdditiveMaskedInverted
                        : this.unlitAdditiveMasked
                    : this.unlitAdditive;
            }
            if (drawable.multiplyBlend) {
                return drawable.isMasked
                    ? drawable.isInverted
                        ? this.unlitMultiplyMaskedInverted
                        : this.unlitMultiplyMasked
                    : this.unlitMultiply;
            }
            return drawable.isMasked
                ? drawable.isInverted
                    ? this.unlitMaskedInverted
                    : this.unlitMasked
                : this.unlit;
        }
        if (drawable.blendAdditive) {
            return drawable.isMasked
                ? drawable.isInverted
                    ? this.unlitAdditiveMaskedInvertedCulling
                    : this.unlitAdditiveMaskedCulling
                : this.unlitAdditiveCulling;
        }
        if (drawable.multiplyBlend) {
            return drawable.isMasked
                ? drawable.isInverted
                    ? this.unlitMultiplyMaskedInvertedCulling
                    : this.unlitMultiplyMaskedCulling
                : this.unlitMultiplyCulling;
        }
        return drawable.isMasked
            ? drawable.isInverted
                ? this.unlitMaskedInvertedCulling
                : this.unlitMaskedCulling
            : this.unlitCulling;
    }
    __pick(sender, drawable) {
        return Promise.resolve(this._pick(sender, drawable));
    }
}
exports.default = CubismMaterialPickerForImportersOnly;
