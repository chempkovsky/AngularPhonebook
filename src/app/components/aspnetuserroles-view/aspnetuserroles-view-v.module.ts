
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { AspnetuserrolesViewVformComponent } from './vform/aspnetuserroles-view-vform.component';
import { AspnetuserrolesViewVdlgComponent } from './vdlg/aspnetuserroles-view-vdlg.component';


import { AspnetuserViewSModule } from './../aspnetuser-view/aspnetuser-view-s.module';

@NgModule({
    declarations: [
        AspnetuserrolesViewVformComponent,
        AspnetuserrolesViewVdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,
        AspnetuserViewSModule,

    ],
    exports: [
        AspnetuserrolesViewVformComponent,
        AspnetuserrolesViewVdlgComponent
    ],
    entryComponents: [
        AspnetuserrolesViewVdlgComponent
    ]
})
export class AspnetuserrolesViewVModule { }


