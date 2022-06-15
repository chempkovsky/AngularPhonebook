
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkPhoneViewRAComponent } from './raform/phbk-phone-view-r-a.component';


import { PhbkPhoneViewAModule } from './phbk-phone-view-a.module';


import { PhbkEmployeeViewSModule } from './../phbk-employee-view/phbk-employee-view-s.module';
import { PhbkDivisionViewSModule } from './../phbk-division-view/phbk-division-view-s.module';
import { PhbkEnterpriseViewSModule } from './../phbk-enterprise-view/phbk-enterprise-view-s.module';



@NgModule({
    declarations: [
        PhbkPhoneViewRAComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,

        PhbkEmployeeViewSModule,
        PhbkDivisionViewSModule,
        PhbkEnterpriseViewSModule,

        PhbkPhoneViewAModule,


    ],
    exports: [
        PhbkPhoneViewRAComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkPhoneViewRaModule { }


