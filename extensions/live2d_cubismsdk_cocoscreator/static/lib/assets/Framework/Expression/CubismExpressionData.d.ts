/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Asset } from 'cc';
import CubismParameterBlendMode from '../CubismParameterBlendMode';
import type CubismExp3Json from '../Json/CubismExp3Json';
import type IStructLike from '../../IStructLike';
/** ExpressionParameter (struct) */
export declare class SerializableExpressionParameter implements IStructLike<SerializableExpressionParameter> {
    /** Expression Parameter Id */
    readonly id: string;
    /** Expression Parameter Value */
    readonly value: number;
    /** Expression Parameter Blend Mode */
    readonly blend: CubismParameterBlendMode;
    constructor(args?: {
        id?: string;
        value?: number;
        blend?: CubismParameterBlendMode;
    });
    copyWith(args?: {
        id?: string;
        value?: number;
        blend?: CubismParameterBlendMode;
    }): SerializableExpressionParameter;
    equals(other: SerializableExpressionParameter): boolean;
    strictEquals(other: SerializableExpressionParameter): boolean;
}
declare class CubismExpressionData extends Asset {
    /** Expression type. */
    type: string;
    /** Expression fade in time. */
    fadeInTime: number;
    /** Expression fade out time. */
    fadeOutTime: number;
    /** Expression Parameters */
    parameters: SerializableExpressionParameter[];
    static createInstance(json: CubismExp3Json): CubismExpressionData;
    static createInstance2(expressionData: CubismExpressionData, json: CubismExp3Json): CubismExpressionData;
}
export default CubismExpressionData;
