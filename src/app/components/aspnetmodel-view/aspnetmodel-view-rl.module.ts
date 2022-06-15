
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetmodelViewSModule } from './aspnetmodel-view-s.module';
import { AspnetmodelViewRlistComponent } from './rlist/aspnetmodel-view-rlist.component';







@NgModule({
    declarations: [
        AspnetmodelViewRlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        AspnetmodelViewSModule,





    ],
    exports: [
        AspnetmodelViewRlistComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetmodelViewRlModule { }


