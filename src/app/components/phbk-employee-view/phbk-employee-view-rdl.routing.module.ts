


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhbkEmployeeViewRdlistComponent } from './rdlist/phbk-employee-view-rdlist.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';

const rdllzPhbkEmployeeView: {[key:string]: string} = {
        'ListPhbkPhoneView': $localize`:Phones@@rdllzPhbkEmployeeView.PhbkPhoneView:Phones`,
} 

const routes: Routes = [
 {
    path: '',
    component: PhbkEmployeeViewRdlistComponent,
    canActivate: [AppGlblSettingsServiceActivator],
    children: [

//
// Info: Root Master View  [PhbkEmployeeView] 
// Info: Detail View  [PhbkPhoneView] 
//
    { 
//        outlet: 'dloltnmPhbkEmployeeView',
        path: 'dloltnmPhbkEmployeeView2PhbkPhoneView/:hf102', 
        loadChildren: () => import('./../phbk-phone-view/phbk-phone-view-rdl-lazy.routing.module').then(m => m.PhbkPhoneViewRdlLazyRoutingModule),
        data: { isdtl: true, vn: 'PhbkPhoneView', va: 'l', ms: true, /* oltn: 'dloltnmPhbkEmployeeView', */ np: '', fh: 2, mh: 10, sf: true, title: rdllzPhbkEmployeeView['ListPhbkPhoneView'], hf: 'hf102',  dp: 2, uid: '838e3751c22a4de98a10d1f9f7aeccdc' },
        canActivate: [AppGlblSettingsServiceActivator],
    },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhbkEmployeeViewRdlRoutingModule { }


