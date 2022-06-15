


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AspnetuserrolesViewRVComponent } from './rvform/aspnetuserroles-view-r-v.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';

const rvllzaspnetuserrolesView: {[key:string]: string} = {
} 

const routes: Routes = [
 {
    path: '',
    component: AspnetuserrolesViewRVComponent,
    canActivate: [AppGlblSettingsServiceActivator],
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspnetuserrolesViewRvRoutingModule { }


