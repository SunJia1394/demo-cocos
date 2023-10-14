/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component, geometry } from 'cc';
import { CubismVector3 as Vector3 } from '../../Core/CubismVector';
import CubismRaycastHit from './CubismRaycastHit';
/**
 * Allows casting rays against {@link CubismRaycastable}s.
 *
 * **Sealed class**
 */
export default class CubismRaycaster extends Component {
    /** {@link CubismRenderer}s with {@link CubismRaycastable}s attached. */
    private raycastables;
    /** {@link CubismRaycastablePrecision}s with {@link CubismRaycastable}s attached. */
    private raycastablePrecisions;
    /** Refreshes the controller. Call this method after adding and/or removing {@link CubismRaycastable}. */
    private refresh;
    /** Called by Cocos Creator. Makes sure cache is initialized. */
    protected start(): void;
    /**
     * Casts a ray.
     * @param origin The origin of the ray.
     * @param direction The direction of the ray.
     * @param result The result of the cast.
     * @param maximumDistance [Optional] The maximum distance of the ray.
     * @returns
     * true in case of a hit; false otherwise.
     *
     * The numbers of drawables had hit
     */
    raycast1(origin: Vector3, direction: Vector3, result: CubismRaycastHit[], maximumDistance?: number): number;
    /**
     * Casts a ray.
     * @param ray
     * @param result  The result of the cast.
     * @param maximumDistance [Optional] The maximum distance of the ray.
     * @returns
     * true in case of a hit; false otherwise.
     *
     * The numbers of drawables had hit
     */
    raycast2(ray: geometry.Ray, result: CubismRaycastHit[], maximumDistance?: number): number;
    /**
     * Check the point is inside polygons.
     * @param mesh
     * @param inputPosition
     * @returns
     */
    private containsInTriangles;
}
