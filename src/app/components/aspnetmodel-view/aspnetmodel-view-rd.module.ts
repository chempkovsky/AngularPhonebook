
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetmodelViewRDComponent } from './rdform/aspnetmodel-view-r-d.component';


import { AspnetmodelViewDModule } from './aspnetmodel-view-d.module';





@NgModule({
    declarations: [
        AspnetmodelViewRDComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,


        AspnetmodelViewDModule,


    ],
    exports: [
        AspnetmodelViewRDComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetmodelViewRdModule { }


