import type { IGetCubismRendererResult } from './SceneScriptFuncResult';
export declare namespace SceneScriptHelper {
    namespace CubismRenderController {
        function getCubismRenderers(uuid: string): Promise<IGetCubismRendererResult[] | null>;
    }
}
export default SceneScriptHelper;
