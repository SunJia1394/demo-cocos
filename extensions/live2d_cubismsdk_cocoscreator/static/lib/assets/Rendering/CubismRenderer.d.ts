/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component, Material, math, MeshRenderer, Texture2D } from 'cc';
import CubismSortingMode from '../Rendering/CubismSortingMode';
import CubismMaskProperties from '../Rendering/Masking/CubismMaskProperties';
import CubismMeshPrimitive from './CubismMeshPrimitive';
import CubismRenderController from './CubismRenderController';
export declare namespace CubismRendererInEditorSymbols {
    const onControllerSortingOrderDidChange: unique symbol;
    const onControllerSortingModeDidChange: unique symbol;
    const onControllerDepthOffsetDidChange: unique symbol;
}
/** Wrapper for drawing CubismDrawables. */
export default class CubismRenderer extends Component {
    /** LocalSortingOrder backing field. */
    private _localSortingOrder;
    /** Local sorting order. */
    get localSortingOrder(): number;
    set localSortingOrder(value: number);
    /** Color backing field. */
    private _color;
    /** Color. */
    get color(): Readonly<math.Color>;
    set color(value: Readonly<math.Color>);
    /** {@link overwriteFlagForDrawableMultiplyColors} backing field. */
    private _isOverwrittenDrawableMultiplyColors;
    /** Whether to overwrite with multiply color from the model. */
    get overwriteFlagForDrawableMultiplyColors(): boolean;
    set overwriteFlagForDrawableMultiplyColors(value: boolean);
    _lastIsUseUserMultiplyColor: boolean;
    /** Last {@link overwriteFlagForDrawableMultiplyColors}. */
    get lastIsUseUserMultiplyColor(): boolean;
    set lastIsUseUserMultiplyColor(value: boolean);
    /** {@link overwriteFlagForDrawableScreenColor} backing field. */
    private _isOverwrittenDrawableScreenColor;
    /** Whether to overwrite with screen color from the model. */
    get overwriteFlagForDrawableScreenColor(): boolean;
    set overwriteFlagForDrawableScreenColor(value: boolean);
    _lastIsUseUserScreenColor: boolean;
    /** Last {@link overwriteFlagForDrawableScreenColors}. */
    get lastIsUseUserScreenColor(): boolean;
    set lastIsUseUserScreenColor(value: boolean);
    /** {@link MultiplyColor} backing field. */
    private _multiplyColor;
    get multiplyColor(): Readonly<math.Color>;
    set multiplyColor(value: Readonly<math.Color>);
    _lastMultiplyColor: Readonly<math.Color>;
    /** Last Drawable Multiply Color. */
    get lastMultiplyColor(): Readonly<math.Color>;
    set lastMultiplyColor(value: Readonly<math.Color>);
    /** {@link ScreenColor} backing field. */
    private _screenColor;
    /** Drawable Screen Color. */
    get screenColor(): Readonly<math.Color>;
    set screenColor(value: Readonly<math.Color>);
    private _lastScreenColor;
    /** Last Drawable Screen Color. */
    get lastScreenColor(): Readonly<math.Color>;
    set lastScreenColor(value: Readonly<math.Color>);
    /** Material. */
    get material(): Material | null;
    set material(value: Material | null);
    /** MainTexture backing field. */
    private _mainTexture;
    /** MeshRenderer's main texture. */
    get mainTexture(): Texture2D | null;
    set mainTexture(value: Texture2D | null);
    private _meshes;
    /**
     * Meshes.
     *
     * Double buffering dynamic meshes increases performance on mobile, so we double-buffer them here.
     */
    private get meshes();
    private set meshes(value);
    private _frontMesh;
    /** Index of front buffer mesh. */
    private get frontMesh();
    private set frontMesh(value);
    private _backMesh;
    /** Index of back buffer mesh. */
    private get backMesh();
    private set backMesh(value);
    /** Mesh */
    get mesh(): CubismMeshPrimitive;
    /** MeshRenderer backing field. */
    private _meshRenderer;
    get meshRenderer(): MeshRenderer | null;
    /** {@link CubismDrawable} */
    private _drawable;
    /** {@link CubismRenderController} */
    private get drawable();
    private set drawable(value);
    private _renderController;
    /** {@link CubismRenderController} */
    private get renderController();
    private set renderController(value);
    /** SortingMode backing field. */
    private _sortingMode;
    /** Sorting mode. */
    private get sortingMode();
    private set sortingMode(value);
    /** SortingOrder backing field. */
    private _sortingOrder;
    /** Sorting mode. */
    private get sortingOrder();
    private set sortingOrder(value);
    /** RenderOrder backing field. */
    private _renderOrder;
    /** Sorting mode. */
    private get renderOrder();
    private set renderOrder(value);
    /** DepthOffset backing field. */
    private _depthOffset;
    /** Offset to apply in case of depth sorting. */
    private get depthOffset();
    private set depthOffset(value);
    /** Opacity backing field. */
    private _opacity;
    /** Opacity. */
    private get opacity();
    private set opacity(value);
    private _vertexColors;
    /** Buffer for vertex colors. */
    private get vertexColors();
    private set vertexColors(value);
    private _lastSwap;
    /** Allows tracking of what vertex data was updated last swap. */
    private get lastSwap();
    private set lastSwap(value);
    private _thisSwap;
    /** Allows tracking of what vertex data will be swapped. */
    private get thisSwap();
    private set thisSwap(value);
    /** Editor Inspector 表示用 */
    private _priorityInEditor;
    /**
     * Swaps mesh buffers.
     *
     * Make sure to manually call this method in case you changed the Color.
     */
    swapMeshes(): void;
    /** Updates visibility. */
    updateVisibility(): void;
    /** Updates render order. */
    updateRenderOrder(): void;
    /**
     * Updates sorting layer.
     * @param newSortingLayer New sorting layer.
     */
    onControllerSortingLayerDidChange(newSortingLayer: number): void;
    /**
     * Updates sorting mode.
     * @param newSortingMode New sorting mode.
     */
    onControllerSortingModeDidChange(newSortingMode: CubismSortingMode): void;
    /** In editor method. */
    [CubismRendererInEditorSymbols.onControllerSortingModeDidChange](newSortingMode: CubismSortingMode): void;
    /**
     * Updates sorting order.
     * @param newSortingOrder New sorting order.
     */
    onControllerSortingOrderDidChange(newSortingOrder: number): void;
    /** In editor method. */
    [CubismRendererInEditorSymbols.onControllerSortingOrderDidChange](newSortingOrder: number): void;
    /**
     * Updates depth offset.
     * @param newDepthOffset
     */
    onControllerDepthOffsetDidChange(newDepthOffset: number): void;
    /** In editor method. */
    [CubismRendererInEditorSymbols.onControllerDepthOffsetDidChange](newDepthOffset: number): void;
    /**
     * Sets the opacity.
     * @param newOpacity New opacity.
     */
    onDrawableOpacityDidChange(newOpacity: number): void;
    /**
     * Updates render order.
     * @param newRenderOrder New render order.
     */
    onDrawableRenderOrderDidChange(newRenderOrder: number): void;
    /**
     * Sets the UnityEngine.Mesh.vertices.
     * @param newVertexPositions Vertex positions to set.
     */
    onDrawableVertexPositionsDidChange(newVertexPositions: readonly math.Vec3[]): void;
    /**
     * Sets visibility.
     * @param newVisibility New visibility.
     */
    onDrawableVisiblityDidChange(newVisibility: boolean): void;
    /**
     * Sets mask properties.
     * @param newMaskProperties Value to set.
     */
    onMaskPropertiesDidChange(newMaskProperties: CubismMaskProperties): void;
    /**
     * Sets model opacity.
     * @param newModelOpacity Opacity to set.
     */
    onModelOpacityDidChange(newModelOpacity: number): void;
    /** Applies main texture for rendering. */
    private applyMainTexture;
    /** Applies sorting. */
    private applySorting;
    /** Uploads mesh vertex colors. */
    applyVertexColors(): void;
    /** Uploads diffuse colors. */
    applyMultiplyColor(): void;
    /** Initializes the main texture if possible. */
    private tryInitializeMultiplyColor;
    /** Uploads tint colors. */
    applyScreenColor(): void;
    /** Initializes the main texture if possible. */
    private tryInitializeScreenColor;
    /** Initializes the mesh renderer. */
    private tryInitializeMeshRenderer;
    /** Initializes the mesh if necessary. */
    private tryInitializeMesh;
    /** Initializes vertex colors. */
    private tryInitializeVertexColor;
    /** Initializes the main texture if possible. */
    private tryInitializeMainTexture;
    /** Initializes the mesh renderer. */
    tryInitialize(renderController: CubismRenderController): void;
    /** Sets NewVertexPositions. */
    private setNewVertexPositions;
    /** Sets NewVertexColors. */
    private setNewVertexColors;
    /** Sets DidBecomeVisible on visible. */
    private becomeVisible;
    /** Sets DidBecomeInvisible on invisible. */
    private becomeInvisible;
    /** Sets SetNewRenderOrder. */
    private setNewRenderOrder;
    /** Resets flags. */
    private resetSwapInfoFlags;
    /** Reset visibility flags. */
    private resetVisibilityFlags;
    /** Reset render order flag. */
    private resetRenderOrderFlag;
    /** Finalizes instance. */
    protected onDestroy(): void;
}
