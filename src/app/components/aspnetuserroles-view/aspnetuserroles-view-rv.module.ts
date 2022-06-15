
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { AspnetuserrolesViewRVComponent } from './rvform/aspnetuserroles-view-r-v.component';


import { AspnetuserrolesViewVModule } from './aspnetuserroles-view-v.module';


import { AspnetuserViewSModule } from './../aspnetuser-view/aspnetuser-view-s.module';



@NgModule({
    declarations: [
        AspnetuserrolesViewRVComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        

        AspnetuserViewSModule,

        AspnetuserrolesViewVModule,


    ],
    exports: [
        AspnetuserrolesViewRVComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetuserrolesViewRvModule { }


