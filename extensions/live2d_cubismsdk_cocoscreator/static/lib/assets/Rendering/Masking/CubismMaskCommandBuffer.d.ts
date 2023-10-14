/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component, Camera, MeshRenderer } from 'cc';
import type CubismRenderer from '../CubismRenderer';
import type ICubismMaskCommandSource from './ICubismMaskCommandSource';
/** Singleton buffer for Cubism mask related draw commands. */
export default class CubismMaskCommandBuffer extends Component {
    private static _instance;
    static get instance(): CubismMaskCommandBuffer;
    private static _sources;
    /** Draw command sources. */
    private static get sources();
    private static set sources(value);
    private static _buffer;
    /** Command buffer. */
    static get buffer(): Map<CubismRenderer, MeshRenderer>;
    private static set buffer(value);
    /** True if Sources are empty. */
    private static get containsSources();
    /** Makes sure class is initialized for static usage. */
    private static initialize;
    /**
     * Registers a new draw command source.
     * @param source Source to add.
     */
    static addSource(source: ICubismMaskCommandSource): void;
    /**
     * Deregisters a draw command source.
     * @param source Source to remove.
     */
    static removeSource(source: ICubismMaskCommandSource): void;
    static readonly metadataPropertySymbol: symbol;
    /** Forces the command buffer to be refreshed. */
    private static refreshCommandBuffer;
    private _camera;
    get camera(): Camera;
    protected onLoad(): void;
    /** Executes Buffer. */
    protected lateUpdate(dt: number): void;
}
export declare class CubismMaskCommandBufferMetadata {
    enabled: boolean;
    cubismRenderer: CubismRenderer | null;
    meshRenderer: MeshRenderer | null;
}
