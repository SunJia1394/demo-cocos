/// <reference types="../../../temp/declarations/cc" />
import { Component, EventTouch } from 'cc';
import CubismExpressionController from '../../../Framework/Expression/CubismExpressionController';
export default class CubismExpressionPreview extends Component {
    /** ExpressionController to be operated. */
    _expressionController: CubismExpressionController | null;
    /** Get expression controller. */
    protected start(): void;
    /**
     * Change facial expression.
     * @param expressionIndex index of facial expression to set.
     */
    changeExpression(event: EventTouch, customEventData: string): void;
}
