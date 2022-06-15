


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AspnetuserViewRdlistComponent } from './rdlist/aspnetuser-view-rdlist.component';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';

const rdllzaspnetuserView: {[key:string]: string} = {
        'ListaspnetuserrolesView': $localize`:User Roles@@rdllzaspnetuserView.aspnetuserrolesView:User Roles`,
        'ListaspnetusermaskView': $localize`:User Masks@@rdllzaspnetuserView.aspnetusermaskView:User Masks`,
} 

const routes: Routes = [
 {
    path: '',
    component: AspnetuserViewRdlistComponent,
    canActivate: [AppGlblSettingsServiceActivator],
    children: [

//
// Info: Root Master View  [aspnetuserView] 
// Info: Detail View  [aspnetuserrolesView] 
//
    { 
//        outlet: 'dloltnmaspnetuserView',
        path: 'dloltnmaspnetuserView2aspnetuserrolesView/:hf102', 
        loadChildren: () => import('./../aspnetuserroles-view/aspnetuserroles-view-rdl-lazy.routing.module').then(m => m.AspnetuserrolesViewRdlLazyRoutingModule),
        data: { isdtl: true, vn: 'aspnetuserrolesView', va: 'l', ms: true, /* oltn: 'dloltnmaspnetuserView', */ np: '', fh: 2, mh: 10, sf: true, title: rdllzaspnetuserView['ListaspnetuserrolesView'], hf: 'hf102',  dp: 2, uid: '7edba9a6910e426f8cd3e62173a05fbd' },
        canActivate: [AppGlblSettingsServiceActivator],
    },


//
// Info: Root Master View  [aspnetuserView] 
// Info: Detail View  [aspnetusermaskView] 
//
    { 
//        outlet: 'dloltnmaspnetuserView',
        path: 'dloltnmaspnetuserView2aspnetusermaskView/:hf102', 
        loadChildren: () => import('./../aspnetusermask-view/aspnetusermask-view-rdl-lazy.routing.module').then(m => m.AspnetusermaskViewRdlLazyRoutingModule),
        data: { isdtl: true, vn: 'aspnetusermaskView', va: 'l', ms: true, /* oltn: 'dloltnmaspnetuserView', */ np: '', fh: 2, mh: 10, sf: true, title: rdllzaspnetuserView['ListaspnetusermaskView'], hf: 'hf102',  dp: 2, uid: '6d03fae0c1444d8a937ebafd152aa262' },
        canActivate: [AppGlblSettingsServiceActivator],
    },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspnetuserViewRdlRoutingModule { }


