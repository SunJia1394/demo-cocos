/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component, Camera } from 'cc';
export declare class Billboarder extends Component {
    /**
     * Camera to face.
     */
    cameraToFace: Camera | null;
    /**
     * Called by Cocos Creator. Updates facing.
     * @param deltaTime
     * @returns
     */
    update(deltaTime: number): void;
}
