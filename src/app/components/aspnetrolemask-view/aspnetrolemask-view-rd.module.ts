
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetrolemaskViewRDComponent } from './rdform/aspnetrolemask-view-r-d.component';


import { AspnetrolemaskViewDModule } from './aspnetrolemask-view-d.module';





@NgModule({
    declarations: [
        AspnetrolemaskViewRDComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,


        AspnetrolemaskViewDModule,


    ],
    exports: [
        AspnetrolemaskViewRDComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetrolemaskViewRdModule { }


