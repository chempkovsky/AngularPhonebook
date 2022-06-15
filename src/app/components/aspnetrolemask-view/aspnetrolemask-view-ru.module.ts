
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetrolemaskViewRUComponent } from './ruform/aspnetrolemask-view-r-u.component';


import { AspnetrolemaskViewUModule } from './aspnetrolemask-view-u.module';





@NgModule({
    declarations: [
        AspnetrolemaskViewRUComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,


        AspnetrolemaskViewUModule,


    ],
    exports: [
        AspnetrolemaskViewRUComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetrolemaskViewRuModule { }


