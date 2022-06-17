


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
        data: { isdtl: true, vn: 'PhbkDivisionView', va: 'l', ms: true, /* oltn: 'dloltnmPhbkEnterpriseView', */ np: '', fh: 2, mh: 10, sf: true, title: rdllzPhbkEnterpriseView['ListPhbkDivisionView'], hf: 'hf102',  dp: 2, uid: '359e691d77aa409c969c16b5688c0451' },
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


