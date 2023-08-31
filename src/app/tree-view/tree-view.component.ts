import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
import { ITreeNode } from '../models/tree-node.model';
import { TreeViewService } from '../services/treeview.service';

@Component({
    selector: '[treeView]',
    templateUrl: './tree-view.component.html',
    styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

    @Input() treeViewChildern: TreeNode[] = [];

    constructor(public treeViewService: TreeViewService) { }

    ngOnInit(): void {
    }

    public onSelectNode(node: TreeNode){
        this.treeViewService.setSelectedNode(node.id);
    }

    public onToggleNode(node: TreeNode){
        
    }

}
