
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';


import { AspnetmodelViewSModule } from './aspnetmodel-view-s.module';
import { AspnetmodelViewRdlistComponent } from './rdlist/aspnetmodel-view-rdlist.component';
import { AspnetmodelViewVModule } from './aspnetmodel-view-v.module';
import { AspnetmodelViewAModule } from './aspnetmodel-view-a.module';
import { AspnetmodelViewUModule } from './aspnetmodel-view-u.module';
import { AspnetmodelViewDModule } from './aspnetmodel-view-d.module';





@NgModule({
    declarations: [
        AspnetmodelViewRdlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        AspnetmodelViewSModule,



        AspnetmodelViewVModule,
        AspnetmodelViewAModule,
        AspnetmodelViewUModule,
        AspnetmodelViewDModule,






    ],
    exports: [
        AspnetmodelViewRdlistComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetmodelViewRdlModule { }


