/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import CubismPosePart from './CubismPosePart';
import CubismPart from '../../Core/CubismPart';
import type IStructLike from '../../IStructLike';
/** */
export default class CubismPoseData implements IStructLike<CubismPoseData> {
    /** Cubism pose part. */
    readonly posePart: CubismPosePart | null;
    /** Cubism part cache. */
    readonly part: CubismPart | null;
    /** Link parts cache. */
    readonly linkParts: (CubismPart | null)[];
    /** Cubism part opacity. */
    readonly opacity: number;
    constructor(args?: {
        posePart?: CubismPosePart | null;
        part?: CubismPart | null;
        linkParts?: (CubismPart | null)[] | null;
        opacity?: number;
    });
    copyWith(args?: {
        posePart?: CubismPosePart | null;
        part?: CubismPart | null;
        linkParts?: (CubismPart | null)[] | null;
        opacity?: number;
    }): CubismPoseData;
    equals(other: CubismPoseData): boolean;
    strictEquals(other: CubismPoseData): boolean;
}
