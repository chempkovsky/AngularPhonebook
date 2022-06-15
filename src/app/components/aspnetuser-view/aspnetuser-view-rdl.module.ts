
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';


import { AspnetuserViewSModule } from './aspnetuser-view-s.module';
import { AspnetuserViewRdlistComponent } from './rdlist/aspnetuser-view-rdlist.component';
import { AspnetuserViewVModule } from './aspnetuser-view-v.module';
import { AspnetuserViewAModule } from './aspnetuser-view-a.module';
import { AspnetuserViewUModule } from './aspnetuser-view-u.module';
import { AspnetuserViewDModule } from './aspnetuser-view-d.module';





@NgModule({
    declarations: [
        AspnetuserViewRdlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        AspnetuserViewSModule,



        AspnetuserViewVModule,
        AspnetuserViewAModule,
        AspnetuserViewUModule,
        AspnetuserViewDModule,






    ],
    exports: [
        AspnetuserViewRdlistComponent,
    ],
    entryComponents: [
    ]
})
export class AspnetuserViewRdlModule { }


