
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { AspnetuserrolesViewUformComponent } from './uform/aspnetuserroles-view-uform.component';
import { AspnetuserrolesViewUdlgComponent } from './udlg/aspnetuserroles-view-udlg.component';


import { AspnetuserViewSModule } from './../aspnetuser-view/aspnetuser-view-s.module';

@NgModule({
    declarations: [
        AspnetuserrolesViewUformComponent,
        AspnetuserrolesViewUdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,
        AspnetuserViewSModule,

    ],
    exports: [
        AspnetuserrolesViewUformComponent,
        AspnetuserrolesViewUdlgComponent
    ],
    entryComponents: [
        AspnetuserrolesViewUdlgComponent
    ]
})
export class AspnetuserrolesViewUModule { }


