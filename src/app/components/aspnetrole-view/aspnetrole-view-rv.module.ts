
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetroleViewRVComponent } from './rvform/aspnetrole-view-r-v.component';


import { AspnetroleViewVModule } from './aspnetrole-view-v.module';





@NgModule({
    declarations: [
        AspnetroleViewRVComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        


        AspnetroleViewVModule,


    ],
    exports: [
        AspnetroleViewRVComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetroleViewRvModule { }


