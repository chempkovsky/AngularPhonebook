
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetuserrolesViewRUComponent } from './ruform/aspnetuserroles-view-r-u.component';


import { AspnetuserrolesViewUModule } from './aspnetuserroles-view-u.module';


import { AspnetuserViewSModule } from './../aspnetuser-view/aspnetuser-view-s.module';



@NgModule({
    declarations: [
        AspnetuserrolesViewRUComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,

        AspnetuserViewSModule,

        AspnetuserrolesViewUModule,


    ],
    exports: [
        AspnetuserrolesViewRUComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetuserrolesViewRuModule { }


