
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { AspnetroleViewVformComponent } from './vform/aspnetrole-view-vform.component';
import { AspnetroleViewVdlgComponent } from './vdlg/aspnetrole-view-vdlg.component';



@NgModule({
    declarations: [
        AspnetroleViewVformComponent,
        AspnetroleViewVdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        AspnetroleViewVformComponent,
        AspnetroleViewVdlgComponent
    ],
    entryComponents: [
        AspnetroleViewVdlgComponent
    ]
})
export class AspnetroleViewVModule { }


