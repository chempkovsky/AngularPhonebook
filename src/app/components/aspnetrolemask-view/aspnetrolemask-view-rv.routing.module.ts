


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AspnetrolemaskViewRVComponent } from './rvform/aspnetrolemask-view-r-v.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';

const rvllzaspnetrolemaskView: {[key:string]: string} = {
} 

const routes: Routes = [
 {
    path: '',
    component: AspnetrolemaskViewRVComponent,
    canActivate: [AppGlblSettingsServiceActivator],
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspnetrolemaskViewRvRoutingModule { }


