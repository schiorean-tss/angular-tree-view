import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';

@Component({
    selector: '[treeNode]',
    templateUrl: './tree-node.component.html',
    styleUrls: ['./tree-node.component.scss'],
})
export class TreeNodeComponent implements OnInit {

    @Input() node: TreeNode = new TreeNode();

    @Output() onSelect = new EventEmitter<TreeNode>();

    @Output() onToggle = new EventEmitter<TreeNode>();

    public ngStyleObj: any;

    constructor() { }

    ngOnInit(): void {
        this.ngStyleObj = {
            'marginLeft.rem': this.node?.children?.length ? '-'+this.node.depth : '-'+(Number(this.node.depth)+1)+'.5',
            'paddingLeft.rem': this.node?.children?.length ? this.node.depth : (Number(this.node.depth)+1)+'.5'
        };
    }

    public onSelectedNode() {
        if(!this.node.disabled){
            this.onSelect.emit(this.node);
        }
    }

    public toggleExpanded() {
        if(!this.node.disabled){
            this.node.isExpanded = !this.node.isExpanded;
            this.onSelect.emit(this.node);
        }
    }

}
