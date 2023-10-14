/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
/// <reference types="../@types/cc" />
import { geometry, math, Mesh } from 'cc';
export declare function isNullOrEmpty(value: string | null): boolean;
export declare namespace ArrayExtensions {
    function fromVec3Array(source: ArrayLike<math.IVec3Like>): number[];
    function isEquals<T>(equalityCompareFunc: (x: T, y: T) => boolean, a: T[], b: T[]): boolean;
}
export declare namespace MeshExtensions {
    function calculateBounds(value: Mesh): geometry.AABB;
}
export declare namespace MathExtensions {
    function isPowerOfTwo(value: number): boolean;
    function nextPowerOfTwo(value: number): number;
    function closestPowerOfTwo(value: number): number;
    namespace Float {
        /**
         *
         * @param current
         * @param target
         * @param currentVelocity
         * @param smoothTime
         * @param maxSpeed
         * @param deltaTime
         * @returns result and currentVelocity
         */
        function smoothDamp(current: number, target: number, currentVelocity: number, smoothTime: number, maxSpeed?: number, deltaTime?: number): [number, number];
    }
    namespace Vec2 {
        function add(a: math.Vec2, b: math.Vec2): math.Vec2;
        function subtract(a: math.Vec2, b: math.Vec2): math.Vec2;
        function multiplySingle(a: math.Vec2, b: number): math.Vec2;
        function divideSingle(a: math.Vec2, b: number): math.Vec2;
        /**
         *
         * @param current
         * @param target
         * @param currentVelocity
         * @param smoothTime
         * @param maxSpeed
         * @param deltaTime
         * @returns result and currentVelocity
         */
        function smoothDamp(current: math.Vec2, target: math.Vec2, currentVelocity: math.Vec2, smoothTime: number, maxSpeed?: number, deltaTime?: number): [math.Vec2, math.Vec2];
    }
    namespace Vec3 {
        function subtract(a: math.Vec3, b: math.Vec3): math.Vec3;
        function smoothDamp(current: math.Vec3, target: math.Vec3, currentVelocity: math.Vec3, smoothTime: number, maxSpeed?: number, deltaTime?: number): [math.Vec3, math.Vec3];
    }
}
/**
 * Importerプロセスで実行されているかを返します。
 * 注: global 変数 (window) に AssetDB プロパティ があるかどうかで判定しています。
 * この判定を行うためのAPIが CocosCreator v3.6.2 では現状存在しないための方法となっています。
 *
 * @returns Importerプロセスであるならtrue, そうでないならfalseを返します。
 */
export declare function isImporter(): boolean;
export declare namespace EditorUtils {
    type IQueryNodeResult = any;
    function getComponentPath(self: IQueryNodeResult, uuid: string): string | null;
    function applyComponentProperty(nodeUuid: string, compUuid: string, property: string, value: number, type: 'Integer' | 'Float' | 'Enum'): Promise<void>;
}
