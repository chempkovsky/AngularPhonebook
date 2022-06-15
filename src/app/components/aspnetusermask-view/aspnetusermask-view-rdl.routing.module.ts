


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AspnetusermaskViewRdlistComponent } from './rdlist/aspnetusermask-view-rdlist.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';

const rdllzaspnetusermaskView: {[key:string]: string} = {
} 

const routes: Routes = [
 {
    path: '',
    component: AspnetusermaskViewRdlistComponent,
    canActivate: [AppGlblSettingsServiceActivator],
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspnetusermaskViewRdlRoutingModule { }


