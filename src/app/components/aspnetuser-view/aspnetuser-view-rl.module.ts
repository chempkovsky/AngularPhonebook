
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetuserViewSModule } from './aspnetuser-view-s.module';
import { AspnetuserViewRlistComponent } from './rlist/aspnetuser-view-rlist.component';







@NgModule({
    declarations: [
        AspnetuserViewRlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        AspnetuserViewSModule,





    ],
    exports: [
        AspnetuserViewRlistComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetuserViewRlModule { }


