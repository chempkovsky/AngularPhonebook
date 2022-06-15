
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';


import { AspnetusermaskViewSModule } from './aspnetusermask-view-s.module';
import { AspnetusermaskViewRdlistComponent } from './rdlist/aspnetusermask-view-rdlist.component';





@NgModule({
    declarations: [
        AspnetusermaskViewRdlistComponent,

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
        AspnetusermaskViewRdlistComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetusermaskViewRdlModule { }


