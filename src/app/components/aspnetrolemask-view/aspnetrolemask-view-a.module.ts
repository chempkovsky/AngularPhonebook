
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { AspnetrolemaskViewAformComponent } from './aform/aspnetrolemask-view-aform.component';
import { AspnetrolemaskViewAdlgComponent } from './adlg/aspnetrolemask-view-adlg.component';



@NgModule({
    declarations: [
        AspnetrolemaskViewAformComponent,
        AspnetrolemaskViewAdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        AspnetrolemaskViewAformComponent,
        AspnetrolemaskViewAdlgComponent
    ],
    entryComponents: [
        AspnetrolemaskViewAdlgComponent
    ]
})
export class AspnetrolemaskViewAModule { }


