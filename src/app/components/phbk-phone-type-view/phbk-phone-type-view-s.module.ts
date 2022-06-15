
import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { WebServiceFilterModule } from './../../shared/modules/web-service-filter.module';
import { PhbkPhoneTypeViewSformComponent } from './sform/phbk-phone-type-view-sform.component';
import { PhbkPhoneTypeViewSdlgComponent } from './sdlg/phbk-phone-type-view-sdlg.component';

@NgModule({
    declarations: [
        PhbkPhoneTypeViewSformComponent,
        PhbkPhoneTypeViewSdlgComponent
    ],
    imports: [
        CommonModule,
//        BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        WebServiceFilterModule,
    ],
    exports: [
        PhbkPhoneTypeViewSformComponent,
        PhbkPhoneTypeViewSdlgComponent
    ],
    entryComponents: [
        PhbkPhoneTypeViewSdlgComponent
    ]
})
export class PhbkPhoneTypeViewSModule { }


