import type IComponentValue from './IComponentValue';
export default interface IQueryNodeResult {
    active: IBoolean;
    children: Array<unknown>;
    layer: IEnum;
    locked: IBoolean;
    name: IString;
    parent: IParentNode;
    position: IVec3;
    rotation: IVec3;
    scale: IVec3;
    uuid: IString;
    __comps__: Array<IComponent>;
    __prefab__?: {
        fileId: string;
        prefabStateInfo: {
            assetUuid: string;
            isAddedChild: boolean;
            isApplicable: boolean;
            isRevertable: boolean;
            isUnwrappable: boolean;
            state: number;
        };
        rootUuid: string;
        sync: boolean;
        uuid: string;
    };
    __type__: string;
}
export interface IBoolean {
    default: boolean | null;
    displayName: string;
    extends: string[];
    readonly: boolean;
    type: 'Boolean';
    value: boolean;
    visible: boolean;
}
export interface IVec3 {
    default: IVec3Value | null;
    displayName: string;
    extends: string[];
    readonly: boolean;
    tooltip?: string;
    type: 'cc.Vec3';
    value: IVec3Value;
    visible: boolean;
}
export interface IVec3Value {
    x: number;
    y: number;
    z: number;
}
export interface IString {
    default: string | null;
    displayName: string;
    extends: string[];
    readonly: boolean;
    type: 'String';
    value: string;
    visible: boolean;
}
export interface IParentNode {
    extends: string[];
    readonly: boolean;
    type: 'cc.Node';
    value: {
        uuid: string;
    };
    visible: boolean;
}
export interface IEnum {
    default: number;
    displayName: string;
    enumList: IEnumItem[];
    extends: [];
    readonly: boolean;
    type: 'Enum';
    value: number;
    visible: boolean;
}
export interface IEnumItem {
    name: string;
    value: number;
}
export interface IComponent {
    cid: string;
    editor: IComponentEditor;
    extends: string[];
    readonly: boolean;
    type: string;
    value: IComponentValue;
    visible: boolean;
}
export interface IComponentEditor {
    help: string;
    icon: string;
    inspector: string;
    _showTick: boolean;
}
