
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkDivisionViewRVComponent } from './rvform/phbk-division-view-r-v.component';


import { PhbkDivisionViewVModule } from './phbk-division-view-v.module';


import { PhbkEnterpriseViewSModule } from './../phbk-enterprise-view/phbk-enterprise-view-s.module';



@NgModule({
    declarations: [
        PhbkDivisionViewRVComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        

        PhbkEnterpriseViewSModule,

        PhbkDivisionViewVModule,


    ],
    exports: [
        PhbkDivisionViewRVComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkDivisionViewRvModule { }


