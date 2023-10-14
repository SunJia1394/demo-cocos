/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference types="../../../temp/declarations/cc" />
import { Component } from 'cc';
import CubismUserDataBody from './CubismUserDataBody';
/** Tag of user data. */
export default class CubismUserDataTag extends Component {
    /** Value backing field. */
    private _value;
    /** Value. */
    get value(): string;
    private set value(value);
    /** Body backing field. */
    private _body;
    /** Body. */
    private get body();
    private set body(value);
    /**
     * Initializes tag.
     * @param body Body for initialization.
     */
    initialize(body: CubismUserDataBody): void;
}
