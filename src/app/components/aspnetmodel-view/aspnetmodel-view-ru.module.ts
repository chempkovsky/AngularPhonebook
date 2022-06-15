
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetmodelViewRUComponent } from './ruform/aspnetmodel-view-r-u.component';


import { AspnetmodelViewUModule } from './aspnetmodel-view-u.module';





@NgModule({
    declarations: [
        AspnetmodelViewRUComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,


        AspnetmodelViewUModule,


    ],
    exports: [
        AspnetmodelViewRUComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetmodelViewRuModule { }


