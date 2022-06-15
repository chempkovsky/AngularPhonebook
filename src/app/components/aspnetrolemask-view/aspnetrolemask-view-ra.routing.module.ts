


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AspnetrolemaskViewRAComponent } from './raform/aspnetrolemask-view-r-a.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';


const routes: Routes = [
 {
    path: '',
    component: AspnetrolemaskViewRAComponent,
    canActivate: [AppGlblSettingsServiceActivator]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspnetrolemaskViewRaRoutingModule { }


