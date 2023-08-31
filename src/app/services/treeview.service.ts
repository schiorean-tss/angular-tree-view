import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TreeViewService {
    private selected: string[] = [];

    public getSelectedNode(){
        return this.selected[0];
    }

    public setSelectedNode(id: string){
        this.selected = [];
        this.selected = [...this.selected, id];
    }
}