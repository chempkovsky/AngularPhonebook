
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetuserViewRAComponent } from './raform/aspnetuser-view-r-a.component';


import { AspnetuserViewAModule } from './aspnetuser-view-a.module';





@NgModule({
    declarations: [
        AspnetuserViewRAComponent,
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,


        AspnetuserViewAModule,


    ],
    exports: [
        AspnetuserViewRAComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetuserViewRaModule { }


