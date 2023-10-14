/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Proprietary Software license
 * that can be found at https://www.live2d.com/eula/live2d-proprietary-software-license-agreement_en.html.
 */
type ByteArrayPtr = number;
type IntArrayPtr = number;
type FloatArrayPtr = number;
type StringArrayPtr = number;
type FloatArrayPtrArrsyPtr = number;
type MocPtr = number;
type ModelPtr = number;
type MemoryPtr = number;
export declare function getCubismCoreVersionString(): string;
export declare namespace Live2DCubismCore {
    namespace _csm {
        function getVersion(): number;
        function getLatestMocVersion(): number;
        function getMocVersion(moc: MocPtr): number;
        function getSizeofModel(moc: MocPtr): number;
        function hasMocConsistency(memory: any, mocSize: number): number;
        function reviveMocInPlace(memory: MemoryPtr, mocSize: number): Moc;
        function initializeModelInPlace(moc: MocPtr, memory: MemoryPtr, modelSize: number): number;
        function getParameterCount(model: ModelPtr): number;
        function getParameterIds(model: ModelPtr): StringArrayPtr;
        function getParameterMinimumValues(model: ModelPtr): FloatArrayPtr;
        function getParameterMaximumValues(model: ModelPtr): FloatArrayPtr;
        function getParameterDefaultValues(model: ModelPtr): FloatArrayPtr;
        function getParameterValues(model: ModelPtr): FloatArrayPtr;
        function getParameterKeyCounts(model: ModelPtr): IntArrayPtr;
        function getParameterKeyValues(model: ModelPtr): FloatArrayPtrArrsyPtr;
        function getParameterTypes(model: ModelPtr): number;
        function getPartCount(model: ModelPtr): number;
        function getPartIds(model: ModelPtr): StringArrayPtr;
        function getPartOpacities(model: ModelPtr): FloatArrayPtr;
        function getPartParentPartIndices(model: ModelPtr): IntArrayPtr;
        function getDrawableCount(model: ModelPtr): number;
        function getDrawableIds(model: ModelPtr): StringArrayPtr;
        function getDrawableConstantFlags(model: ModelPtr): ByteArrayPtr;
        function getDrawableDynamicFlags(model: ModelPtr): ByteArrayPtr;
        function getDrawableTextureIndices(model: ModelPtr): IntArrayPtr;
        function getDrawableDrawOrders(model: ModelPtr): IntArrayPtr;
        function getDrawableRenderOrders(model: ModelPtr): IntArrayPtr;
        function getDrawableOpacities(model: ModelPtr): FloatArrayPtr;
        function getDrawableMaskCounts(model: ModelPtr): IntArrayPtr;
        function getDrawableMasks(model: ModelPtr): Int32Array2;
        function getDrawableVertexCounts(model: ModelPtr): IntArrayPtr;
        function getDrawableVertexPositions(model: ModelPtr): number;
        function getDrawableVertexUvs(model: ModelPtr): number;
        function getDrawableIndexCounts(model: ModelPtr): IntArrayPtr;
        function getDrawableIndices(model: ModelPtr): number;
        function getDrawableMultiplyColors(model: ModelPtr): number;
        function getDrawableScreenColors(model: ModelPtr): number;
        function getDrawableParentPartIndices(model: ModelPtr): number;
        function mallocMoc(mocSize: number): number;
        function mallocModelAndInitialize(moc: ModelPtr): number;
        function malloc(size: number): number;
        function setLogFunction(handler: any): void;
        function updateModel(model: ModelPtr): void;
        function readCanvasInfo(model: ModelPtr, outSizeInPixels: number, outOriginInPixels: number, outPixelsPerUnit: number): void;
        function resetDrawableDynamicFlags(model: ModelPtr): void;
        function free(memory: MemoryPtr): void;
    }
    /** Necessary alignment for mocs (in bytes). */
    const AlignofMoc = 64;
    /** Necessary alignment for models (in bytes). */
    const AlignofModel = 16;
    /** .moc3 file version Unknown */
    const MocVersion_Unknown = 0;
    /** .moc3 file version 3.0.00 - 3.2.07 */
    const MocVersion_30 = 1;
    /** .moc3 file version 3.3.00 - 3.3.03 */
    const MocVersion_33 = 2;
    /** .moc3 file version 4.0.00 - 4.1.05 */
    const MocVersion_40 = 3;
    /** .moc3 file version 4.2.00 - 4.2.04 */
    const MocVersion_42 = 4;
    /** .moc3 file version 5.0.00 - */
    const MocVersion_50 = 5;
    /** Normal Parameter. */
    const ParameterType_Normal = 0;
    /** Parameter for blend shape. */
    const ParameterType_BlendShape = 1;
    namespace Version {
        /**
         * Queries Core version.
         *
         * @return Core version.
         */
        function csmGetVersion(): number;
        /**
         * Gets Moc file supported latest version.
         *
         * @return Moc file latest format version.
         */
        function csmGetLatestMocVersion(): number;
        /**
         * Gets Moc file format version.
         *
         * @param moc Moc
         *
         * @return csmMocVersion
         */
        function csmGetMocVersion(moc: any): number;
    }
    namespace Logging {
        /**
         * Sets log handler.
         *
         * @param handler  Handler to use.
         */
        function csmSetLogFunction(handler: ((message: string) => void) | null): void;
        /**
         * Queries log handler.
         *
         * @return Log handler.
         */
        function csmGetLogFunction(): ((message: string) => void) | null;
        function wrapLogFunction(messagePtr: any): void;
    }
}
export declare class Moc {
    private _ptr;
    get ptr(): number;
    private constructor();
    /**
     * Checks consistency of a moc.
     *
     * @param mocBytes Moc bytes.
     *
     * @returns '1' if Moc is valid; '0' otherwise.
     */
    static hasMocConsistency(mocBytes: ArrayBuffer): number | null;
    /**
     * Creates {@link Moc} from {@link ArrayBuffer}.
     * @param buffer Array buffer
     * @return [{@link Moc}] on success; null otherwise.
     */
    static fromArrayBuffer(mocBytes: ArrayBuffer): Moc | null;
    /** Releases instance. */
    _release(): void;
}
/**
 * Initializes instance.
 *
 * @param moc Moc
 */
export declare class Model {
    private _parameters;
    /** Parameters */
    get parameters(): Parameters;
    private _parts;
    /** Parts */
    get parts(): Parts;
    private _drawables;
    /** Drawables. */
    get drawables(): Drawables;
    private _canvasinfo;
    /** Canvas information. */
    get canvasinfo(): CanvasInfo;
    private _ptr;
    get ptr(): number;
    private constructor();
    /**
     * Creates [{@link Model}] from [{@link Moc}].
     *
     * @param moc Moc
     * @return [{@link Model}] on success; null otherwise.
     */
    static fromMoc(moc: Moc): Model | null;
    /** Updates instance. */
    update(): void;
    /** Releases instance. */
    release(): void;
}
/**
 * Initializes instance.
 *
 * @param modelPtr Native model pointer.
 */
export declare class CanvasInfo {
    /** Width of native model canvas. */
    CanvasWidth: number;
    /** Height of native model canvas. */
    CanvasHeight: number;
    /** Coordinate origin of X axis. */
    CanvasOriginX: number;
    /** Coordinate origin of Y axis. */
    CanvasOriginY: number;
    /** Pixels per unit of native model. */
    PixelsPerUnit: number;
    constructor(ptr: ModelPtr);
}
/**
 * Initializes instance.
 *
 * @param modelPtr Native model.
 */
export declare class Parameters {
    /** Parameter count. */
    readonly count: number;
    /** Parameter IDs. */
    readonly ids: Array<string>;
    /** Minimum parameter values. */
    readonly minimumValues: Float32Array;
    /** Maximum parameter values. */
    readonly maximumValues: Float32Array;
    /** Default parameter values. */
    readonly defaultValues: Float32Array;
    /** Parameter values. */
    values: Float32Array;
    /** Parameter types. */
    readonly types: Int32Array;
    /** Number of key values of each parameter. */
    readonly keyCounts: Int32Array;
    /** Key values of each parameter. */
    readonly keyValues: Array<Float32Array>;
    constructor(ptr: ModelPtr);
}
/**
 * Initializes instance.
 *
 * @param modelPtr Native model.
 */
export declare class Parts {
    /** Part count. */
    count: number;
    /** Part IDs. */
    ids: Array<string>;
    /** Opacity values. */
    opacities: Float32Array;
    /** Part's parent part indices. */
    parentIndices: Int32Array;
    constructor(modelPtr: any);
}
export declare class Drawables {
    /** Drawable count. */
    readonly count: number;
    /** Drawable IDs. */
    readonly ids: Array<string>;
    /** Constant drawable flags. */
    readonly constantFlags: Uint8Array;
    /** Dynamic drawable flags. */
    readonly dynamicFlags: Uint8Array;
    /** Drawable texture indices. */
    readonly textureIndices: Int32Array;
    /** Drawable draw orders. */
    readonly drawOrders: Int32Array;
    /** Drawable render orders. */
    readonly renderOrders: Int32Array;
    /** Drawable opacities. */
    readonly opacities: Float32Array;
    /** Mask count for each drawable. */
    readonly maskCounts: Int32Array;
    /** Masks for each drawable. */
    readonly masks: Array<Int32Array>;
    /** Number of vertices of each drawable. */
    readonly vertexCounts: Int32Array;
    /** 2D vertex position data of each drawable. */
    readonly vertexPositions: Array<Float32Array>;
    /** 2D texture coordinate data of each drawables. */
    readonly vertexUvs: Array<Float32Array>;
    /** Number of triangle indices for each drawable. */
    readonly indexCounts: Int32Array;
    /** Triangle index data for each drawable. */
    readonly indices: Array<Uint16Array>;
    /** Multiply Colors */
    readonly multiplyColors: Float32Array;
    /** Screen Colors */
    readonly screenColors: Float32Array;
    /** Indices of drawables parent part. */
    readonly parentPartIndices: Int32Array;
    /** Native model. */
    private _modelPtr;
    constructor(modelPtr: any);
    /** Resets all dynamic drawable flags.. */
    resetDynamicFlags: () => void;
}
export declare namespace Utils {
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    function hasBlendAdditiveBit(bitfield: number): boolean;
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    function hasBlendMultiplicativeBit(bitfield: number): boolean;
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    function hasIsDoubleSidedBit(bitfield: number): boolean;
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    function hasIsInvertedMaskBit(bitfield: number): boolean;
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    function hasIsVisibleBit(bitfield: number): boolean;
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    function hasVisibilityDidChangeBit(bitfield: number): boolean;
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    function hasOpacityDidChangeBit(bitfield: number): boolean;
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    function hasDrawOrderDidChangeBit(bitfield: number): boolean;
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    function hasRenderOrderDidChangeBit(bitfield: number): boolean;
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    function hasVertexPositionsDidChangeBit(bitfield: number): boolean;
    /**
     * Checks whether flag is set in bitfield.
     *
     * @param bitfield Bitfield to query against.
     *
     * @return [[true]] if bit set; [[false]] otherwise
     */
    function hasBlendColorDidChangeBit(bitfield: number): boolean;
}
export {};
