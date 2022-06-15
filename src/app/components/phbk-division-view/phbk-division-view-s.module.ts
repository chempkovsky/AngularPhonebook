
import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { WebServiceFilterModule } from './../../shared/modules/web-service-filter.module';
import { PhbkDivisionViewSformComponent } from './sform/phbk-division-view-sform.component';
import { PhbkDivisionViewSdlgComponent } from './sdlg/phbk-division-view-sdlg.component';

@NgModule({
    declarations: [
        PhbkDivisionViewSformComponent,
        PhbkDivisionViewSdlgComponent
    ],
    imports: [
        CommonModule,
//        BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        WebServiceFilterModule,
    ],
    exports: [
        PhbkDivisionViewSformComponent,
        PhbkDivisionViewSdlgComponent
    ],
    entryComponents: [
        PhbkDivisionViewSdlgComponent
    ]
})
export class PhbkDivisionViewSModule { }


