
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetuserrolesViewRDComponent } from './rdform/aspnetuserroles-view-r-d.component';


import { AspnetuserrolesViewDModule } from './aspnetuserroles-view-d.module';


import { AspnetuserViewSModule } from './../aspnetuser-view/aspnetuser-view-s.module';



@NgModule({
    declarations: [
        AspnetuserrolesViewRDComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,

        AspnetuserViewSModule,

        AspnetuserrolesViewDModule,


    ],
    exports: [
        AspnetuserrolesViewRDComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetuserrolesViewRdModule { }


