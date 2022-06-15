


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AspnetroleViewRUComponent } from './ruform/aspnetrole-view-r-u.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';


const routes: Routes = [
 {
    path: '',
    component: AspnetroleViewRUComponent,
    canActivate: [AppGlblSettingsServiceActivator]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspnetroleViewRuRoutingModule { }


