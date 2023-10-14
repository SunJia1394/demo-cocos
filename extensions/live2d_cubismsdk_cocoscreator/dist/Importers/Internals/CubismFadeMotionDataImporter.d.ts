/// <reference types="./@types" />
import { Asset, Importer, VirtualAsset } from '@editor/asset-db';
declare const EXTENSION = "fade.asset";
export default class CubismFadeMotionDataImporter extends Importer {
    static extension: typeof EXTENSION;
    get version(): string;
    get name(): string;
    get assetType(): string;
    validate(asset: VirtualAsset | Asset): Promise<boolean>;
    import(asset: VirtualAsset | Asset): Promise<boolean>;
}
export {};
