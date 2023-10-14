/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component } from 'cc';
import ICubismUpdatable from '../../Framework/ICubismUpdatable';
import CubismRenderer from '../CubismRenderer';
import CubismMaskTexture from './CubismMaskTexture';
import type CubismDrawable from '../../Core/CubismDrawable';
import type CubismMaskTile from './CubismMaskTile';
import type ICubismMaskTextureCommandSource from './ICubismMaskTextureCommandSource';
import type CubismMaskCommandBuffer from './CubismMaskCommandBuffer';
/** Controls rendering of Cubism masks. */
export default class CubismMaskController extends Component implements ICubismMaskTextureCommandSource, ICubismUpdatable {
    /** MaskTexture backing field. */
    private _maskTexture;
    /** Mask texture. */
    get maskTexture(): CubismMaskTexture | null;
    set maskTexture(value: CubismMaskTexture | null);
    /** CubismMaskRenderers. */
    private _junctions;
    private get junctions();
    private set junctions(value);
    /** True if controller is revived. */
    private get isRevived();
    /** Model has update controller component. */
    private _hasUpdateController;
    get hasUpdateController(): boolean;
    set hasUpdateController(value: boolean);
    /** Makes sure controller is initialized once. */
    private tryRevive;
    /** Initializes Junctions. */
    private forceRevive;
    /** Called by cubism update controller. Order to invoke OnLateUpdate. */
    get executionOrder(): number;
    /** Called by cubism update controller. Needs to invoke OnLateUpdate on Editing. */
    get needsUpdateOnEditing(): boolean;
    /** Called by cubism update controller. Updates {@link junctions}. */
    onLateUpdate(): void;
    /** ICubismUpdatable Binded callback function. */
    readonly bindedOnLateUpdate: ICubismUpdatable.CallbackFunction;
    /** ICubismUpdatable metadata */
    readonly [ICubismUpdatable.SYMBOL]: typeof ICubismUpdatable.SYMBOL;
    /** Initializes instance. */
    protected start(): void;
    /** Called by Cocos Creator. */
    protected lateUpdate(): void;
    /** Finalizes instance. */
    protected onDestroy(): void;
    /**
     * Queries the number of tiles needed by the source.
     * @returns The necessary number of tiles needed.
     */
    getNecessaryTileCount(): number;
    /**
     * Assigns the tiles.
     * @param value Tiles to assign.
     */
    setTiles(value: CubismMaskTile[]): void;
    /**
     * Called when source should instantly draw.
     * @param buffer
     */
    addToCommandBuffer(buffer: CubismMaskCommandBuffer): void;
}
/** Pair of masks and masked drawables. (struct) */
export declare class MasksMaskedsPair {
    /** Mask drawables. */
    masks: CubismRenderer[];
    /** Masked drawables. */
    maskeds: CubismRenderer[];
    constructor(args?: {
        masks?: CubismRenderer[];
        maskeds?: CubismRenderer[];
    });
}
export declare class MasksMaskedsPairs {
    /** List of MasksMaskedsPair */
    entries: MasksMaskedsPair[];
    /**
     * Add MasksMaskedsPair to the list.
     * @param masked
     * @param masks
     * @returns
     */
    add(masked: CubismDrawable, masks: CubismDrawable[]): void;
}
