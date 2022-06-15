
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkPhoneTypeViewRDComponent } from './rdform/phbk-phone-type-view-r-d.component';


import { PhbkPhoneTypeViewDModule } from './phbk-phone-type-view-d.module';





@NgModule({
    declarations: [
        PhbkPhoneTypeViewRDComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,


        PhbkPhoneTypeViewDModule,


    ],
    exports: [
        PhbkPhoneTypeViewRDComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkPhoneTypeViewRdModule { }


