/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
declare namespace JsonParseUtils {
    function parse(value: string): any;
    function isBoolean(value: any): value is boolean;
    function isNumber(value: any): value is number;
    function isString(value: any): value is string;
    function isObject(value: any): value is object;
    function asBoolean(value: any): boolean | undefined;
    function asNumber(value: any): number | undefined;
    function asString(value: any): string | undefined;
    function asObject(value: any): object | undefined;
    function asArray(value: any): any[] | undefined;
    function getBoolean(obj: object, key: PropertyKey): boolean | undefined;
    function getNumber(obj: object, key: PropertyKey): number | undefined;
    function getString(obj: object, key: PropertyKey): string | undefined;
    function getObject(obj: object, key: PropertyKey): object | undefined;
    function getArray(obj: object, key: PropertyKey): any[] | undefined;
    function arrayedInstantiateFromJson<T>(inData: unknown, func: (json: any) => T | undefined): T[] | undefined;
}
export default JsonParseUtils;
