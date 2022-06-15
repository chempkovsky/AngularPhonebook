
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkEnterpriseViewRDComponent } from './rdform/phbk-enterprise-view-r-d.component';


import { PhbkEnterpriseViewDModule } from './phbk-enterprise-view-d.module';





@NgModule({
    declarations: [
        PhbkEnterpriseViewRDComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,


        PhbkEnterpriseViewDModule,


    ],
    exports: [
        PhbkEnterpriseViewRDComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkEnterpriseViewRdModule { }


