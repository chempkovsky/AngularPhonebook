
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { AspnetrolemaskViewVformComponent } from './vform/aspnetrolemask-view-vform.component';
import { AspnetrolemaskViewVdlgComponent } from './vdlg/aspnetrolemask-view-vdlg.component';



@NgModule({
    declarations: [
        AspnetrolemaskViewVformComponent,
        AspnetrolemaskViewVdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        AspnetrolemaskViewVformComponent,
        AspnetrolemaskViewVdlgComponent
    ],
    entryComponents: [
        AspnetrolemaskViewVdlgComponent
    ]
})
export class AspnetrolemaskViewVModule { }


