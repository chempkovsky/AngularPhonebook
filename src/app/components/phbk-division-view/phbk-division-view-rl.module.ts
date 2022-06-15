
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkDivisionViewSModule } from './phbk-division-view-s.module';
import { PhbkDivisionViewRlistComponent } from './rlist/phbk-division-view-rlist.component';







@NgModule({
    declarations: [
        PhbkDivisionViewRlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        PhbkDivisionViewSModule,





    ],
    exports: [
        PhbkDivisionViewRlistComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkDivisionViewRlModule { }


