
import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { WebServiceFilterModule } from './../../shared/modules/web-service-filter.module';
import { PhbkEmployeeViewSformComponent } from './sform/phbk-employee-view-sform.component';
import { PhbkEmployeeViewSdlgComponent } from './sdlg/phbk-employee-view-sdlg.component';

@NgModule({
    declarations: [
        PhbkEmployeeViewSformComponent,
        PhbkEmployeeViewSdlgComponent
    ],
    imports: [
        CommonModule,
//        BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        WebServiceFilterModule,
    ],
    exports: [
        PhbkEmployeeViewSformComponent,
        PhbkEmployeeViewSdlgComponent
    ],
    entryComponents: [
        PhbkEmployeeViewSdlgComponent
    ]
})
export class PhbkEmployeeViewSModule { }


