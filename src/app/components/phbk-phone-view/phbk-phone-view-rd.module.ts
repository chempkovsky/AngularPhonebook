
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkPhoneViewRDComponent } from './rdform/phbk-phone-view-r-d.component';


import { PhbkPhoneViewDModule } from './phbk-phone-view-d.module';


import { PhbkEmployeeViewSModule } from './../phbk-employee-view/phbk-employee-view-s.module';
import { PhbkDivisionViewSModule } from './../phbk-division-view/phbk-division-view-s.module';
import { PhbkEnterpriseViewSModule } from './../phbk-enterprise-view/phbk-enterprise-view-s.module';



@NgModule({
    declarations: [
        PhbkPhoneViewRDComponent,
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

        PhbkPhoneViewDModule,


    ],
    exports: [
        PhbkPhoneViewRDComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkPhoneViewRdModule { }


