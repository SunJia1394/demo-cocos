/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Asset } from 'cc';
import { Moc } from '../CubismCore';
/**
 * Cubism moc asset.
 *
 * **Sealed class.**
 */
export default class CubismMoc extends Asset {
    /**
     * Checks consistency of a moc.
     * @param mocByte Source.
     * @returns `true` if Moc is valid; `false` otherwise.
     */
    hasMocConsistency(mocByte: ArrayBuffer): boolean;
    /**
     * Creates a CubismMoc asset from raw bytes.
     * @param moc3 Source.
     * @returns Instance.
     */
    static createFrom(moc3: ArrayBuffer): CubismMoc;
    /** Bytes backing field. */
    private _bytes;
    /** Raw moc bytes. */
    get bytes(): ArrayBuffer;
    private set bytes(value);
    /** Raw moc bytes. */
    get _nativeAsset(): ArrayBuffer;
    private set _nativeAsset(value);
    private _unmanagedMoc;
    private get unmanagedMoc();
    private set unmanagedMoc(value);
    private referenceCount;
    get isRevived(): boolean;
    /**
     * Acquires native handle.
     * @returns Valid handle on success; IntPtr.Zero otherwise.
     */
    acquireUnmanagedMoc(): Moc | null;
    /** Releases native handle. */
    releaseUnmanagedMoc(): void;
    /** Revives instance without acquiring it. */
    private revive;
    validate(): boolean;
}
