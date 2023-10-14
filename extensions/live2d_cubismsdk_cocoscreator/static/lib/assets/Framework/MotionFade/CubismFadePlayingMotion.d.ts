/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import CubismFadeMotionData from './CubismFadeMotionData';
/** from struct */
export default class CubismFadePlayingMotion {
    startTime: number;
    endTime: number;
    fadeInStartTime: number;
    speed: number;
    motion: CubismFadeMotionData | null;
    isLooping: boolean;
    weight: number;
}
