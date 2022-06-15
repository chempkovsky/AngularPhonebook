
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { AspnetrolemaskViewUformComponent } from './uform/aspnetrolemask-view-uform.component';
import { AspnetrolemaskViewUdlgComponent } from './udlg/aspnetrolemask-view-udlg.component';



@NgModule({
    declarations: [
        AspnetrolemaskViewUformComponent,
        AspnetrolemaskViewUdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        AspnetrolemaskViewUformComponent,
        AspnetrolemaskViewUdlgComponent
    ],
    entryComponents: [
        AspnetrolemaskViewUdlgComponent
    ]
})
export class AspnetrolemaskViewUModule { }


