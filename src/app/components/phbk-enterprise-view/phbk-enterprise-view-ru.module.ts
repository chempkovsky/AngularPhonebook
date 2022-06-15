
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkEnterpriseViewRUComponent } from './ruform/phbk-enterprise-view-r-u.component';


import { PhbkEnterpriseViewUModule } from './phbk-enterprise-view-u.module';





@NgModule({
    declarations: [
        PhbkEnterpriseViewRUComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,


        PhbkEnterpriseViewUModule,


    ],
    exports: [
        PhbkEnterpriseViewRUComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkEnterpriseViewRuModule { }


