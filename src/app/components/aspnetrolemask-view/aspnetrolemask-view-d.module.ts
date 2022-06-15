
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { AspnetrolemaskViewDformComponent } from './dform/aspnetrolemask-view-dform.component';
import { AspnetrolemaskViewDdlgComponent } from './ddlg/aspnetrolemask-view-ddlg.component';



@NgModule({
    declarations: [
        AspnetrolemaskViewDformComponent,
        AspnetrolemaskViewDdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        AspnetrolemaskViewDformComponent,
        AspnetrolemaskViewDdlgComponent
    ],
    entryComponents: [
        AspnetrolemaskViewDdlgComponent
    ]
})
export class AspnetrolemaskViewDModule { }


