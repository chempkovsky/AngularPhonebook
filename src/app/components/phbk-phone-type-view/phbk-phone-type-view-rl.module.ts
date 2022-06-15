
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkPhoneTypeViewSModule } from './phbk-phone-type-view-s.module';
import { PhbkPhoneTypeViewRlistComponent } from './rlist/phbk-phone-type-view-rlist.component';







@NgModule({
    declarations: [
        PhbkPhoneTypeViewRlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        PhbkPhoneTypeViewSModule,





    ],
    exports: [
        PhbkPhoneTypeViewRlistComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkPhoneTypeViewRlModule { }


