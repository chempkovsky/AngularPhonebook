


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhbkPhoneViewRVComponent } from './rvform/phbk-phone-view-r-v.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';

const rvllzPhbkPhoneView: {[key:string]: string} = {
} 

const routes: Routes = [
 {
    path: '',
    component: PhbkPhoneViewRVComponent,
    canActivate: [AppGlblSettingsServiceActivator],
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhbkPhoneViewRvRoutingModule { }


