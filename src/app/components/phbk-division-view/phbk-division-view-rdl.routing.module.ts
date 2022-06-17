


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhbkDivisionViewRdlistComponent } from './rdlist/phbk-division-view-rdlist.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';

const rdllzPhbkDivisionView: {[key:string]: string} = {
        'ListPhbkEmployeeView': $localize`:Employees@@rdllzPhbkDivisionView.PhbkEmployeeView:Employees`,
} 

const routes: Routes = [
 {
    path: '',
    component: PhbkDivisionViewRdlistComponent,
    canActivate: [AppGlblSettingsServiceActivator],
    children: [

//
// Info: Root Master View  [PhbkDivisionView] 
// Info: Detail View  [PhbkEmployeeView] 
//
    { 
//        outlet: 'dloltnmPhbkDivisionView',
        path: 'dloltnmPhbkDivisionView2PhbkEmployeeView/:hf102', 
        loadChildren: () => import('./../phbk-employee-view/phbk-employee-view-rdl-lazy.routing.module').then(m => m.PhbkEmployeeViewRdlLazyRoutingModule),
        data: { isdtl: true, vn: 'PhbkEmployeeView', va: 'l', ms: true, /* oltn: 'dloltnmPhbkDivisionView', */ np: '', fh: 2, mh: 10, sf: true, title: rdllzPhbkDivisionView['ListPhbkEmployeeView'], hf: 'hf102',  dp: 2, uid: '1eb30488fb144a8fb5280c5befe0ce06' },
        canActivate: [AppGlblSettingsServiceActivator],
    },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhbkDivisionViewRdlRoutingModule { }


