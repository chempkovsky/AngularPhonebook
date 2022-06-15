
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkPhoneTypeViewRVComponent } from './rvform/phbk-phone-type-view-r-v.component';


import { PhbkPhoneTypeViewVModule } from './phbk-phone-type-view-v.module';





@NgModule({
    declarations: [
        PhbkPhoneTypeViewRVComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        


        PhbkPhoneTypeViewVModule,


    ],
    exports: [
        PhbkPhoneTypeViewRVComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkPhoneTypeViewRvModule { }


