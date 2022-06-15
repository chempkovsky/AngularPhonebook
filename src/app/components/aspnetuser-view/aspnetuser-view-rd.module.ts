
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetuserViewRDComponent } from './rdform/aspnetuser-view-r-d.component';


import { AspnetuserViewDModule } from './aspnetuser-view-d.module';





@NgModule({
    declarations: [
        AspnetuserViewRDComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,


        AspnetuserViewDModule,


    ],
    exports: [
        AspnetuserViewRDComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetuserViewRdModule { }


