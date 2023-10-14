/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Asset, Material, Texture2D } from 'cc';
import CubismMoc from '../../Core/CubismMoc';
import CubismModel from '../../Core/CubismModel';
import CubismExp3Json from './CubismExp3Json';
import CubismPose3Json from './CubismPose3Json';
import type CubismExpressionList from '../Expression/CubismExpressionList';
import type CubismParameter from '../../Core/CubismParameter';
import type CubismUserDataBody from '../UserData/CubismUserDataBody';
import type CubismDrawable from '../../Core/CubismDrawable';
import type IStructLike from '../../IStructLike';
declare namespace CubismModel3Json {
    /**
     * Handles the loading of assets.
     *
     * @param assetType The asset type to load.
     * @param assetPath The path to the asset.
     * @returns
     */
    type LoadAssetAtPathHandler<T extends Asset = Asset> = (assetPath: string, constructor: new (...args: any[]) => T) => Promise<T | null>;
    /**
     * Picks a Material for a CubismDrawable.
     *
     * @param sender Event source.
     * @param drawable Drawable to pick for.
     * @returns Picked material.
     */
    type MaterialPicker = (sender: CubismModel3Json, drawable: CubismDrawable) => Promise<Material | null>;
    /**
     * Picks a Material for a CubismDrawable.
     *
     * @param sender Event source.
     * @param drawable Drawable to pick for.
     * @returns Picked texture.
     */
    type TexturePicker = (sender: CubismModel3Json, drawable: CubismDrawable) => Promise<Texture2D | null>;
}
/**
 * Exposes moc3.json asset data.
 *
 * **Sealed class.**
 */
