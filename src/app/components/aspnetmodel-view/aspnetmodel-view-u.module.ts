
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { AspnetmodelViewUformComponent } from './uform/aspnetmodel-view-uform.component';
import { AspnetmodelViewUdlgComponent } from './udlg/aspnetmodel-view-udlg.component';



@NgModule({
    declarations: [
        AspnetmodelViewUformComponent,
        AspnetmodelViewUdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        AspnetmodelViewUformComponent,
        AspnetmodelViewUdlgComponent
    ],
    entryComponents: [
        AspnetmodelViewUdlgComponent
    ]
})
export class AspnetmodelViewUModule { }


