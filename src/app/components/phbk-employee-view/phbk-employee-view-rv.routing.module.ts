


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhbkEmployeeViewRVComponent } from './rvform/phbk-employee-view-r-v.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';

const rvllzPhbkEmployeeView: {[key:string]: string} = {
        'ViewPhbkPhoneView': $localize`:View Phones@@rvllzPhbkEmployeeView.ViewPhbkPhoneView:View Phone`,
        'AddPhbkPhoneView': $localize`:Add Phone  @@rvllzPhbkEmployeeView.AddPhbkPhoneView:Add Phone`,
        'UpdatePhbkPhoneView': $localize`:Update Phone  @@rvllzPhbkEmployeeView.UpdatePhbkPhoneView:Update Phone`,
        'DeletePhbkPhoneView': $localize`:Delete Phone  @@rvllzPhbkEmployeeView.DeletePhbkPhoneView:Delete Phone`,
        'ListPhbkPhoneView': $localize`:Phones  @@rvllzPhbkEmployeeView.ListPhbkPhoneView:Phones`,
} 

const routes: Routes = [
 {
    path: '',
    component: PhbkEmployeeViewRVComponent,
    canActivate: [AppGlblSettingsServiceActivator],
    children: [

//
// Info: Root Master View  [PhbkEmployeeView] 
// Info: Detail View  [PhbkPhoneView] 
//
    { 
        // outlet: 'oltnmPhbkEmployeeView',
        // path: 'oltnmPhbkEmployeeView2ViewPhbkPhoneView/:hf103/:id103', 
        path: 'oltnmPhbkEmployeeView2PhbkPhoneView/:hf102/ViewPhbkPhoneView/:hf103/:id103', 
        loadChildren: () => import('./../phbk-phone-view/phbk-phone-view-rv-lazy.routing.module').then(m => m.PhbkPhoneViewRvLazyRoutingModule),
        data: { isdtl: true, vn: 'PhbkPhoneView', va: 'v', /* oltp: 'oltnmPhbkEmployeeView2PhbkPhoneView',  oltn: 'oltnmPhbkEmployeeView', */ np: '', /* sf: true, */ title: rvllzPhbkEmployeeView['ViewPhbkPhoneView'], hf: 'hf103',  id: 'id103', dp: 3},
        canActivate: [AppGlblSettingsServiceActivator],
    },

    { 
        // outlet: 'oltnmPhbkEmployeeView',
        // path: 'oltnmPhbkEmployeeView2AddPhbkPhoneView/:hf103', 
        path: 'oltnmPhbkEmployeeView2PhbkPhoneView/:hf102/AddPhbkPhoneView/:hf103', 
        loadChildren: () => import('./../phbk-phone-view/phbk-phone-view-ra-lazy.routing.module').then(m => m.PhbkPhoneViewRaLazyRoutingModule),
        data: {  isdtl: true, vn: 'PhbkPhoneView', va: 'a', /* oltp: 'oltnmPhbkEmployeeView2PhbkPhoneView',  oltn: 'oltnmPhbkEmployeeView', */ np: '', /* sf: true, */ title: rvllzPhbkEmployeeView['AddPhbkPhoneView'], hf: 'hf103',  dp: 3},
        canActivate: [AppGlblSettingsServiceActivator],
    },

    { 
        // outlet: 'oltnmPhbkEmployeeView',
        // path: 'oltnmPhbkEmployeeView2UpdPhbkPhoneView/:hf103/:id103', 
        path: 'oltnmPhbkEmployeeView2PhbkPhoneView/:hf102/UpdPhbkPhoneView/:hf103/:id103', 
        loadChildren: () => import('./../phbk-phone-view/phbk-phone-view-ru-lazy.routing.module').then(m => m.PhbkPhoneViewRuLazyRoutingModule),
        data: {  isdtl: true, vn: 'PhbkPhoneView', va: 'u', /* oltp: 'oltnmPhbkEmployeeView2PhbkPhoneView',  oltn: 'oltnmPhbkEmployeeView', */ np: '', /* sf: true, */ title: rvllzPhbkEmployeeView['UpdatePhbkPhoneView'], hf: 'hf103',  id: 'id103',  dp: 3},
        canActivate: [AppGlblSettingsServiceActivator],
    },

    { 
        // outlet: 'oltnmPhbkEmployeeView',
        // path: 'oltnmPhbkEmployeeView2DelPhbkPhoneView/:hf103/:id103', 
        path: 'oltnmPhbkEmployeeView2PhbkPhoneView/:hf102/DelPhbkPhoneView/:hf103/:id103', 
        loadChildren: () => import('./../phbk-phone-view/phbk-phone-view-rd-lazy.routing.module').then(m => m.PhbkPhoneViewRdLazyRoutingModule),
        data: {  isdtl: true, vn: 'PhbkPhoneView', va: 'd', /* oltp: 'oltnmPhbkEmployeeView2PhbkPhoneView', oltn: 'oltnmPhbkEmployeeView', */ np: '', /* sf: true, */ title: rvllzPhbkEmployeeView['DeletePhbkPhoneView'], hf: 'hf103',  id: 'id103',  dp: 3},
        canActivate: [AppGlblSettingsServiceActivator],
    },

    { 
        // outlet: 'oltnmPhbkEmployeeView',
        path: 'oltnmPhbkEmployeeView2PhbkPhoneView/:hf102', 
        loadChildren: () => import('./../phbk-phone-view/phbk-phone-view-rl.routing.module').then(m => m.PhbkPhoneViewRlRoutingModule),
        data: {  isdtl: true, vn: 'PhbkPhoneView', va: 'l', ms: true,  /* oltn: 'oltnmPhbkEmployeeView', */ np: '', fh: 2, mh: 10, sf: true, title: rvllzPhbkEmployeeView['ListPhbkPhoneView'], hf: 'hf102',  dp: 2, uid: 'e5a78c5fe3ff4429a9d7e7614960a49d' },
        canActivate: [AppGlblSettingsServiceActivator],
    },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhbkEmployeeViewRvRoutingModule { }


