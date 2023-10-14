/// <reference types="./@types" />
import type { Texture2D } from 'cc';
import type CubismDrawable from '../static/assets/Core/CubismDrawable';
import type CubismModel3Json from '../static/assets/Framework/Json/CubismModel3Json';
export default class CubismTexturePickerForImportersOnly {
    private readonly textures;
    constructor(iterable: Iterable<Texture2D | null> | ArrayLike<Texture2D | null>);
    private _pick;
    pick: (sender: CubismModel3Json, drawable: CubismDrawable) => Promise<Texture2D | null>;
}
