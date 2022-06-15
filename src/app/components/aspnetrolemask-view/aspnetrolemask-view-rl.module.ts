
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetrolemaskViewSModule } from './aspnetrolemask-view-s.module';
import { AspnetrolemaskViewRlistComponent } from './rlist/aspnetrolemask-view-rlist.component';







@NgModule({
    declarations: [
        AspnetrolemaskViewRlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        AspnetrolemaskViewSModule,





    ],
    exports: [
        AspnetrolemaskViewRlistComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetrolemaskViewRlModule { }


