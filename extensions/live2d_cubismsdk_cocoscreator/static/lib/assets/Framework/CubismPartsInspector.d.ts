/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component } from 'cc';
export default class CubismPartsInspector extends Component {
    /**
     * Editor(Inspector) で 情報を取得するための実装
     * @returns
     */
    private getParts;
}
export interface IGetPartsResult {
    /** uuid */
    cubismModel: string;
    parts: ISerializedParts[];
}
export interface ISerializedParts {
    nodeUuid: string;
    componentUuid: string;
    id: string;
    opacity: number;
    displayName: string;
}
