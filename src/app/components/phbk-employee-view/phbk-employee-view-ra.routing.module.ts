


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhbkEmployeeViewRAComponent } from './raform/phbk-employee-view-r-a.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';


const routes: Routes = [
 {
    path: '',
    component: PhbkEmployeeViewRAComponent,
    canActivate: [AppGlblSettingsServiceActivator]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhbkEmployeeViewRaRoutingModule { }


