
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetmodelViewRAComponent } from './raform/aspnetmodel-view-r-a.component';


import { AspnetmodelViewAModule } from './aspnetmodel-view-a.module';





@NgModule({
    declarations: [
        AspnetmodelViewRAComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,


        AspnetmodelViewAModule,


    ],
    exports: [
        AspnetmodelViewRAComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetmodelViewRaModule { }


