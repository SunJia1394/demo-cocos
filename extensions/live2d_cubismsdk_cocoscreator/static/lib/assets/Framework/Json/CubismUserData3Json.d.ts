/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { JsonAsset } from 'cc';
import CubismUserDataBody from '../UserData/CubismUserDataBody';
import CubismUserDataTargetType from '../UserData/CubismUserDataTargetType';
import type IStructLike from '../../IStructLike';
/**
 * Handles user data from cdi3.json.
 *
 * **Sealed class.**
 */
declare class CubismUserData3Json {
    private constructor();
    /**
     * Loads a cdi3.json asset.
     * @param userData3Json  cdi3.json to deserialize.
     * @returns Deserialized cdi3.json on success; null otherwise.
     */
    static loadFrom(userData3Json: string): CubismUserData3Json | null;
    /**
     * Loads a cdi3.json asset.
     * @param userData3JsonAsset cdi3.json to deserialize.
     * @returns Deserialized cdi3.json on success; null otherwise.
     */
    static loadFromJsonAsset(userData3JsonAsset: JsonAsset): CubismUserData3Json | null;
    static loadFromJson(json: any): CubismUserData3Json | null;
    /**
     * Makes CubismUserDataBody array that was selected by CubismUserDataTargetType.
     * @param targetType Target object type.
     * @returns CubismUserDataBody array. Selected by CubismUserDataTargetType.
     */
    toBodyArray(targetType: CubismUserDataTargetType): CubismUserDataBody[];
    /** Json file format version. */
    version: number;
    /** Additional data describing physics. */
    meta: CubismUserData3Json.SerializableMeta;
    /** Array of user data. */
    userData: CubismUserData3Json.SerializableUserData[] | null;
}
declare namespace CubismUserData3Json {
    /** Additional data describing user data. (struct) */
    class SerializableMeta implements IStructLike<SerializableMeta> {
        /** Number of user data. */
        readonly userDataCount: number;
        /** Total number of user data. */
        readonly totalUserDataCount: number;
        constructor(args?: {
            userDataCount?: number;
            totalUserDataCount?: number;
        });
        copyWith(args?: {
            userDataCount?: number;
            totalUserDataCount?: number;
        }): SerializableMeta;
        equals(other: SerializableMeta): boolean;
        strictEquals(other: SerializableMeta): boolean;
        /**
         * **Required properties**
         * - UserDataCount
         * - TotalUserDataSize
         * @param json
         * @returns
         */
        static instantiateFromJson(json: any): SerializableMeta | undefined;
    }
    /** User data. (struct) */
    class SerializableUserData implements IStructLike<SerializableUserData> {
        /** Type of target object. */
        readonly target: string;
        /** Name of target object. */
        readonly id: string;
        /** Value. */
        readonly value: string;
        constructor(args?: {
            target?: string;
            id?: string;
            value?: string;
        });
        equals(other: SerializableUserData): boolean;
        strictEquals(other: SerializableUserData): boolean;
        copyWith(args?: {
            target?: string;
            id?: string;
            value?: string;
        }): SerializableUserData;
        /**
         * **Required properties**
         * - Target
         * - Id
         * - Value
         * @param json
         * @returns
         */
        static instantiateFromJson(json: any): SerializableUserData | undefined;
    }
    namespace SerializableUserData {
        const DEFAULT: SerializableUserData;
    }
    namespace SerializableMeta {
        const DEFAULT: SerializableMeta;
    }
}
export default CubismUserData3Json;
