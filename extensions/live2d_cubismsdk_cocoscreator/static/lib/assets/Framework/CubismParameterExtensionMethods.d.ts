/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import CubismParameterBlendMode from './CubismParameterBlendMode';
import type CubismParameter from '../Core/CubismParameter';
declare namespace CubismParameterExtensionMethods {
    function addToValue(parameter: CubismParameter | null, value: number, weight?: number): void;
    function multiplyValueBy(parameter: CubismParameter | null, value: number, weight?: number): void;
    function blendToValue(self: CubismParameter | null, mode: CubismParameterBlendMode, value: number): void;
    function blendToValueArray(self: Array<CubismParameter | null>, mode: CubismParameterBlendMode, value: number): void;
}
export default CubismParameterExtensionMethods;
