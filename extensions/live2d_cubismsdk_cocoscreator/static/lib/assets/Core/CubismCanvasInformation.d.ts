/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { Model } from '../CubismCore';
/**
 * Single {@link CubismModel} canvas information.
 *
 * **Sealed class**
 */
export default class CubismCanvasInformation {
    private constructor();
    /**
     * Initializes instance.
     * @param unmanagedModel Handle to unmanaged model.
     */
    static instantiate(unmanagedModel: Model): CubismCanvasInformation;
    private _unmanagedCanvasInformation;
    /** Unmanaged canvas information from unmanaged model. */
    private get unmanagedCanvasInformation();
    private set unmanagedCanvasInformation(value);
    /** Width of native model canvas. */
    get canvasWidth(): number;
    /** Height of native model canvas. */
    get canvasHeight(): number;
    /** Coordinate origin of X axis. */
    get canvasOriginX(): number;
    /** Coordinate origin of Y axis. */
    get canvasOriginY(): number;
    /** Pixels per unit of native model. */
    get pixelsPerUnit(): number;
    /**
     * Revives the instance.
     * @param unmanagedModel Handle to unmanaged model.
     */
    revive(unmanagedModel: Model): void;
    /**
     * Restores instance to initial state.
     * @param unmanagedModel Handle to unmanaged model.
     */
    private reset;
}
