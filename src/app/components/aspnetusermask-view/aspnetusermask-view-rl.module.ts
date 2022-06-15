
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetusermaskViewSModule } from './aspnetusermask-view-s.module';
import { AspnetusermaskViewRlistComponent } from './rlist/aspnetusermask-view-rlist.component';







@NgModule({
    declarations: [
        AspnetusermaskViewRlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        AspnetusermaskViewSModule,





    ],
    exports: [
        AspnetusermaskViewRlistComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetusermaskViewRlModule { }


