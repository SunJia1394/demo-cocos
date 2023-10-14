/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
declare namespace ICubismUpdatable {
    const SYMBOL: unique symbol;
    function isImplements(obj: unknown): boolean;
    type CallbackFunction = (deltaTime: number) => void;
}
/** from interface */
interface ICubismUpdatable {
    readonly [ICubismUpdatable.SYMBOL]: typeof ICubismUpdatable.SYMBOL;
    readonly bindedOnLateUpdate: ICubismUpdatable.CallbackFunction;
    get executionOrder(): number;
    get needsUpdateOnEditing(): boolean;
    get hasUpdateController(): boolean;
    set hasUpdateController(value: boolean);
}
export default ICubismUpdatable;
