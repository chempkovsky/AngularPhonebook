
import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { WebServiceFilterModule } from './../../shared/modules/web-service-filter.module';
import { PhbkPhoneViewSformComponent } from './sform/phbk-phone-view-sform.component';
import { PhbkPhoneViewSdlgComponent } from './sdlg/phbk-phone-view-sdlg.component';

@NgModule({
    declarations: [
        PhbkPhoneViewSformComponent,
        PhbkPhoneViewSdlgComponent
    ],
    imports: [
        CommonModule,
//        BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        WebServiceFilterModule,
    ],
    exports: [
        PhbkPhoneViewSformComponent,
        PhbkPhoneViewSdlgComponent
    ],
    entryComponents: [
        PhbkPhoneViewSdlgComponent
    ]
})
export class PhbkPhoneViewSModule { }


