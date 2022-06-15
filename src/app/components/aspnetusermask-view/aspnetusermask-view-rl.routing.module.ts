


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AspnetusermaskViewRlistComponent } from './rlist/aspnetusermask-view-rlist.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';


const rllzaspnetusermaskView: {[key:string]: string} = {
} 


const routes: Routes = [
 {
    path: '',
    component: AspnetusermaskViewRlistComponent,
    canActivate: [AppGlblSettingsServiceActivator],
    children: [




    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspnetusermaskViewRlRoutingModule { }


