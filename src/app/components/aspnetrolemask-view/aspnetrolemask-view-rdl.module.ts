
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';


import { AspnetrolemaskViewSModule } from './aspnetrolemask-view-s.module';
import { AspnetrolemaskViewRdlistComponent } from './rdlist/aspnetrolemask-view-rdlist.component';
import { AspnetrolemaskViewVModule } from './aspnetrolemask-view-v.module';
import { AspnetrolemaskViewAModule } from './aspnetrolemask-view-a.module';
import { AspnetrolemaskViewUModule } from './aspnetrolemask-view-u.module';
import { AspnetrolemaskViewDModule } from './aspnetrolemask-view-d.module';





@NgModule({
    declarations: [
        AspnetrolemaskViewRdlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        AspnetrolemaskViewSModule,



        AspnetrolemaskViewVModule,
        AspnetrolemaskViewAModule,
        AspnetrolemaskViewUModule,
        AspnetrolemaskViewDModule,






    ],
    exports: [
        AspnetrolemaskViewRdlistComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetrolemaskViewRdlModule { }


