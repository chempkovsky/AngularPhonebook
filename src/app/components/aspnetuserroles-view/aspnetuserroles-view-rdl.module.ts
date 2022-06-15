
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';


import { AspnetuserrolesViewSModule } from './aspnetuserroles-view-s.module';
import { AspnetuserrolesViewRdlistComponent } from './rdlist/aspnetuserroles-view-rdlist.component';
import { AspnetuserrolesViewVModule } from './aspnetuserroles-view-v.module';
import { AspnetuserrolesViewAModule } from './aspnetuserroles-view-a.module';
import { AspnetuserrolesViewUModule } from './aspnetuserroles-view-u.module';
import { AspnetuserrolesViewDModule } from './aspnetuserroles-view-d.module';


import { AspnetuserViewSModule } from './../aspnetuser-view/aspnetuser-view-s.module';



@NgModule({
    declarations: [
        AspnetuserrolesViewRdlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        AspnetuserrolesViewSModule,



        AspnetuserrolesViewVModule,
        AspnetuserrolesViewAModule,
        AspnetuserrolesViewUModule,
        AspnetuserrolesViewDModule,


        AspnetuserViewSModule,




    ],
    exports: [
        AspnetuserrolesViewRdlistComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetuserrolesViewRdlModule { }


