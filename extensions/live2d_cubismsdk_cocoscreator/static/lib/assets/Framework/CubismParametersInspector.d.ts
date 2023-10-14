/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component } from 'cc';
export default class CubismParametersInspector extends Component {
    /**
     * Editor(Inspector) で 情報を取得するための実装
     * @returns
     */
    private getParameters;
}
export interface IGetParametersResult {
    /** uuid */
    cubismModel: string;
    parameters: ISerializedParameter[];
}
export interface ISerializedParameter {
    nodeUuid: string;
    componentUuid: string;
    id: string;
    minimumValue: number;
    maximumValue: number;
    defaultValue: number;
    value: number;
    displayName: string;
}
