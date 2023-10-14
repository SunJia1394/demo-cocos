/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { JsonAsset } from 'cc';
import type IStructLike from '../../IStructLike';
/**
 * Handles pose from pose3.json.
 *
 * **Sealed class.**
 */
declare class CubismPose3Json {
    private constructor();
    /**
     * Loads a pose3.json.
     * @param pose3Json pose3.json to deserialize.
     * @returns Deserialized pose3.json on success; null otherwise.
     */
    static loadFrom(pose3Json: string): CubismPose3Json | null;
    /**
     * Loads a pose3.json asset.
     * @param pose3JsonAsset pose3.json asset to deserialize.
     * @returns Deserialized pose3.json asset on success; null otherwise.
     */
    static loadFromJsonAsset(pose3JsonAsset: JsonAsset): CubismPose3Json | null;
    static loadFromJson(json: any): CubismPose3Json | null;
    private static parseGroups;
    /** The type of cubism pose. */
    type: string;
    /** [Optional] Time of the Fade-in for easing in seconds.. */
    fadeInTime: number;
    /** Array of Groups. */
    groups: CubismPose3Json.SerializablePoseGroup[][] | null;
}
declare namespace CubismPose3Json {
    /** (struct) */
    class SerializablePoseGroup implements IStructLike<SerializablePoseGroup> {
        /** The part id of group. */
        id: string;
        /** The link part ids. */
        link: string[];
        constructor(args?: {
            id?: string;
            link?: string[];
        });
        copyWith(args?: {
            id?: string;
            link?: string[];
        }): SerializablePoseGroup;
        equals(other: SerializablePoseGroup): boolean;
        strictEquals(other: SerializablePoseGroup): boolean;
        static instantiateFromJson(json: any): SerializablePoseGroup | undefined;
    }
}
export default CubismPose3Json;
