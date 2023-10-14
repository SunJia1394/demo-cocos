/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import CubismMaskCommandBuffer from './CubismMaskCommandBuffer';
import type CubismRenderer from '../CubismRenderer';
import type CubismMaskTile from './CubismMaskTile';
import type CubismMaskTransform from './CubismMaskTransform';
import { CubismBounds as Bounds } from '../../Core/CubismGeometry';
/**
 * Renders out a single Cubism mask.
 *
 * Note that - depending on the model - multiple CubismMaskRenderer might be assigned to a single CubismDrawable.
 */
export default class CubismMaskRenderer {
    /** Mask properties. */
    private _maskTile;
    /** Mask properties. */
    private _maskTransform;
    private _mainRenderer;
    /** Main renderer. */
    private get mainRenderer();
    private set mainRenderer(value);
    private _maskMaterial;
    /** Mask material. */
    private get maskMaterial();
    private set maskMaterial(value);
    private _maskCullingMaterial;
    /** Mask culling material. */
    private get maskCullingMaterial();
    private set maskCullingMaterial(value);
    private _isCulling;
    /** Culling setting. */
    private get isCulling();
    private set isCulling(value);
    /** Bounds of {@link CubismRenderer.mesh}. */
    get meshBounds(): Bounds;
    /** Initializes fields. */
    constructor();
    /**
     * Sets the CubismRenderer to reference.
     * @param value Value to set.
     * @returns Instance.
     */
    setMainRenderer(value: CubismRenderer): CubismMaskRenderer;
    /**
     * Sets CubismMaskTile.
     * @param value Value to set.
     * @returns Instance.
     */
    setMaskTile(value: CubismMaskTile): CubismMaskRenderer;
    /**
     * Sets CubismMaskTransform.
     * @param value Value to set.
     * @returns Instance.
     */
    setMaskTransform(value: CubismMaskTransform): CubismMaskRenderer;
    /**
     * Enqueues
     * @param buffer
     * @returns Buffer to enqueue in.
     */
    addToCommandBuffer(buffer: CubismMaskCommandBuffer): void;
}
