/// <reference types="./@types" />
import { IPanelThis } from '@builder/build-plugin';
import { ICubismLookController, IInputDump } from '../../Dump/Input/InputDumpInterface';
export declare const template = "";
export declare const $: {};
export declare function update(this: IPanelThis, dump: IInputDump<ICubismLookController>): Promise<void>;
export declare function ready(this: IPanelThis): void;
export declare function close(this: IPanelThis): void;
