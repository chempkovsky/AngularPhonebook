
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkPhoneViewSModule } from './phbk-phone-view-s.module';
import { PhbkPhoneViewRlistComponent } from './rlist/phbk-phone-view-rlist.component';







@NgModule({
    declarations: [
        PhbkPhoneViewRlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        PhbkPhoneViewSModule,





    ],
    exports: [
        PhbkPhoneViewRlistComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkPhoneViewRlModule { }


