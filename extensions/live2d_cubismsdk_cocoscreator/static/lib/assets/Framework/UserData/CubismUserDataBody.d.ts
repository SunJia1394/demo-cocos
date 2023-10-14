/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import type IStructLike from '../../IStructLike';
/** Body of user data. */
declare class CubismUserDataBody implements IStructLike<CubismUserDataBody> {
    /** Id. */
    readonly id: string;
    /** Value. */
    readonly value: string;
    constructor(args?: {
        id?: string;
        value?: string;
    });
    copyWith(args?: {
        id?: string;
        value?: string;
    }): CubismUserDataBody;
    equals(other: CubismUserDataBody): boolean;
    strictEquals(other: CubismUserDataBody): boolean;
}
declare namespace CubismUserDataBody {
    const DEFAULT: CubismUserDataBody;
}
export default CubismUserDataBody;
