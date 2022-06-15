
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkEnterpriseViewRAComponent } from './raform/phbk-enterprise-view-r-a.component';


import { PhbkEnterpriseViewAModule } from './phbk-enterprise-view-a.module';





@NgModule({
    declarations: [
        PhbkEnterpriseViewRAComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,


        PhbkEnterpriseViewAModule,


    ],
    exports: [
        PhbkEnterpriseViewRAComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkEnterpriseViewRaModule { }


