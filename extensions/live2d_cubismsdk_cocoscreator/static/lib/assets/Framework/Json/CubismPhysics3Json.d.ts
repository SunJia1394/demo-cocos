/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { JsonAsset } from 'cc';
import CubismPhysicsRig from '../Physics/CubismPhysicsRig';
import type IStructLike from '../../IStructLike';
/** **Sealed class.** */
declare class CubismPhysics3Json {
    private constructor();
    /**
     * Loads a physics3.json asset.
     * @param physics3Json physics3.json to deserialize.
     * @returns Deserialized physics3.json on success; null otherwise.
     */
    static loadFrom(physics3Json: string): CubismPhysics3Json | null;
    /**
     * Loads a physics3.json asset.
     * @param physics3JsonAsset motion3.json to deserialize.
     * @returns Deserialized physics3.json on success; null otherwise.
     */
    static loadFromJsonAsset(physics3JsonAsset: JsonAsset): CubismPhysics3Json | null;
    static loadFromJson(json: any): CubismPhysics3Json | null;
    toRig(): CubismPhysicsRig;
    private readInput;
    private readOutput;
    private readParticles;
    private readNormalization;
    /** Json file format version. */
    version: number;
    /** Additional data describing physics. */
    meta: CubismPhysics3Json.SerializableMeta;
    /** TODO Document. */
    physicsSettings: CubismPhysics3Json.SerializablePhysicsSettings[] | null;
}
declare namespace CubismPhysics3Json {
    /** 2-component vector. (struct) */
    class SerializableVector2 implements IStructLike<SerializableVector2> {
        readonly x: number;
        readonly y: number;
        constructor(args?: {
            x?: number;
            y?: number;
        });
        clone(): SerializableVector2;
        copyWith(x?: number, y?: number): SerializableVector2;
        /**
         * **Required properties**
         * - X
         * - Y
         * @param json
         * @returns
         */
        static instantiateFromJson(json: any): SerializableVector2 | undefined;
        equals(other: SerializableVector2): boolean;
        strictEquals(other: SerializableVector2): boolean;
    }
    /** Normalized values. (struct) */
    class SerializableNormalizationValue implements IStructLike<SerializableNormalizationValue> {
        /** Minimum of normalization. */
        readonly minimum: number;
        /** Center of normalization range. */
        readonly default: number;
        /** Maximum of normalization. */
        readonly maximum: number;
        constructor(args?: {
            minimum?: number;
            defaultValue?: number;
            maximum?: number;
        });
        copyWith(args?: {
            minimum?: number;
            defaultValue?: number;
            maximum?: number;
        }): SerializableNormalizationValue;
        equals(other: SerializableNormalizationValue): boolean;
        strictEquals(other: SerializableNormalizationValue): boolean;
        /**
         * **Required properties**
         * - Minimum
         * - Default
         * - Maximum
         * @param json
         * @returns
         */
        static instantiateFromJson(json: any): SerializableNormalizationValue | undefined;
    }
    /** Target parameter of model. (struct) */
    class SerializableParameter implements IStructLike<SerializableParameter> {
        /** Target type. */
        readonly target: string;
        /** Parameter ID. */
        readonly id: string;
        constructor(args?: {
            target?: string;
            id?: string;
        });
        equals(other: SerializableParameter): boolean;
        strictEquals(other: SerializableParameter): boolean;
        copyWith(args?: {
            target?: string;
            id?: string;
        }): SerializableParameter;
        /**
         * **Required properties**
         * - Target
         * - Id
         * - Maximum
         * @param json
         * @returns
         */
        static instantiateFromJson(json: any): SerializableParameter | undefined;
    }
    /** TODO Document. (struct) */
    class SerializableInput implements IStructLike<SerializableInput> {
        /** Target parameter. */
        readonly source: SerializableParameter;
        /** Influence ratio of each kind. */
        readonly weight: number;
        /** Type of source. */
        readonly type: string;
        /** TODO Document. */
        readonly reflect: boolean;
        constructor(args?: {
            source?: SerializableParameter;
            weight?: number;
            type?: string;
            reflect?: boolean;
        });
        copyWith(args?: {
            source?: SerializableParameter;
            weight?: number;
            type?: string;
            reflect?: boolean;
        }): SerializableInput;
        equals(other: SerializableInput): boolean;
        strictEquals(other: SerializableInput): boolean;
        static isEquals(a: SerializableInput, b: SerializableInput): boolean;
        /**
         * **Required properties**
         * - Source
         * - Weight
         * - Type
         * - Reflect
         * @param json
         * @returns
         */
        static instantiateFromJson(json: any): SerializableInput | undefined;
    }
    /** TODO Document. (struct) */
    class SerializableOutput implements IStructLike<SerializableOutput> {
        /** Target parameter. */
        readonly destination: SerializableParameter;
        /** Index of referenced vertex. */
        readonly vertexIndex: number;
        /** Scale. */
        readonly scale: number;
        /** Influence ratio of each kind. */
        readonly weight: number;
        /** Type of destination. */
        readonly type: string;
        /** TODO Document. */
        readonly reflect: boolean;
        constructor(args?: {
            destination?: SerializableParameter;
            vertexIndex?: number;
            scale?: number;
            weight?: number;
            type?: string;
            reflect?: boolean;
        });
        equals(other: SerializableOutput): boolean;
        strictEquals(other: SerializableOutput): boolean;
        copyWith(args?: {
            destination?: SerializableParameter;
            vertexIndex?: number;
            scale?: number;
            weight?: number;
            type?: string;
            reflect?: boolean;
        }): SerializableOutput;
        static isEquals(a: SerializableOutput, b: SerializableOutput): boolean;
        /**
         * **Required properties**
         * - Destination
         * - VertexIndex
         * - Scale
         * - Weight
         * - Type
         * - Reflect
         * @param json
         * @returns
         */
        static instantiateFromJson(json: any): SerializableOutput | undefined;
    }
    /** Single vertex. (struct) */
    class SerializableVertex implements IStructLike<SerializableVertex> {
        /** Default position. */
        position: SerializableVector2;
        /** Mobility. */
        mobility: number;
        /** Delay ratio. */
        delay: number;
        /** Acceleration. */
        acceleration: number;
        /** Length. */
        radius: number;
        constructor(args?: {
            position?: SerializableVector2;
            mobility?: number;
            delay?: number;
            acceleration?: number;
            radius?: number;
        });
        equals(other: SerializableVertex): boolean;
        strictEquals(other: SerializableVertex): boolean;
        copyWith(args?: {
            position?: SerializableVector2;
            mobility?: number;
            delay?: number;
            acceleration?: number;
            radius?: number;
        }): SerializableVertex;
        static isEquals(a: SerializableVertex, b: SerializableVertex): boolean;
        /**
         * **Required properties**
         * - Position
         * - Mobility
         * - Delay
         * - Acceleration
         * - Radius
         * @param json
         * @returns
         */
        static instantiateFromJson(json: any): SerializableVertex | undefined;
    }
    /** Parameter(input value normalized). (struct) */
    class SerializableNormalization implements IStructLike<SerializableNormalization> {
        /** Normalization value of position. */
        readonly position: SerializableNormalizationValue;
        /** Normalization value of angle. */
        readonly angle: SerializableNormalizationValue;
        constructor(args?: {
            position?: SerializableNormalizationValue;
            angle?: SerializableNormalizationValue;
        });
        copyWith(args?: {
            position?: SerializableNormalizationValue;
            angle?: SerializableNormalizationValue;
        }): SerializableNormalization;
        equals(other: SerializableNormalization): boolean;
        strictEquals(other: SerializableNormalization): boolean;
        /**
         * **Required properties**
         * - Position
         * - Angle
         * @param json
         * @returns
         */
        static instantiateFromJson(json: any): SerializableNormalization | undefined;
    }
    /** Setting of physics calculation. (struct) */
    class SerializablePhysicsSettings implements IStructLike<SerializablePhysicsSettings> {
        /** TODO Document. */
        readonly id: string;
        /** Input array. */
        readonly input: SerializableInput[];
        /** Output array. */
        readonly output: SerializableOutput[];
        /** Vertices. */
        readonly vertices: SerializableVertex[];
        /** Normalization parameter of using input. */
        readonly normalization: SerializableNormalization;
        constructor(args?: {
            id?: string;
            input?: SerializableInput[];
            output?: SerializableOutput[];
            vertices?: SerializableVertex[];
            normalization?: SerializableNormalization;
        });
        copyWith(args?: {
            id?: string;
            input?: SerializableInput[];
            output?: SerializableOutput[];
            vertices?: SerializableVertex[];
            normalization?: SerializableNormalization;
        }): SerializablePhysicsSettings;
        equals(other: SerializablePhysicsSettings): boolean;
        strictEquals(other: SerializablePhysicsSettings): boolean;
        /**
         * **Required properties**
         * - Id
         * - Input
         * - Vertices
         * - Output
         * - Normalization
         * @param json
         * @returns
         */
        static instantiateFromJson(json: any): SerializablePhysicsSettings | undefined;
    }
    /** Additional data describing physics. (struct) */
    class SerializableMeta implements IStructLike<SerializableMeta> {
        /** Number of physics settings. */
        readonly physicsSettingCount: number;
        /** Total number of input parameters. */
        readonly totalInputCount: number;
        /** Total number of output parameters. */
        readonly totalOutputCount: number;
        /** Total number of vertices. */
        readonly totalVertexCount: number;
        /** TODO Document. */
        readonly effectiveForces: SerializableEffectiveForces;
        /**
         * [Optional] Fps of physics operations.
         * If the value is not set to Json, it will change according to the application's operating FPS.
         */
        readonly fps: number;
        constructor(args?: {
            physicsSettingCount?: number;
            totalInputCount?: number;
            totalOutputCount?: number;
            totalVertexCount?: number;
            effectiveForces?: SerializableEffectiveForces;
            fps?: number;
        });
        copyWith(args?: {
            physicsSettingCount?: number;
            totalInputCount?: number;
            totalOutputCount?: number;
            totalVertexCount?: number;
            effectiveForces?: SerializableEffectiveForces;
            fps?: number;
        }): SerializableMeta;
        equals(other: SerializableMeta): boolean;
        strictEquals(other: SerializableMeta): boolean;
        /**
         * **Required properties**
         * - PhysicsSettingCount
         * - TotalInputCount
         * - TotalOutputCount
         * - VertexCount
         * - EffectiveForces
         * - PhysicsDictionary (for Unity 未実装)
         *
         * **Optional properties**
         * - Fps (for Unity 未実装)
         * @param json
         * @returns
         */
        static instantiateFromJson(json: any): SerializableMeta | undefined;
    }
    /** TODO Document. (struct) */
    class SerializableEffectiveForces implements IStructLike<SerializableEffectiveForces> {
        /** Gravity. */
        readonly gravity: SerializableVector2;
        /** Wind. (Not in use) */
        readonly wind: SerializableVector2;
        constructor(args?: {
            gravity?: SerializableVector2;
            wind?: SerializableVector2;
        });
        copyWith(args?: {
            gravity?: SerializableVector2;
            wind?: SerializableVector2;
        }): SerializableEffectiveForces;
        /**
         * **Required properties**
         * - Gravity
         * - Wind
         * @param json
         * @returns
         */
        static instantiateFromJson(json: any): SerializableEffectiveForces | undefined;
        equals(other: SerializableEffectiveForces): boolean;
        strictEquals(other: SerializableEffectiveForces): boolean;
    }
    namespace SerializableVector2 {
        const DEFAULT: SerializableVector2;
    }
    namespace SerializableEffectiveForces {
        const DEFAULT: SerializableEffectiveForces;
    }
    namespace SerializableMeta {
        const DEFAULT: SerializableMeta;
    }
    namespace SerializableNormalizationValue {
        const DEFAULT: SerializableNormalizationValue;
    }
    namespace SerializableParameter {
        const DEFAULT: SerializableParameter;
    }
    namespace SerializableInput {
        const DEFAULT: SerializableInput;
    }
    namespace SerializableVertex {
        const DEFAULT: SerializableVertex;
    }
    namespace SerializableNormalization {
        const DEFAULT: SerializableNormalization;
    }
    namespace SerializablePhysicsSettings {
        const DEFAULT: SerializablePhysicsSettings;
    }
}
export default CubismPhysics3Json;
