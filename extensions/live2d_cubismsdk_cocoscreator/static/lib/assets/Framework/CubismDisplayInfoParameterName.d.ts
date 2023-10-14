/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component } from 'cc';
/** Get the parameter name from cdi3.json and save the display name. */
export default class CubismDisplayInfoParameterName extends Component {
    /** Name for display that can be changed by the user. */
    displayName: string;
    /** Original name of the parameter from cdi3.json. */
    parameterName: string;
}
