


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AspnetuserrolesViewRlistComponent } from './rlist/aspnetuserroles-view-rlist.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';


const rllzaspnetuserrolesView: {[key:string]: string} = {
} 


const routes: Routes = [
 {
    path: '',
    component: AspnetuserrolesViewRlistComponent,
    canActivate: [AppGlblSettingsServiceActivator],
    children: [




    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspnetuserrolesViewRlRoutingModule { }


