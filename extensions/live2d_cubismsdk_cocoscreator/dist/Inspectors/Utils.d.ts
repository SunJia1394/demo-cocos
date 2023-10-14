/// <reference types="./@types/cocos.html.analyzed" />
/// <reference types="./@types" />
import type IQueryNodeResult from '../Dump/Query/IQueryNodeResult';
import type { IEnumItem, IInputDumpValueBase } from '../Dump/Input/InputDumpInterface';
export declare function getComponentPath(self: IQueryNodeResult, uuid: string): string | null;
export interface IProperty {
    default: any;
    extends: [];
    group: {
        id: string;
        name: string;
    };
    name: string;
    path: string;
    readonly: boolean;
    type: string;
    value: any;
    visible: boolean;
}
export declare function createPropBase(create: CreateElementFunction, name: string): HTMLUiPropElement;
export declare function selectAddEnumListToOptions(select: HTMLElement, enumList: IEnumItem[]): void;
export declare function requestSetProperty(uuid: string, path: string, dump: {
    value: {
        uuid: string;
    };
    type: 'cc.Asset' | 'cc.Node' | 'cc.Component';
}): Promise<boolean>;
export declare function requestSetProperty(uuid: string, path: string, dump: {
    value: number;
    type: 'Float' | 'Enum';
}): Promise<boolean>;
export declare function requestSetProperty(uuid: string, path: string, dump: {
    value: any;
    type: string;
}): Promise<boolean>;
export declare function getIntegerValue(target: object): number | undefined;
export declare function getFloatValue(target: object): number | undefined;
export declare function getStringValue(target: object): string | undefined;
export type CreateElementFunction = {
    <K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions | undefined): HTMLElementTagNameMap[K];
    <K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K, options?: ElementCreationOptions | undefined): HTMLElementDeprecatedTagNameMap[K];
    (tagName: string, options?: ElementCreationOptions | undefined): HTMLElement;
    (tagName: 'webview'): Electron.WebviewTag;
};
export declare class HTMLObjectFieldElement extends HTMLElement {
    private tab;
    private component;
    private node;
    private asset;
    private _selected;
    get selected(): HTMLObjectFieldElement.Type;
    set selected(value: HTMLObjectFieldElement.Type);
    private _value;
    get value(): {
        uuid: string;
        type: HTMLObjectFieldElement.Type;
    } | null;
    set value(value: {
        uuid: string;
        type: HTMLObjectFieldElement.Type;
    } | null);
    constructor();
    private connectedCallback;
    private disconnectedCallback;
    private generateEventListenerFunc;
    private static generateValueChangeEvent;
}
export declare namespace HTMLObjectFieldElement {
    enum Type {
        component = 0,
        node = 1,
        asset = 2
    }
}
export declare abstract class InspectorGuiHelper {
    protected parent: HTMLElement;
    constructor(parent: HTMLElement);
    protected create(tagName: 'cubism-object-field', options?: ElementCreationOptions | undefined): HTMLObjectFieldElement;
    protected create<K extends keyof CocosHTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions | undefined): CocosHTMLElementTagNameMap[K];
    protected create<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions | undefined): HTMLElementTagNameMap[K];
    protected create<K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K, options?: ElementCreationOptions | undefined): HTMLElementDeprecatedTagNameMap[K];
    protected create(tagName: string, options?: ElementCreationOptions | undefined): HTMLElement;
    protected create(tagName: 'webview'): Electron.WebviewTag;
    protected createPropBase(name: string): HTMLUiPropElement;
}
export declare abstract class InspectorComponentGuiHelper extends InspectorGuiHelper {
    protected abstract values: IInputDumpValueBase;
    constructor(parent: HTMLElement);
}
export interface IElementCreator {
    createElement(tagName: 'cubism-object-field', options?: ElementCreationOptions | undefined): HTMLObjectFieldElement;
    createElement<K extends keyof CocosHTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions | undefined): CocosHTMLElementTagNameMap[K];
    createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions | undefined): HTMLElementTagNameMap[K];
    createElement<K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K, options?: ElementCreationOptions | undefined): HTMLElementDeprecatedTagNameMap[K];
    createElement(tagName: string, options?: ElementCreationOptions | undefined): HTMLElement;
    createElement(tagName: 'webview'): Electron.WebviewTag;
}
