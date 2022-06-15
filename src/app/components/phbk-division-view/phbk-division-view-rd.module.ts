
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkDivisionViewRDComponent } from './rdform/phbk-division-view-r-d.component';


import { PhbkDivisionViewDModule } from './phbk-division-view-d.module';


import { PhbkEnterpriseViewSModule } from './../phbk-enterprise-view/phbk-enterprise-view-s.module';



@NgModule({
    declarations: [
        PhbkDivisionViewRDComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,

        PhbkEnterpriseViewSModule,

        PhbkDivisionViewDModule,


    ],
    exports: [
        PhbkDivisionViewRDComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkDivisionViewRdModule { }


