
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { AspnetroleViewAformComponent } from './aform/aspnetrole-view-aform.component';
import { AspnetroleViewAdlgComponent } from './adlg/aspnetrole-view-adlg.component';



@NgModule({
    declarations: [
        AspnetroleViewAformComponent,
        AspnetroleViewAdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        AspnetroleViewAformComponent,
        AspnetroleViewAdlgComponent
    ],
    entryComponents: [
        AspnetroleViewAdlgComponent
    ]
})
export class AspnetroleViewAModule { }


