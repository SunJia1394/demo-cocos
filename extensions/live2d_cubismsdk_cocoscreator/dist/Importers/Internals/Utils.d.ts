export declare function existsFile(path: string): boolean;
export declare function registerImportTaskIfItCannotBeCoreInitialized(path: string): Promise<boolean>;
export declare function canCoreInitializeInEditor(): Promise<boolean>;
export declare function importTask(path: string): Promise<void>;
