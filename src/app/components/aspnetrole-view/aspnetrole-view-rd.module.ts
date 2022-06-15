
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetroleViewRDComponent } from './rdform/aspnetrole-view-r-d.component';


import { AspnetroleViewDModule } from './aspnetrole-view-d.module';





@NgModule({
    declarations: [
        AspnetroleViewRDComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,


        AspnetroleViewDModule,


    ],
    exports: [
        AspnetroleViewRDComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetroleViewRdModule { }


