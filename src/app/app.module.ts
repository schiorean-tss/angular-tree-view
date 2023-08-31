import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UIShellModule, IconModule, ButtonModule } from 'carbon-components-angular';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { TreeViewService } from './services/treeview.service';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    TreeNodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    IconModule,
    ButtonModule
  ],
  providers: [TreeViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
