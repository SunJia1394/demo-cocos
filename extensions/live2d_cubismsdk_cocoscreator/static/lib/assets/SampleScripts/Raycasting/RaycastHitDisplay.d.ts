/// <reference types="../../../temp/declarations/cc" />
import { Component, RichText } from 'cc';
import CubismModel from '../../Core/CubismModel';
export declare class RaycastHitDisplay extends Component {
    /** <see cref="CubismModel"/> to cast rays against. */
    model: CubismModel | null;
    /** UI element to display results in. */
    resultsText: RichText | null;
    /** <see cref="CubismRaycaster"/> attached to <see cref="Model"/>. */
    private _raycaster;
    private get raycaster();
    private set raycaster(value);
    /** Buffer for raycast results. */
    private _results;
    private get results();
    private set results(value);
    private _camera;
    private get camera();
    private set camera(value);
    /** Hit test. */
    private doRaycast;
    /** Called by Cocos Creator. Initializes instance. */
    protected start(): void;
    private _mouseDownEventData;
    private mouseDownEventHandler;
    private bindedMouseDownEventHandler;
    protected onEnable(): void;
    protected onDisable(): void;
    /** Called by Cocos Creator. Triggers raycasting. */
    protected update(): void;
}
