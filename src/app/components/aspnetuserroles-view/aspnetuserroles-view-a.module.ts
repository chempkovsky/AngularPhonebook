
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { AspnetuserrolesViewAformComponent } from './aform/aspnetuserroles-view-aform.component';
import { AspnetuserrolesViewAdlgComponent } from './adlg/aspnetuserroles-view-adlg.component';


import { AspnetuserViewSModule } from './../aspnetuser-view/aspnetuser-view-s.module';

@NgModule({
    declarations: [
        AspnetuserrolesViewAformComponent,
        AspnetuserrolesViewAdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,
        AspnetuserViewSModule,

    ],
    exports: [
        AspnetuserrolesViewAformComponent,
        AspnetuserrolesViewAdlgComponent
    ],
    entryComponents: [
        AspnetuserrolesViewAdlgComponent
    ]
})
export class AspnetuserrolesViewAModule { }


