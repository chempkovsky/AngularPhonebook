
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkEmployeeViewSModule } from './phbk-employee-view-s.module';
import { PhbkEmployeeViewRlistComponent } from './rlist/phbk-employee-view-rlist.component';







@NgModule({
    declarations: [
        PhbkEmployeeViewRlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        PhbkEmployeeViewSModule,





    ],
    exports: [
        PhbkEmployeeViewRlistComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkEmployeeViewRlModule { }


