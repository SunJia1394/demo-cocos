/// <reference types="./@types" />
import { IPanelThis } from '@builder/build-plugin';
import { ICubismRenderer, IInputDump } from '../../Dump/Input/InputDumpInterface';
export declare const template = "";
export declare const $: {};
export declare function update(this: IPanelThis, dump: IInputDump<ICubismRenderer>): Promise<void>;
export declare function ready(this: any): void;
export declare function close(this: any): void;