declare class CubismModel3Json {
    /** Makes construction only possible through factories. */
    private constructor();
    /**
     * Loads a model.json asset.
     * @param assetPath The path to the asset.
     * @param loadAssetAtPath Handler for loading assets.
     * @param loadBufferAssetAtPath Handler for loading assets.
     * @returns The CubismModel3Json on success; null otherwise.
     */
    static loadAtPath(assetPath: string, loadAssetAtPath?: CubismModel3Json.LoadAssetAtPathHandler): Promise<CubismModel3Json | null>;
    /**
     * **Required properties**
     * Version
     * FileReferences
     *
     * **Optional properties**
     * Groups
     * HitAreas
     * Layout
     * @param json
     * @returns
     */
    static loadFromJson(json: object): CubismModel3Json | null;
    private _assetPath;
    /** Path to this. */
    get assetPath(): string | null;
    private set assetPath(value);
    private _loadAssetAtPath;
    /** Method for loading assets. */
    loadAssetAtPath<T extends Asset>(assetPath: string, constructor: new (...args: any[]) => T): Promise<T | null>;
    private setLoadAssetAtPath;
    /** The motion3.json format version. */
    version: number;
    /** The file references. */
    fileReferences: CubismModel3Json.SerializableFileReferences;
    /** Groups. */
    groups: CubismModel3Json.SerializableGroup[];
    /** Hit areas. */
    hitAreas: CubismModel3Json.SerializableHitArea[];
    /**
     * The contents of the referenced moc3 asset.
     *
     * The contents isn't cached internally.
     */
    getMoc3(): Promise<ArrayBuffer | null>;
    /** CubismPose3Json backing field. */
    private _pose3Json;
    /** The contents of pose3.json asset. */
    getPose3Json(): Promise<CubismPose3Json | null>;
    /** Expression3Jsons backing field. */
    private _expression3Jsons;
    /**
     * The referenced expression assets.
     *
     * The references aren't cached internally.
     */
    getExpression3Jsons(): Promise<(CubismExp3Json | null)[] | null>;
    /** The contents of physics3.json asset. */
    getPhysics3Json(): Promise<object | null>;
    getUserData3Json(): Promise<object | null>;
    /** The contents of cdi3.json asset. */
    getDisplayInfo3Json(): Promise<object | null>;
    /** Textures backing field. */
    private _textures;
    /**
     * The referenced texture assets.
     *
     * The references aren't cached internally.
     */
    getTexture(index: number): Promise<Texture2D | null>;
    /**
     * Instantiates a model source and a model.
     * @param pickMaterial The material mapper to use.
     * @param pickTexture The texture mapper to use.
     * @param shouldImportAsOriginalWorkflow Should import as original workflow.
     * @returns The instantiated model on success; null otherwise.
     */
    toModel(args?: {
        pickMaterial?: CubismModel3Json.MaterialPicker;
        pickTexture?: CubismModel3Json.TexturePicker;
        shouldImportAsOriginalWorkflow?: boolean;
    }): Promise<CubismModel | null>;
    /**
     * Type-safely loads an asset.
     *
     * @param referencedFile Path to asset.
     * @returns The asset on success; null otherwise.
     */
    private loadJson;
    /**
     * Type-safely loads an asset.
     *
     * @param referencedFile Path to asset.
     * @returns The asset on success; null otherwise.
     */
    private loadArrayBuffer;
    /**
     * Type-safely loads an asset.
     *
     * @param referencedFile Path to asset.
     * @returns The asset on success; null otherwise.
     */
    private loadTexture;
    /**
     * Builtin method for loading assets.
     * @param assetPath Path to asset.
     * @returns The asset on success; null otherwise.
     */
    private static builtinAssetAtPath;
    /**
     * Checks whether the parameter is an eye blink parameter.
     *
     * (forUnity private method)
     * @param parameter Parameter to check.
     * @param groupName Name of group to query for.
     * @returns true if parameter is an eye blink parameter; false otherwise.
     */
    isParameterInGroup(parameter: CubismParameter, groupName: string): boolean;
    /**
     * Get body index from body array by Id.
     *
     * (forUnity private method)
     * @param bodies Target body array.
     * @param id Id for find.
     * @returns Array index if Id found; -1 otherwise.
     */
    getBodyIndexById(bodies: readonly CubismUserDataBody[], id: string): number;
}
declare namespace CubismModel3Json {
    /** File references data. (struct) */
    class SerializableFileReferences implements IStructLike<SerializableFileReferences> {
        /** Relative path to the moc3 asset. */
        readonly moc: string;
        /** Relative paths to texture assets. */
        readonly textures: string[];
        /** Relative path to the pose3.json. */
        readonly pose: string;
        /** Relative path to the expression asset. */
        readonly expressions: SerializableExpression[];
        /** Relative path to the pose motion3.json. */
        readonly motions: SerializableMotions;
        /** Relative path to the physics asset. */
        readonly physics: string;
        /** Relative path to the user data asset. */
        readonly userData: string;
        /** Relative path to the cdi3.json. */
        readonly displayInfo: string;
        constructor(args?: {
            moc?: string;
            textures?: string[];
            pose?: string;
            expressions?: SerializableExpression[];
            motions?: SerializableMotions;
            physics?: string;
            userData?: string;
            displayInfo?: string;
        });
        copyWith(args?: {
            moc?: string;
            textures?: string[];
            pose?: string;
            expressions?: SerializableExpression[];
            motions?: SerializableMotions;
            physics?: string;
            userData?: string;
            displayInfo?: string;
        }): SerializableFileReferences;
        equals(other: SerializableFileReferences): boolean;
        strictEquals(other: SerializableFileReferences): boolean;
        /**
         * **Required properties**
         * - Moc
         * - Textures
         *
         * **Optional properties**
         * - Pose
         * - Expressions
         * - Motions
         * - Physics
         * - UserData
         * - DisplayInfo
         * @param json
         * @returns
         */
        static instantiateFromJson(json: object): SerializableFileReferences | null;
    }
    /** Group data. (struct) */
    class SerializableGroup implements IStructLike<SerializableGroup> {
        /** Target type. */
        readonly target: string;
        /** Group name. */
        readonly name: string;
        /** Referenced IDs. */
        readonly ids: string[];
        constructor(args?: {
            target?: string;
            name?: string;
            ids?: string[];
        });
        copyWith(args?: {
            target?: string;
            name?: string;
            ids?: string[];
        }): SerializableGroup;
        equals(other: SerializableGroup): boolean;
        strictEquals(other: SerializableGroup): boolean;
        /**
         * **Required properties**
         * - Target
         * - Name
         * - Ids
         * @param json
         * @returns
         */
        static instantiateFromJson(json: object): SerializableGroup | null;
    }
    /** Expression data. (struct) */
    class SerializableExpression implements IStructLike<SerializableExpression> {
        /** Expression Name. */
        readonly name: string;
        /** Expression File. */
        readonly file: string;
        /** Expression FadeInTime. */
        readonly fadeInTime: number;
        /** Expression FadeOutTime. */
        readonly fadeOutTime: number;
        constructor(args?: {
            name?: string;
            file?: string;
            fadeInTime?: number;
            fadeOutTime?: number;
        });
        copyWith(args?: {
            name?: string;
            file?: string;
            fadeInTime?: number;
            fadeOutTime?: number;
        }): SerializableExpression;
        equals(other: SerializableExpression): boolean;
        strictEquals(other: SerializableExpression): boolean;
        static isEquals(a: SerializableExpression, b: SerializableExpression): boolean;
        /**
         * **Required properties**
         * - Name
         * - File
         *
         * **Optional properties**
         * - FadeInTime
         * - FadeOutTime
         * @param json
         * @returns
         */
        static instantiateFromJson(json: object): SerializableExpression | null;
    }
    namespace SerializableExpressions {
        /**
         *
         * @param json
         * @returns
         */
        function instantiateFromJson(json: any[]): SerializableExpression[] | null;
    }
    /** Motion data. (struct) */
    class SerializableMotions implements IStructLike<SerializableMotions> {
        readonly motions: Map<string, SerializableMotion[]>;
        /** Motion group names. */
        readonly groupNames: string[];
        get(key: string): SerializableMotion[] | null;
        constructor(args?: {
            motions?: Map<string, SerializableMotion[]>;
        });
        copyWith(args?: {
            motions?: Map<string, SerializableMotion[]>;
        }): SerializableMotions;
        equals(other: SerializableMotions): boolean;
        strictEquals(other: SerializableMotions): boolean;
        /**
         *
         * @param json
         * @returns
         */
        static instantiateFromJson(json: object): SerializableMotions | null;
    }
    /** Motion data. (struct) */
    class SerializableMotion implements IStructLike<SerializableMotion> {
        /** File path. */
        readonly file: string;
        /** Sound path. */
        readonly sound: string;
        /** Fade in time. */
        readonly fadeInTime: number;
        /** Fade out time. */
        readonly fadeOutTime: number;
        constructor(args?: {
            file?: string;
            sound?: string;
            fadeInTime?: number;
            fadeOutTime?: number;
        });
        copyWith(args?: {
            file?: string;
            sound?: string;
            fadeInTime?: number;
            fadeOutTime?: number;
        }): SerializableMotion;
        equals(other: SerializableMotion): boolean;
        strictEquals(other: SerializableMotion): boolean;
        /**
         * **Required properties**
         * - File
         *
         * **Optional properties**
         * - FadeOutTime
         * - FadeInTime
         * - Sound
         * @param json
         * @returns
         */
        static instantiateFromJson(json: object): SerializableMotion | null;
    }
    /** Hit Area. (struct) */
    class SerializableHitArea implements IStructLike<SerializableHitArea> {
        /** Hit area name. */
        readonly name: string;
        /** Hit area id. */
        readonly id: string;
        constructor(args?: {
            name?: string;
            id?: string;
        });
        copyWith(args?: {
            name?: string;
            id?: string;
        }): SerializableHitArea;
        equals(other: SerializableHitArea): boolean;
        strictEquals(other: SerializableHitArea): boolean;
        /**
         * **Required properties**
         * - Name
         * - Id
         * @param json
         * @returns
         */
        static instantiateFromJson(json: object): SerializableHitArea | null;
    }
    namespace SerializableGroup {
        const DEFAULT: SerializableGroup;
    }
    namespace SerializableExpression {
        const DEFAULT: SerializableExpression;
    }
    namespace SerializableMotions {
        const DEFAULT: SerializableMotions;
    }
    namespace SerializableMotion {
        const DEFAULT: SerializableMotion;
    }
    namespace SerializableHitArea {
        const DEFAULT: SerializableHitArea;
    }
}
export default CubismModel3Json;
export declare namespace CubismModelNodeGenerator {
    function generateModel(args: {
        model3Json: CubismModel3Json;
        moc: CubismMoc;
        materialPicker: CubismModel3Json.MaterialPicker;
        texturePicker: CubismModel3Json.TexturePicker;
        displayInfo3Json?: object | null;
        physics3Json?: object | null;
        userData3Json?: object | null;
        pose3Json?: object | null;
        expList?: CubismExpressionList | null;
        shouldImportAsOriginalWorkflow?: boolean;
    }): Promise<CubismModel | null>;
}
