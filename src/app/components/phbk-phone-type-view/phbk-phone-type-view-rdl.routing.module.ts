


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhbkPhoneTypeViewRdlistComponent } from './rdlist/phbk-phone-type-view-rdlist.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';

const rdllzPhbkPhoneTypeView: {[key:string]: string} = {
        'ListPhbkPhoneView': $localize`:Phones@@rdllzPhbkPhoneTypeView.PhbkPhoneView:Phones`,
} 

const routes: Routes = [
 {
    path: '',
    component: PhbkPhoneTypeViewRdlistComponent,
    canActivate: [AppGlblSettingsServiceActivator],
    children: [

//
// Info: Root Master View  [PhbkPhoneTypeView] 
// Info: Detail View  [PhbkPhoneView] 
//
    { 
//        outlet: 'dloltnmPhbkPhoneTypeView',
        path: 'dloltnmPhbkPhoneTypeView2PhbkPhoneView/:hf102', 
        loadChildren: () => import('./../phbk-phone-view/phbk-phone-view-rdl-lazy.routing.module').then(m => m.PhbkPhoneViewRdlLazyRoutingModule),
        data: { isdtl: true, vn: 'PhbkPhoneView', va: 'l', ms: true, /* oltn: 'dloltnmPhbkPhoneTypeView', */ np: '', fh: 2, mh: 10, sf: true, title: rdllzPhbkPhoneTypeView['ListPhbkPhoneView'], hf: 'hf102',  dp: 2, uid: '2c394491bfcb463eb01313c82291b500' },
        canActivate: [AppGlblSettingsServiceActivator],
    },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhbkPhoneTypeViewRdlRoutingModule { }


