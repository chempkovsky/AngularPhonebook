


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AspnetuserrolesViewRdlistComponent } from './rdlist/aspnetuserroles-view-rdlist.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';

const rdllzaspnetuserrolesView: {[key:string]: string} = {
} 

const routes: Routes = [
 {
    path: '',
    component: AspnetuserrolesViewRdlistComponent,
    canActivate: [AppGlblSettingsServiceActivator],
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspnetuserrolesViewRdlRoutingModule { }


