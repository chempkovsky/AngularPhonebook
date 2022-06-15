
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkPhoneViewRVComponent } from './rvform/phbk-phone-view-r-v.component';


import { PhbkPhoneViewVModule } from './phbk-phone-view-v.module';


import { PhbkEmployeeViewSModule } from './../phbk-employee-view/phbk-employee-view-s.module';
import { PhbkDivisionViewSModule } from './../phbk-division-view/phbk-division-view-s.module';
import { PhbkEnterpriseViewSModule } from './../phbk-enterprise-view/phbk-enterprise-view-s.module';



@NgModule({
    declarations: [
        PhbkPhoneViewRVComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        

        PhbkEmployeeViewSModule,
        PhbkDivisionViewSModule,
        PhbkEnterpriseViewSModule,

        PhbkPhoneViewVModule,


    ],
    exports: [
        PhbkPhoneViewRVComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkPhoneViewRvModule { }


