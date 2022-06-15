
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkEnterpriseViewRVComponent } from './rvform/phbk-enterprise-view-r-v.component';


import { PhbkEnterpriseViewVModule } from './phbk-enterprise-view-v.module';





@NgModule({
    declarations: [
        PhbkEnterpriseViewRVComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        


        PhbkEnterpriseViewVModule,


    ],
    exports: [
        PhbkEnterpriseViewRVComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkEnterpriseViewRvModule { }


