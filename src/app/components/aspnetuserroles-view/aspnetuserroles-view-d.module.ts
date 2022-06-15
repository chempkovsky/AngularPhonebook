
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { AspnetuserrolesViewDformComponent } from './dform/aspnetuserroles-view-dform.component';
import { AspnetuserrolesViewDdlgComponent } from './ddlg/aspnetuserroles-view-ddlg.component';


import { AspnetuserViewSModule } from './../aspnetuser-view/aspnetuser-view-s.module';

@NgModule({
    declarations: [
        AspnetuserrolesViewDformComponent,
        AspnetuserrolesViewDdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,
        AspnetuserViewSModule,

    ],
    exports: [
        AspnetuserrolesViewDformComponent,
        AspnetuserrolesViewDdlgComponent
    ],
    entryComponents: [
        AspnetuserrolesViewDdlgComponent
    ]
})
export class AspnetuserrolesViewDModule { }


