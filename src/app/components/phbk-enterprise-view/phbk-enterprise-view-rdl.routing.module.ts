


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhbkEnterpriseViewRdlistComponent } from './rdlist/phbk-enterprise-view-rdlist.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';

const rdllzPhbkEnterpriseView: {[key:string]: string} = {
        'ListPhbkDivisionView': $localize`:Divisions@@rdllzPhbkEnterpriseView.PhbkDivisionView:Divisions`,
} 

const routes: Routes = [
 {
    path: '',
    component: PhbkEnterpriseViewRdlistComponent,
    canActivate: [AppGlblSettingsServiceActivator],
    children: [

//
// Info: Root Master View  [PhbkEnterpriseView] 
// Info: Detail View  [PhbkDivisionView] 
//
    { 
//        outlet: 'dloltnmPhbkEnterpriseView',
        path: 'dloltnmPhbkEnterpriseView2PhbkDivisionView/:hf102', 
        loadChildren: () => import('./../phbk-division-view/phbk-division-view-rdl-lazy.routing.module').then(m => m.PhbkDivisionViewRdlLazyRoutingModule),
        data: { isdtl: true, vn: 'PhbkDivisionView', va: 'l', ms: true, /* oltn: 'dloltnmPhbkEnterpriseView', */ np: '', fh: 2, mh: 10, sf: true, title: rdllzPhbkEnterpriseView['ListPhbkDivisionView'], hf: 'hf102',  dp: 2, uid: '2e4a91c6f4e146cca08d370c48f859f3' },
        canActivate: [AppGlblSettingsServiceActivator],
    },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhbkEnterpriseViewRdlRoutingModule { }


