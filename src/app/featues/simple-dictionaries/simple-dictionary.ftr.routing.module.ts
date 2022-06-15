
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGlblSettingsService } from './../../shared/services/app-glbl-settings.service';
import { AppGlblSettingsServiceActivator } from './../../shared/services/app-glbl-settings.service';
import { SimpleDictionaryFtrComponent } from './simple-dictionary.ftr.component';

const routes: Routes = [
    { path: '',   redirectTo: 'PhbkPhoneTypeView', pathMatch: 'full' },
    {
        path: '',
        component: SimpleDictionaryFtrComponent,
        canActivate: [AppGlblSettingsServiceActivator],
        canActivateChild: [AppGlblSettingsService],
        children: [
// r-routing

//
// Info: Root Master View  [PhbkPhoneTypeView] 
// Info: Detail View  [PhbkPhoneTypeView] 
//
    { path: 'PhbkPhoneTypeView/ViewPhbkPhoneTypeView/:hf2/:id2', 
        loadChildren: () => import('./../../components/phbk-phone-type-view/phbk-phone-type-view-rv-lazy.routing.module').then(m => m.PhbkPhoneTypeViewRvLazyRoutingModule),
        data: { vn: 'PhbkPhoneTypeView', va: 'v', /* sf: true,  title: 'View Phone Type', */ hf: 'hf2',  id: 'id2', dp: 2}},

    { path: 'PhbkPhoneTypeView/AddPhbkPhoneTypeView/:hf2', 
        loadChildren: () => import('./../../components/phbk-phone-type-view/phbk-phone-type-view-ra-lazy.routing.module').then(m => m.PhbkPhoneTypeViewRaLazyRoutingModule),
        data: { vn: 'PhbkPhoneTypeView', va: 'a', /* sf: true,  title: 'Add Phone Type', */ hf: 'hf2',  dp: 2}},

    { path: 'PhbkPhoneTypeView/UpdPhbkPhoneTypeView/:hf2/:id2', 
        loadChildren: () => import('./../../components/phbk-phone-type-view/phbk-phone-type-view-ru-lazy.routing.module').then(m => m.PhbkPhoneTypeViewRuLazyRoutingModule),
        data: { vn: 'PhbkPhoneTypeView', va: 'u', /* sf: true,  title: 'Update Phone Type', */ hf: 'hf2',  id: 'id2',  dp: 2}},

    { path: 'PhbkPhoneTypeView/DelPhbkPhoneTypeView/:hf2/:id2', 
        loadChildren: () => import('./../../components/phbk-phone-type-view/phbk-phone-type-view-rd-lazy.routing.module').then(m => m.PhbkPhoneTypeViewRdLazyRoutingModule),
        data: { vn: 'PhbkPhoneTypeView', va: 'd', /* sf: true, title: 'Delete Phone Type', */ hf: 'hf2',  id: 'id2',  dp: 2}},

    { path: 'PhbkPhoneTypeView', 
        loadChildren: () => import('./../../components/phbk-phone-type-view/phbk-phone-type-view-rl-lazy.routing.module').then(m => m.PhbkPhoneTypeViewRlLazyRoutingModule),
        data: { vn: 'PhbkPhoneTypeView', va: 'l', ms: true,  fh: 2, mh: 10, sf: true, /* title: 'Phone Types', */  dp: 1, uid: '16f4389359b743158ae3c6edf9c1b62b' }  },


// rd-routing
        ] // children: [...]

    },
]; // const routes: Routes = [...]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleDictionaryFtrRoutingModule { }


