export interface ITreeNode {
    id: string,
    value: string,
    label: string,
    renderIcon: string,
    depth?: number | string;
    isExpanded?: boolean,
    disabled?: boolean,
    children?: ITreeNode[]
}

export class TreeNode {
    id: string = '';
    value: string = '';
    label: string = '';
    renderIcon: string = '';
    depth?: number | string = 0;
    isExpanded?: boolean = false;
    disabled?: boolean = false;
    children?: ITreeNode[] = [];

    constructor(data?: ITreeNode) {
        this.id = data?.id ?? '';
        this.value = data?.value ?? '';
        this.label = data?.label ?? '';
        this.renderIcon = data?.renderIcon ?? '';
        this.depth = data?.depth ?? 0;
        this.isExpanded = data?.isExpanded ?? false;
        this.disabled = data?.disabled ?? false;
        this.children = data?.children ?? [];
    }
}