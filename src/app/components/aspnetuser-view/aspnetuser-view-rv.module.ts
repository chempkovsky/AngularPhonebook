
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetuserViewRVComponent } from './rvform/aspnetuser-view-r-v.component';


import { AspnetuserViewVModule } from './aspnetuser-view-v.module';





@NgModule({
    declarations: [
        AspnetuserViewRVComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        


        AspnetuserViewVModule,


    ],
    exports: [
        AspnetuserViewRVComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetuserViewRvModule { }


