import { TreeNode } from './tree-node.model';

export class TreeView{
    data: TreeNode[];

    constructor(data: TreeNode[]){
        this.data = [...data] ?? [];
        let depthLevel = 1;
        this.data.forEach(node => {
            node.depth = depthLevel;
            this.setNodesDepth(node, depthLevel);
            if(node.disabled){
                this.setDisabled(node);
            }
        });
    }

    public getTreeView(){
        return this.data;
    }

    private setNodesDepth(node:TreeNode, depthLevel: number){
        node.depth = depthLevel++;
        node.children?.forEach( child => {
            this.setNodesDepth(child, depthLevel);
        });
    }

    private setDisabled(node:TreeNode){
        node.disabled = true;
        node.children?.forEach( child => {
            this.setDisabled(child);
        });
    }
}