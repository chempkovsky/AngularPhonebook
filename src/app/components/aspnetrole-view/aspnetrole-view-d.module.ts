
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { AspnetroleViewDformComponent } from './dform/aspnetrole-view-dform.component';
import { AspnetroleViewDdlgComponent } from './ddlg/aspnetrole-view-ddlg.component';



@NgModule({
    declarations: [
        AspnetroleViewDformComponent,
        AspnetroleViewDdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        AspnetroleViewDformComponent,
        AspnetroleViewDdlgComponent
    ],
    entryComponents: [
        AspnetroleViewDdlgComponent
    ]
})
export class AspnetroleViewDModule { }


