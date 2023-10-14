export declare function load(): void;
export declare function unload(): void;
export declare namespace methods {
    function registerCubismModel3JsonImporter(): {
        extname: string[];
        importer: new (...args: any[]) => object;
    };
    function registerCubismExp3JsonImporter(): {
        extname: string[];
        importer: new (...args: any[]) => object;
    };
    function registerCubismMotion3JsonImporter(): {
        extname: string[];
        importer: new (...args: any[]) => object;
    };
    function registerCubismMocImporter(): {
        extname: string[];
        importer: new (...args: any[]) => object;
    };
    function registerCubismExpressionDataImporter(): {
        extname: string[];
        importer: new (...args: any[]) => object;
    };
    function registerCubismExpressionListImporter(): {
        extname: string[];
        importer: new (...args: any[]) => object;
    };
    function registerCubismFadeMotionDataImporter(): {
        extname: string[];
        importer: new (...args: any[]) => object;
    };
    function registerCubismFadeMotionListImporter(): {
        extname: string[];
        importer: new (...args: any[]) => object;
    };
    function registerCubismMaskTextureImporter(): {
        extname: string[];
        importer: new (...args: any[]) => object;
    };
}
