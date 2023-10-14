/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import CubismMaskTile from './CubismMaskTile';
/** Virtual pool allocator for CubismMaskTiles. */
export default class CubismMaskTilePool {
    private _subdivisions;
    /** Level of subdivisions. */
    private get subdivisions();
    private set subdivisions(value);
    private _slots;
    /**
     * Pool slots.
     *
     * true slots are in use, false are available slots.
     */
    private get slots();
    private set slots(value);
    /**
     * Initializes instance.
     * @param subdivisions Number of CubismMaskTexture subdivisions.
     * @param channels Number of CubismMaskTexture color channels.
     */
    constructor(subdivisions: number, channels: number);
    /**
     * Acquires tiles.
     * @param count Number of tiles to acquire.
     * @returns Acquired tiles on success; null otherwise.
     */
    acquireTiles(count: number): Array<CubismMaskTile> | null;
    /**
     * Releases tiles.
     * @param tiles Tiles to release.
     */
    returnTiles(tiles: CubismMaskTile[]): void;
    /**
     * Converts from index to CubismMaskTile.
     * @param index Index to convert.
     * @returns Mask tile matching index.
     */
    private toTile;
    /**
     * Converts from <see cref="CubismMaskTile"/> to index.
     * @param tile Tile to convert.
     * @returns Tile index.
     */
    private toIndex;
}
