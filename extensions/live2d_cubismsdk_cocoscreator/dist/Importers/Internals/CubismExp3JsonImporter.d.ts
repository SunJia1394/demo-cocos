/// <reference types="./@types" />
import { Asset, Importer, VirtualAsset } from '@editor/asset-db';
export default class CubismExp3JsonImporter extends Importer {
    get version(): string;
    get name(): string;
    get assetType(): string;
    validate(asset: VirtualAsset | Asset): Promise<boolean>;
    import(asset: VirtualAsset | Asset): Promise<boolean>;
}
