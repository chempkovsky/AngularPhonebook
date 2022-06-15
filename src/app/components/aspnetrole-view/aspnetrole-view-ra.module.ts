
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetroleViewRAComponent } from './raform/aspnetrole-view-r-a.component';


import { AspnetroleViewAModule } from './aspnetrole-view-a.module';





@NgModule({
    declarations: [
        AspnetroleViewRAComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,


        AspnetroleViewAModule,


    ],
    exports: [
        AspnetroleViewRAComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetroleViewRaModule { }


