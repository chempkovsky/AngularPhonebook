
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkPhoneTypeViewRUComponent } from './ruform/phbk-phone-type-view-r-u.component';


import { PhbkPhoneTypeViewUModule } from './phbk-phone-type-view-u.module';





@NgModule({
    declarations: [
        PhbkPhoneTypeViewRUComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,


        PhbkPhoneTypeViewUModule,


    ],
    exports: [
        PhbkPhoneTypeViewRUComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkPhoneTypeViewRuModule { }


