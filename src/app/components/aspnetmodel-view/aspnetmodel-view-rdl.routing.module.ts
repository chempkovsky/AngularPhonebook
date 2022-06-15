


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AspnetmodelViewRdlistComponent } from './rdlist/aspnetmodel-view-rdlist.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';

const rdllzaspnetmodelView: {[key:string]: string} = {
        'ListaspnetusermaskView': $localize`:User Masks@@rdllzaspnetmodelView.aspnetusermaskView:User Masks`,
        'ListaspnetrolemaskView': $localize`:Role Masks@@rdllzaspnetmodelView.aspnetrolemaskView:Role Masks`,
} 

const routes: Routes = [
 {
    path: '',
    component: AspnetmodelViewRdlistComponent,
    canActivate: [AppGlblSettingsServiceActivator],
    children: [

//
// Info: Root Master View  [aspnetmodelView] 
// Info: Detail View  [aspnetusermaskView] 
//
    { 
//        outlet: 'dloltnmaspnetmodelView',
        path: 'dloltnmaspnetmodelView2aspnetusermaskView/:hf102', 
        loadChildren: () => import('./../aspnetusermask-view/aspnetusermask-view-rdl-lazy.routing.module').then(m => m.AspnetusermaskViewRdlLazyRoutingModule),
        data: { isdtl: true, vn: 'aspnetusermaskView', va: 'l', ms: true, /* oltn: 'dloltnmaspnetmodelView', */ np: '', fh: 2, mh: 10, sf: true, title: rdllzaspnetmodelView['ListaspnetusermaskView'], hf: 'hf102',  dp: 2, uid: '8a6febb52bc547cc9535224773c5deee' },
        canActivate: [AppGlblSettingsServiceActivator],
    },


//
// Info: Root Master View  [aspnetmodelView] 
// Info: Detail View  [aspnetrolemaskView] 
//
    { 
//        outlet: 'dloltnmaspnetmodelView',
        path: 'dloltnmaspnetmodelView2aspnetrolemaskView/:hf102', 
        loadChildren: () => import('./../aspnetrolemask-view/aspnetrolemask-view-rdl-lazy.routing.module').then(m => m.AspnetrolemaskViewRdlLazyRoutingModule),
        data: { isdtl: true, vn: 'aspnetrolemaskView', va: 'l', ms: true, /* oltn: 'dloltnmaspnetmodelView', */ np: '', fh: 2, mh: 10, sf: true, title: rdllzaspnetmodelView['ListaspnetrolemaskView'], hf: 'hf102',  dp: 2, uid: 'fe9b20db0c4c42529ce8f6c338d695e9' },
        canActivate: [AppGlblSettingsServiceActivator],
    },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspnetmodelViewRdlRoutingModule { }


