
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkDivisionViewRAComponent } from './raform/phbk-division-view-r-a.component';


import { PhbkDivisionViewAModule } from './phbk-division-view-a.module';


import { PhbkEnterpriseViewSModule } from './../phbk-enterprise-view/phbk-enterprise-view-s.module';



@NgModule({
    declarations: [
        PhbkDivisionViewRAComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,

        PhbkEnterpriseViewSModule,

        PhbkDivisionViewAModule,


    ],
    exports: [
        PhbkDivisionViewRAComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkDivisionViewRaModule { }


