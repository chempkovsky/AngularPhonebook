
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetuserViewRUComponent } from './ruform/aspnetuser-view-r-u.component';


import { AspnetuserViewUModule } from './aspnetuser-view-u.module';





@NgModule({
    declarations: [
        AspnetuserViewRUComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,


        AspnetuserViewUModule,


    ],
    exports: [
        AspnetuserViewRUComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetuserViewRuModule { }


