"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CubismTexturePickerForImportersOnly {
    constructor(iterable) {
        this.pick = this._pick.bind(this);
        this.textures = Array.from(iterable);
    }
    _pick(sender, drawable) {
        return Promise.resolve(this.textures[drawable.textureIndex]);
    }
}
exports.default = CubismTexturePickerForImportersOnly;
