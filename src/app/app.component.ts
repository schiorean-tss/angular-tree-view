import { Component } from '@angular/core';
import { TreeView } from './models/tree-view.model';
import { TreeNode } from './models/tree-node.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'carbon-tree-view';
    public mockData: TreeNode[] = [{
        id: '1',
        value: 'Level 1 (leaf)',
        label: 'Level 1 (leaf)',
        renderIcon: 'Document'
    }, {
        id: '2',
        value: 'Level 1 (leaf)',
        label: 'Level 1 (leaf)',
        renderIcon: 'Document'
    }, {
        id: '3',
        value: 'Level 1 (branch)',
        label: 'Level 1 (branch)',
        renderIcon: 'Folder',
        isExpanded: false,
        children: [{
            id: '3-1',
            value: 'Level 2 (leaf)',
            label: 'Level 2 (leaf)',
            renderIcon: 'Document'
        }, {
            id: '3-2',
            value: 'Level 2 (leaf)',
            label: 'Level 2 (leaf)',
            renderIcon: 'Document'
        }]
    }, {
        id: '4',
        value: 'Level 1 (leaf)',
        label: 'Level 1 (leaf)',
        renderIcon: 'Document'
    }, {
        id: '5',
        value: 'Level 1 (branch)',
        label: 'Level 1 (branch)',
        renderIcon: 'Folder',
        isExpanded: true,
        children: [{
            id: '5-1',
            value: 'Level 2 (leaf)',
            label: 'Level 2 (leaf)',
            renderIcon: 'Document'
        }, {
            id: '5-2',
            value: 'Level 2 (leaf)',
            label: 'Level 2 (leaf)',
            renderIcon: 'Document'
        }, {
            id: '5-3',
            value: 'Level 2 (branch)',
            label: 'Level 2 (branch)',
            renderIcon: 'Folder',
            isExpanded: true,
            children: [{
                    id: '5-4',
                    value: 'Level 3 (leaf)',
                    label: 'Level 3 (leaf)',
                    renderIcon: 'Document'
                }, {
                    id: '5-5',
                    value: 'Level 3 (branch)',
                    label: 'Level 3 (branch)',
                    renderIcon: 'Folder',
                    isExpanded: true,
                    children: [{
                        id: '5-6',
                        value: 'Level 4 (leaf)',
                        label: 'Level 4 (leaf)',
                        renderIcon: 'Document'
                    }]
                }
            ]
        }]
    }, {
        id: '6',
        value: 'Level 1 (branch)',
        label: 'Level 1 (branch)',
        renderIcon: 'Folder',
        isExpanded: true,
        children: [{
            id: '6-1',
            value: 'Level 2 (leaf)',
            label: 'Level 2 (leaf)',
            renderIcon: 'Document'
        }, {
            id: '6-2',
            value: 'Level 2 (leaf)',
            label: 'Level 2 (leaf)',
            renderIcon: 'Document'
        }]
    }, {
        id: '7',
        value: 'Level 1 (branch)',
        label: 'Level 1 (branch)',
        disabled: true,
        renderIcon: 'Folder',
        isExpanded: true,
        children: [{
            id: '7-1',
            value: 'Level 2 (leaf)',
            label: 'Level 2 (leaf)',
            renderIcon: 'Document'
        }, {
            id: '7-2',
            value: 'Level 2 (leaf)',
            label: 'Level 2 (leaf)',
            renderIcon: 'Document'
        }, {
            id: '8',
            value: 'Level 2 (branch)',
            label: 'Level 2 (branch)',
            renderIcon: 'Folder',
            isExpanded: true,
            children: [{
                id: '8-1',
                value: 'Level 3 (leaf)',
                label: 'Level 3 (leaf)',
                renderIcon: 'Document'
                }, {
                id: '8-2',
                value: 'Level 3 (leaf)',
                label: 'Level 3 (leaf)',
                renderIcon: 'Document'
            }]
        }]
    }];

    public mockTreeView: TreeView = new TreeView(this.mockData);

}
