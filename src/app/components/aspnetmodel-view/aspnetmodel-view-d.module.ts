
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { AspnetmodelViewDformComponent } from './dform/aspnetmodel-view-dform.component';
import { AspnetmodelViewDdlgComponent } from './ddlg/aspnetmodel-view-ddlg.component';



@NgModule({
    declarations: [
        AspnetmodelViewDformComponent,
        AspnetmodelViewDdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        AspnetmodelViewDformComponent,
        AspnetmodelViewDdlgComponent
    ],
    entryComponents: [
        AspnetmodelViewDdlgComponent
    ]
})
export class AspnetmodelViewDModule { }


