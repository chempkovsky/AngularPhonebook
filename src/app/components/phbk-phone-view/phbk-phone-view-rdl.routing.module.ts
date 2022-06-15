


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhbkPhoneViewRdlistComponent } from './rdlist/phbk-phone-view-rdlist.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';

const rdllzPhbkPhoneView: {[key:string]: string} = {
} 

const routes: Routes = [
 {
    path: '',
    component: PhbkPhoneViewRdlistComponent,
    canActivate: [AppGlblSettingsServiceActivator],
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhbkPhoneViewRdlRoutingModule { }


