
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';


import { AspnetroleViewSModule } from './aspnetrole-view-s.module';
import { AspnetroleViewRdlistComponent } from './rdlist/aspnetrole-view-rdlist.component';
import { AspnetroleViewVModule } from './aspnetrole-view-v.module';
import { AspnetroleViewAModule } from './aspnetrole-view-a.module';
import { AspnetroleViewUModule } from './aspnetrole-view-u.module';
import { AspnetroleViewDModule } from './aspnetrole-view-d.module';





@NgModule({
    declarations: [
        AspnetroleViewRdlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        AspnetroleViewSModule,



        AspnetroleViewVModule,
        AspnetroleViewAModule,
        AspnetroleViewUModule,
        AspnetroleViewDModule,






    ],
    exports: [
        AspnetroleViewRdlistComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetroleViewRdlModule { }


