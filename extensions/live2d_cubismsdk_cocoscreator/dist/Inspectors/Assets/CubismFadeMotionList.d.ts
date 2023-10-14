/// <reference types="./@types" />
import { IPanelThis } from '@builder/build-plugin';
import { Asset, Meta } from '../InspectorInterface';
export declare const template = "";
export declare const $: {};
export declare function update(this: IPanelThis, assetList: Asset[], metaList: Meta[]): void;
export declare function ready(this: IPanelThis): void;
export declare function close(this: IPanelThis): void;
