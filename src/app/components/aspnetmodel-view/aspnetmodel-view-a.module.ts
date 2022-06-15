
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { AspnetmodelViewAformComponent } from './aform/aspnetmodel-view-aform.component';
import { AspnetmodelViewAdlgComponent } from './adlg/aspnetmodel-view-adlg.component';



@NgModule({
    declarations: [
        AspnetmodelViewAformComponent,
        AspnetmodelViewAdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        AspnetmodelViewAformComponent,
        AspnetmodelViewAdlgComponent
    ],
    entryComponents: [
        AspnetmodelViewAdlgComponent
    ]
})
export class AspnetmodelViewAModule { }


