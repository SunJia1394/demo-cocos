/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Asset, RenderTexture } from 'cc';
import CubismMaskCommandBuffer from './CubismMaskCommandBuffer';
import type ICubismMaskTextureCommandSource from './ICubismMaskTextureCommandSource';
import type ICubismMaskCommandSource from './ICubismMaskCommandSource';
/**
 * Texture for rendering masks.
 *
 * ScriptableObject
 * [CreateAssetMenu(menuName = "Live2D Cubism/Mask Texture")]
 */
export default class CubismMaskTexture extends Asset implements ICubismMaskCommandSource {
    /**
     * Converts a CubismMaskTexture to a Texture.
     * @returns Value to convert.
     */
    getTextureReference(): RenderTexture | null;
    static initGlobalMaskTexture(): void;
    private static _globalMaskTexture;
    /** The global mask texture. */
    static get globalMaskTexture(): CubismMaskTexture | null;
    /** Size backing field. */
    private _size;
    /** Texture size in pixels. */
    get size(): number;
    set size(value: number);
    /** Channel count. */
    get channels(): number;
    /** Subdivisions backing field. */
    private _subdivisions;
    /** Subdivision level. */
    get subdivisions(): number;
    set subdivisions(value: number);
    private _tilePool;
    /** Tile pool 'allocator'. */
    private get tilePool();
    private set tilePool(value);
    /** RenderTexture backing field. */
    private _renderTexture;
    /** RenderTexture to draw on. */
    private get renderTexture();
    private set renderTexture(value);
    private _sources;
    /** Sources. */
    private get sources();
    private set sources(value);
    /** True if instance is revived. */
    private get isRevived();
    /** True if instance contains any sources. */
    private get containsSources();
    /**
     * Add source of masks for drawing.
     * @param source
     */
    addSource(source: ICubismMaskTextureCommandSource): void;
    /**
     * Remove source of masks
     * @param source
     */
    removeSource(source: ICubismMaskTextureCommandSource): void;
    private tryRevive;
    private reinitializeSources;
    private refreshRenderTexture;
    /** Initializes instance. */
    onLoaded(): void;
    static reviveInEditor(): void;
    /** Finalizes instance. */
    destroy(): boolean;
    /**
     * Called to enqueue source.
     * @param buffer Buffer to enqueue in.
     */
    addToCommandBuffer(buffer: CubismMaskCommandBuffer): void;
    private constructor();
    static generateCubismMaskTexture(size?: number, subdivisions?: number): CubismMaskTexture | null;
}
