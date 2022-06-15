
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkEmployeeViewRAComponent } from './raform/phbk-employee-view-r-a.component';


import { PhbkEmployeeViewAModule } from './phbk-employee-view-a.module';


import { PhbkDivisionViewSModule } from './../phbk-division-view/phbk-division-view-s.module';
import { PhbkEnterpriseViewSModule } from './../phbk-enterprise-view/phbk-enterprise-view-s.module';



@NgModule({
    declarations: [
        PhbkEmployeeViewRAComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,

        PhbkDivisionViewSModule,
        PhbkEnterpriseViewSModule,

        PhbkEmployeeViewAModule,


    ],
    exports: [
        PhbkEmployeeViewRAComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkEmployeeViewRaModule { }


