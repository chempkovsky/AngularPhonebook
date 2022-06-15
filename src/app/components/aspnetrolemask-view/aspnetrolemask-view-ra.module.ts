
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetrolemaskViewRAComponent } from './raform/aspnetrolemask-view-r-a.component';


import { AspnetrolemaskViewAModule } from './aspnetrolemask-view-a.module';





@NgModule({
    declarations: [
        AspnetrolemaskViewRAComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,


        AspnetrolemaskViewAModule,


    ],
    exports: [
        AspnetrolemaskViewRAComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetrolemaskViewRaModule { }


