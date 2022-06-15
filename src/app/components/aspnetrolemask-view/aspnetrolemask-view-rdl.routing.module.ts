


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AspnetrolemaskViewRdlistComponent } from './rdlist/aspnetrolemask-view-rdlist.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';

const rdllzaspnetrolemaskView: {[key:string]: string} = {
} 

const routes: Routes = [
 {
    path: '',
    component: AspnetrolemaskViewRdlistComponent,
    canActivate: [AppGlblSettingsServiceActivator],
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspnetrolemaskViewRdlRoutingModule { }


