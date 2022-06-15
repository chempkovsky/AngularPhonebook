
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { AspnetroleViewUformComponent } from './uform/aspnetrole-view-uform.component';
import { AspnetroleViewUdlgComponent } from './udlg/aspnetrole-view-udlg.component';



@NgModule({
    declarations: [
        AspnetroleViewUformComponent,
        AspnetroleViewUdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        AspnetroleViewUformComponent,
        AspnetroleViewUdlgComponent
    ],
    entryComponents: [
        AspnetroleViewUdlgComponent
    ]
})
export class AspnetroleViewUModule { }


