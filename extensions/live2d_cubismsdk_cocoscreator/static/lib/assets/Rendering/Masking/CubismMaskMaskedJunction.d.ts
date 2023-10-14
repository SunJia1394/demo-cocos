/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import CubismMaskTile from './CubismMaskTile';
import type CubismMaskTexture from './CubismMaskTexture';
import type CubismRenderer from '../CubismRenderer';
import type CubismMaskRenderer from './CubismMaskRenderer';
import type CubismMaskCommandBuffer from './CubismMaskCommandBuffer';
export default class CubismMaskMaskedJunction {
    private static _sharedMaskProperties;
    /** Shared buffer for CubismMaskPropertiess. */
    private static get sharedMaskProperties();
    private static set sharedMaskProperties(value);
    private _masks;
    /** Masks. */
    private get masks();
    private set masks(value);
    private _maskeds;
    /** Masked drawables. */
    private get maskeds();
    private set maskeds(value);
    private _maskTexture;
    /** Mask texture to be referenced by Maskeds. */
    private get maskTexture();
    private set maskTexture(value);
    private _maskTile;
    /** Mask tile to write to and read from. */
    private get maskTile();
    private set maskTile(value);
    private _maskTransform;
    /** Mask transform */
    private get maskTransform();
    private set maskTransform(value);
    /** Makes sure statics are initialized. */
    constructor();
    /**
     * Sets the masks.
     * @param value Value to set.
     * @returns Instance.
     */
    setMasks(value: Array<CubismMaskRenderer>): CubismMaskMaskedJunction;
    /**
     * Sets the masked drawables.
     * @param value Value to set.
     * @returns Instance.
     */
    setMaskeds(value: Array<CubismRenderer>): CubismMaskMaskedJunction;
    /**
     * Sets the mask texture to read from.
     * @param value Value to set.
     * @returns Instance.
     */
    setMaskTexture(value: CubismMaskTexture): CubismMaskMaskedJunction;
    /**
     * Sets the mask tile to write to and read from.
     * @param value Value to set.
     * @returns Instance.
     */
    setMaskTile(value: CubismMaskTile): CubismMaskMaskedJunction;
    /**
     * Appends junction draw commands to a buffer.
     * @param buffer Buffer to append commands to.
     */
    addToCommandBuffer(buffer: CubismMaskCommandBuffer): void;
    /** Updates the junction and all related data. */
    update(): void;
    /** Updates MaskTransform and Maskeds. */
    private recalculateMaskTransform;
}
