
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkDivisionViewRUComponent } from './ruform/phbk-division-view-r-u.component';


import { PhbkDivisionViewUModule } from './phbk-division-view-u.module';


import { PhbkEnterpriseViewSModule } from './../phbk-enterprise-view/phbk-enterprise-view-s.module';



@NgModule({
    declarations: [
        PhbkDivisionViewRUComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,

        PhbkEnterpriseViewSModule,

        PhbkDivisionViewUModule,


    ],
    exports: [
        PhbkDivisionViewRUComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkDivisionViewRuModule { }


