
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetmodelViewRVComponent } from './rvform/aspnetmodel-view-r-v.component';


import { AspnetmodelViewVModule } from './aspnetmodel-view-v.module';





@NgModule({
    declarations: [
        AspnetmodelViewRVComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        


        AspnetmodelViewVModule,


    ],
    exports: [
        AspnetmodelViewRVComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetmodelViewRvModule { }


