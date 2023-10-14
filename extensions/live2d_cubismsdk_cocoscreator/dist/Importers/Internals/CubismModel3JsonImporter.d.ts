/// <reference types="./@types" />
import { Asset, Importer, VirtualAsset } from '@editor/asset-db';
export default class CubismModel3JsonImporter extends Importer {
    get version(): string;
    get name(): string;
    get assetType(): string;
    validate(asset: VirtualAsset | Asset): Promise<boolean>;
    import(asset: VirtualAsset | Asset): Promise<boolean>;
    private static _motionImportFlags;
    private static get motionImportFlags();
    static getMotionImportFlag(path: string): boolean;
    static clearMotionImportFlag(path: string): void;
}
