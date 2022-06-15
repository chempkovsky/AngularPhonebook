
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { AspnetmodelViewVformComponent } from './vform/aspnetmodel-view-vform.component';
import { AspnetmodelViewVdlgComponent } from './vdlg/aspnetmodel-view-vdlg.component';



@NgModule({
    declarations: [
        AspnetmodelViewVformComponent,
        AspnetmodelViewVdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        AspnetmodelViewVformComponent,
        AspnetmodelViewVdlgComponent
    ],
    entryComponents: [
        AspnetmodelViewVdlgComponent
    ]
})
export class AspnetmodelViewVModule { }


