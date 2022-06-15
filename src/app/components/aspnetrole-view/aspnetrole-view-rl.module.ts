
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetroleViewSModule } from './aspnetrole-view-s.module';
import { AspnetroleViewRlistComponent } from './rlist/aspnetrole-view-rlist.component';







@NgModule({
    declarations: [
        AspnetroleViewRlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        AspnetroleViewSModule,





    ],
    exports: [
        AspnetroleViewRlistComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetroleViewRlModule { }


