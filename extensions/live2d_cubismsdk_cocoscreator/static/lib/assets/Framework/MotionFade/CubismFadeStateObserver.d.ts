/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
/// <reference types="../@types/cc" />
import { animation } from 'cc';
import CubismFadePlayingMotion from './CubismFadePlayingMotion';
import type ICubismFadeState from './ICubismFadeState';
export default class CubismFadeStateObserver extends animation.StateMachineComponent implements ICubismFadeState {
    private _cubismFadeMotionList;
    private _playingMotions;
    private _isDefaulState;
    private _layerIndex;
    private _layerWeight;
    private _isStateTransitionFinished;
    getPlayingMotions(): Array<CubismFadePlayingMotion> | null;
    isDefaultState(): boolean;
    getLayerWeight(): number;
    getStateTransitionFinished(): boolean;
    setStateTransitionFinished(isFinished: boolean): void;
    stopAnimation(index: number): void;
    onEnable(): void;
    onMotionStateEnter(animator: animation.AnimationController, stateInfo: animation.MotionStateStatus): void;
    onMotionStateExit(animator: animation.AnimationController, stateInfo: animation.MotionStateStatus): void;
}
