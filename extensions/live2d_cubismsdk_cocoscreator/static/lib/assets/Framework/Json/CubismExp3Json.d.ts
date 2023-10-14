/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { JsonAsset } from 'cc';
import IStructLike from '../../IStructLike';
/**
 * Cubism exp3.json data.
 *
 * **Sealed class.**
 */
export default class CubismExp3Json {
    private constructor();
    /**
     * Loads a exp3.json asset.
     * @param exp3Json exp3.json to deserialize.
     * @returns Deserialized exp3.json on success; null otherwise.
     */
    static loadFrom(exp3Json: string): CubismExp3Json | null;
    /**
     * Loads a exp3.json asset.
     * @param exp3JsonAsset exp3.json to deserialize.
     * @returns Deserialized exp3.json on success; null otherwise.
     */
    static loadFromJsonAsset(exp3JsonAsset: JsonAsset): CubismExp3Json | null;
    /**
     * **Required properties**
     * - Type
     * - Parameters
     *
     * **Optional properties**
     * - FadeInTime
     * - FadeOutTime
     * @param json
     * @returns
     */
    static loadFromJson(json: any): CubismExp3Json | null;
    /** Expression Type */
    type: string;
    /** Expression FadeInTime */
    fadeInTime: number;
    /** Expression FadeOutTime */
    fadeOutTime: number;
    /** Expression Parameters */
    parameters: Array<SerializableExpressionParameter>;
}
/** Expression Parameter (struct) */
export declare class SerializableExpressionParameter implements IStructLike<SerializableExpressionParameter> {
    /** Expression Parameter Id */
    readonly id: string;
    /** Expression Parameter Value */
    readonly value: number;
    /** Expression Parameter Blend Mode */
    readonly blend: string;
    constructor(args?: {
        id?: string;
        value?: number;
        blend?: string;
    });
    copyWith(args?: {
        id?: string | null;
        value?: number;
        blend?: string | null;
    }): SerializableExpressionParameter;
    equals(other: SerializableExpressionParameter): boolean;
    strictEquals(other: SerializableExpressionParameter): boolean;
    /**
     * **Required properties**
     * - Id
     * - Value
     *
     * **Optional properties**
     * - Blend
     * @param json
     * @returns
     */
    static instantiateFromJson(json: any): SerializableExpressionParameter | undefined;
}
export declare namespace SerializableExpressionParameter {
    const DEFAULT: SerializableExpressionParameter;
}
