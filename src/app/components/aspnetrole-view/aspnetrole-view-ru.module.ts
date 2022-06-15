
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetroleViewRUComponent } from './ruform/aspnetrole-view-r-u.component';


import { AspnetroleViewUModule } from './aspnetrole-view-u.module';





@NgModule({
    declarations: [
        AspnetroleViewRUComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,


        AspnetroleViewUModule,


    ],
    exports: [
        AspnetroleViewRUComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetroleViewRuModule { }


