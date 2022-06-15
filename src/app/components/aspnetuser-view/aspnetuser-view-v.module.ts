
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { AspnetuserViewVformComponent } from './vform/aspnetuser-view-vform.component';
import { AspnetuserViewVdlgComponent } from './vdlg/aspnetuser-view-vdlg.component';



@NgModule({
    declarations: [
        AspnetuserViewVformComponent,
        AspnetuserViewVdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        AspnetuserViewVformComponent,
        AspnetuserViewVdlgComponent
    ],
    entryComponents: [
        AspnetuserViewVdlgComponent
    ]
})
export class AspnetuserViewVModule { }


