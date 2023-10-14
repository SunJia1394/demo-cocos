/// <reference types="./@types" />
import { IPanelThis } from '@builder/build-plugin';
export declare const template = "";
export declare const $: {};
interface Asset {
    displayName: string;
    file: string;
    imported: boolean;
    importer: string;
    invalid: boolean;
    isDirectory: boolean;
    library: {
        [extname: string]: string;
    };
    name: string;
    url: string;
    uuid: string;
    visible: boolean;
    subAssets: {
        [id: string]: Asset;
    };
}
interface Meta {
    files: string[];
    imported: boolean;
    importer: string;
    subMetas: {
        [id: string]: Meta;
    };
    userData: {
        [key: string]: any;
    };
    uuid: string;
    ver: string;
}
export declare function update(this: IPanelThis, assetList: Asset[], metaList: Meta[]): void;
export declare function ready(this: IPanelThis): void;
export declare function close(this: IPanelThis): void;
export {};
