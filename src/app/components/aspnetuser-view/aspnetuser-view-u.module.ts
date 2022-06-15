
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { AspnetuserViewUformComponent } from './uform/aspnetuser-view-uform.component';
import { AspnetuserViewUdlgComponent } from './udlg/aspnetuser-view-udlg.component';



@NgModule({
    declarations: [
        AspnetuserViewUformComponent,
        AspnetuserViewUdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        AspnetuserViewUformComponent,
        AspnetuserViewUdlgComponent
    ],
    entryComponents: [
        AspnetuserViewUdlgComponent
    ]
})
export class AspnetuserViewUModule { }


