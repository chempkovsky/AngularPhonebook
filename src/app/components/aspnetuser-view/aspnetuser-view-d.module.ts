
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { AspnetuserViewDformComponent } from './dform/aspnetuser-view-dform.component';
import { AspnetuserViewDdlgComponent } from './ddlg/aspnetuser-view-ddlg.component';



@NgModule({
    declarations: [
        AspnetuserViewDformComponent,
        AspnetuserViewDdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        AspnetuserViewDformComponent,
        AspnetuserViewDdlgComponent
    ],
    entryComponents: [
        AspnetuserViewDdlgComponent
    ]
})
export class AspnetuserViewDModule { }


