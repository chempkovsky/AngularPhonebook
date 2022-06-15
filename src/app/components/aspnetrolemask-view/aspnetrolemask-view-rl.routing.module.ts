


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AspnetrolemaskViewRlistComponent } from './rlist/aspnetrolemask-view-rlist.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';


const rllzaspnetrolemaskView: {[key:string]: string} = {
} 


const routes: Routes = [
 {
    path: '',
    component: AspnetrolemaskViewRlistComponent,
    canActivate: [AppGlblSettingsServiceActivator],
    children: [




    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspnetrolemaskViewRlRoutingModule { }


