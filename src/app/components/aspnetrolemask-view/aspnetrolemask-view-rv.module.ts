
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetrolemaskViewRVComponent } from './rvform/aspnetrolemask-view-r-v.component';


import { AspnetrolemaskViewVModule } from './aspnetrolemask-view-v.module';





@NgModule({
    declarations: [
        AspnetrolemaskViewRVComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        


        AspnetrolemaskViewVModule,


    ],
    exports: [
        AspnetrolemaskViewRVComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetrolemaskViewRvModule { }


