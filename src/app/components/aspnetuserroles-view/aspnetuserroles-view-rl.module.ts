
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetuserrolesViewSModule } from './aspnetuserroles-view-s.module';
import { AspnetuserrolesViewRlistComponent } from './rlist/aspnetuserroles-view-rlist.component';







@NgModule({
    declarations: [
        AspnetuserrolesViewRlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        AspnetuserrolesViewSModule,





    ],
    exports: [
        AspnetuserrolesViewRlistComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetuserrolesViewRlModule { }


