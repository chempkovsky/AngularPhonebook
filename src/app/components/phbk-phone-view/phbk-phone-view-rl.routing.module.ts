


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhbkPhoneViewRlistComponent } from './rlist/phbk-phone-view-rlist.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';


const rllzPhbkPhoneView: {[key:string]: string} = {
} 


const routes: Routes = [
 {
    path: '',
    component: PhbkPhoneViewRlistComponent,
    canActivate: [AppGlblSettingsServiceActivator],
    children: [




    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhbkPhoneViewRlRoutingModule { }


