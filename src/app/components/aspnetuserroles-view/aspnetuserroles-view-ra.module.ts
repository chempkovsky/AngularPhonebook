
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetuserrolesViewRAComponent } from './raform/aspnetuserroles-view-r-a.component';


import { AspnetuserrolesViewAModule } from './aspnetuserroles-view-a.module';


import { AspnetuserViewSModule } from './../aspnetuser-view/aspnetuser-view-s.module';



@NgModule({
    declarations: [
        AspnetuserrolesViewRAComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,

        AspnetuserViewSModule,

        AspnetuserrolesViewAModule,


    ],
    exports: [
        AspnetuserrolesViewRAComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetuserrolesViewRaModule { }


