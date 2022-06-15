


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhbkEnterpriseViewRAComponent } from './raform/phbk-enterprise-view-r-a.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';


const routes: Routes = [
 {
    path: '',
    component: PhbkEnterpriseViewRAComponent,
    canActivate: [AppGlblSettingsServiceActivator]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhbkEnterpriseViewRaRoutingModule { }


