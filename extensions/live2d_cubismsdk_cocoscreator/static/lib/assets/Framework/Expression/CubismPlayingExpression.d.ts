/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import CubismParameter from '../../Core/CubismParameter';
import CubismParameterBlendMode from '../CubismParameterBlendMode';
import type CubismModel from '../../Core/CubismModel';
import type CubismExpressionData from './CubismExpressionData';
/** The cubism expression data. */
export default class CubismPlayingExpression {
    /** Expression type. */
    type: string;
    /** Expression fade in time. */
    fadeInTime: number;
    /** Expression fade out time. */
    fadeOutTime: number;
    /** Expression Weight. */
    weight: number;
    /** Expression user time. */
    expressionUserTime: number;
    /** Expression end time. */
    expressionEndTime: number;
    /** Expression parameters cache. */
    destinations: (CubismParameter | null)[];
    /** Expression parameter value. */
    value: number[];
    /** Expression parameter blend mode. */
    blend: CubismParameterBlendMode[];
    /**
     * Initialize expression data from {@link CubismExpressionData}.
     * @param model model.
     * @param expressionData Source.
     * @returns
     */
    static create(model: CubismModel, expressionData: CubismExpressionData): CubismPlayingExpression | null;
}
