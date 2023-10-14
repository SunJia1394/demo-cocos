import type { IGetCubismRendererResult } from './SceneScriptFuncResult';
export declare function load(): void;
export declare function unload(): void;
declare namespace SceneScript {
    namespace CubismRenderController {
        function getCubismRenderers(uuid: string): Promise<IGetCubismRendererResult[] | null>;
    }
}
export declare namespace methods {
    const cubismRenderControllerGetCubismRenderers: typeof SceneScript.CubismRenderController.getCubismRenderers;
}
export {};
