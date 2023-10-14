export declare namespace methods {
    function getShouldImportAsOriginalWorkflow(): boolean;
    function setShouldImportAsOriginalWorkflow(value: boolean): void;
    function showShouldImportAsOriginalWorkflowSettingDialog(): Promise<void>;
    function getShouldClearAnimationCurves(): boolean;
    function setShouldClearAnimationCurves(value: boolean): void;
    function showShouldClearAnimationCurvesSettingDialog(): Promise<void>;
    function showSettingsViewDialog(): Promise<void>;
}
export declare function load(): void;
export declare function unload(): void;
