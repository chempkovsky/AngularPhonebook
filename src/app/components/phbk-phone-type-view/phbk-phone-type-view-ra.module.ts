
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkPhoneTypeViewRAComponent } from './raform/phbk-phone-type-view-r-a.component';


import { PhbkPhoneTypeViewAModule } from './phbk-phone-type-view-a.module';





@NgModule({
    declarations: [
        PhbkPhoneTypeViewRAComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,


        PhbkPhoneTypeViewAModule,


    ],
    exports: [
        PhbkPhoneTypeViewRAComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkPhoneTypeViewRaModule { }


