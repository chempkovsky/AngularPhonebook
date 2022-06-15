
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { AspnetuserViewAformComponent } from './aform/aspnetuser-view-aform.component';
import { AspnetuserViewAdlgComponent } from './adlg/aspnetuser-view-adlg.component';



@NgModule({
    declarations: [
        AspnetuserViewAformComponent,
        AspnetuserViewAdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        AspnetuserViewAformComponent,
        AspnetuserViewAdlgComponent
    ],
    entryComponents: [
        AspnetuserViewAdlgComponent
    ]
})
export class AspnetuserViewAModule { }


