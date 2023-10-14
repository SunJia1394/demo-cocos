/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import type ICubismTask from './ICubismTask';
declare namespace CubismTaskQueue {
    /**
     * Handles ICubismTasks.
     * @param task
     */
    type CubismTaskHandler = (task: ICubismTask) => void;
}
/** TOOD Document. */
declare class CubismTaskQueue {
    private constructor();
    /** Event triggered on new {@link ICubismTask} enqueued. */
    static onTask: CubismTaskQueue.CubismTaskHandler | null;
    /**
     * Enqeues a {@link ICubismTask}.
     * @param task
     * @returns
     */
    static enqueue(task: ICubismTask): void;
}
export default CubismTaskQueue;
