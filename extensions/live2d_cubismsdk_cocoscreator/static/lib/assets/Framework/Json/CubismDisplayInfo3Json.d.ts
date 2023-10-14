/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import type IStructLike from '../../IStructLike';
/**
 * Handles display info from cdi3.json.
 *
 * **Sealed class.**
 */
export default class CubismDisplayInfo3Json {
    private constructor();
    /**
     * Loads a cdi3.json.
     * @param cdi3Json cdi3.json to deserialize.
     * @returns Deserialized cdi3.json on success; null otherwise.
     */
    static loadFrom(cdi3Json: string): CubismDisplayInfo3Json | null;
    /**
     * **Required properties**
     * - Version
     * - ParameterGroups
     * - Parts
     *
     * **Optional properties**
     * - Parameters
     *
     * @param json
     * @returns
     */
    static loadFromJson(json: any): CubismDisplayInfo3Json | null;
    /** Json file format version. */
    version: number;
    /** Array of model parameters. */
    parameters: Array<SerializableParameters>;
    /** Array of ParameterGroups. */
    parameterGroups: Array<SerializableParameterGroups>;
    /** Array of Parts. */
    parts: Array<SerializableParts>;
}
/** (struct) */
export declare class SerializableParameters implements IStructLike<SerializableParameters> {
    /** The ID of the parameter. */
    readonly id: string;
    /** The Group ID of the parameter. */
    readonly groupId: string;
    /** The Name of the parameter. */
    readonly name: string;
    constructor(args?: {
        id?: string;
        groupId?: string;
        name?: string;
    });
    copyWith(args?: {
        id?: string;
        groupid?: string;
        name?: string;
    }): SerializableParameters;
    equals(other: SerializableParameters): boolean;
    strictEquals(other: SerializableParameters): boolean;
    /**
     * **Required properties**
     * - Id
     * - GroupId
     * - Name
     * @param json
     * @returns
     */
    static instantiateFromJson(json: any): SerializableParameters | undefined;
}
/** (struct) */
export declare class SerializableParameterGroups implements IStructLike<SerializableParameterGroups> {
    /** The ID of the parameter. */
    readonly id: string;
    /** The Group ID of the parameter. */
    readonly groupId: string;
    /** The Name of the parameter. */
    readonly name: string;
    constructor(args?: {
        id?: string;
        groupId?: string;
        name?: string;
    });
    copyWith(args?: {
        id?: string;
        groupid?: string;
        name?: string;
    }): SerializableParameterGroups;
    equals(other: SerializableParameterGroups): boolean;
    strictEquals(other: SerializableParameterGroups): boolean;
    /**
     * **Required properties**
     * - Id
     * - GroupId
     * - Name
     * @param json
     * @returns
     */
    static instantiateFromJson(json: any): SerializableParameterGroups | undefined;
}
/** (struct) */
export declare class SerializableParts implements IStructLike<SerializableParts> {
    /** The ID of the part. */
    readonly id: string;
    /** The Name of the part. */
    readonly name: string;
    constructor(args?: {
        id?: string;
        name?: string;
    });
    copyWith(args?: {
        id?: string;
        name?: string;
    }): SerializableParts;
    equals(other: SerializableParts): boolean;
    strictEquals(other: SerializableParts): boolean;
    /**
     * **Required properties**
     * - Id
     * - Name
     * @param json
     * @returns
     */
    static instantiateFromJson(json: any): SerializableParts | undefined;
}
export declare namespace SerializableParameters {
    const DEFAULT: SerializableParameters;
}
export declare namespace SerializableParameterGroups {
    const DEFAULT: SerializableParameterGroups;
}
export declare namespace SerializableParts {
    const DEFAULT: SerializableParts;
}
