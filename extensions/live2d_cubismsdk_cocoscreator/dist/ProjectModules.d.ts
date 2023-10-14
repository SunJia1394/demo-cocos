export declare namespace ProjectModules {
    interface ModuleMap {
        'Core/CubismMoc': typeof import('../static/assets/Core/CubismMoc');
        'Core/ComponentExtensionMethods': typeof import('../static/assets/Core/ComponentExtensionMethods');
        'Framework/CubismDisplayInfoParameterName': typeof import('../static/assets/Framework/CubismDisplayInfoParameterName');
        'Framework/CubismDisplayInfoPartName': typeof import('../static/assets/Framework/CubismDisplayInfoPartName');
        'Framework/MotionFade/CubismFadeMotionData': typeof import('../static/assets/Framework/MotionFade/CubismFadeMotionData');
        'Framework/MotionFade/CubismFadeMotionList': typeof import('../static/assets/Framework/MotionFade/CubismFadeMotionList');
        'Framework/Expression/CubismExpressionData': typeof import('../static/assets/Framework/Expression/CubismExpressionData');
        'Framework/Expression/CubismExpressionList': typeof import('../static/assets/Framework/Expression/CubismExpressionList');
        'Framework/Json/CubismMotion3Json': typeof import('../static/assets/Framework/Json/CubismMotion3Json');
        'Framework/Json/CubismModel3Json': typeof import('../static/assets/Framework/Json/CubismModel3Json');
        'Framework/Json/CubismExp3Json': typeof import('../static/assets/Framework/Json/CubismExp3Json');
        'Rendering/Masking/CubismMaskTexture': typeof import('../static/assets/Rendering/Masking/CubismMaskTexture');
    }
    export function getModule<K extends keyof ModuleMap>(path: K): Promise<ModuleMap[K]>;
    export {};
}
