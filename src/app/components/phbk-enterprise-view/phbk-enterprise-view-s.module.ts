
import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { WebServiceFilterModule } from './../../shared/modules/web-service-filter.module';
import { PhbkEnterpriseViewSformComponent } from './sform/phbk-enterprise-view-sform.component';
import { PhbkEnterpriseViewSdlgComponent } from './sdlg/phbk-enterprise-view-sdlg.component';

@NgModule({
    declarations: [
        PhbkEnterpriseViewSformComponent,
        PhbkEnterpriseViewSdlgComponent
    ],
    imports: [
        CommonModule,
//        BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        WebServiceFilterModule,
    ],
    exports: [
        PhbkEnterpriseViewSformComponent,
        PhbkEnterpriseViewSdlgComponent
    ],
    entryComponents: [
        PhbkEnterpriseViewSdlgComponent
    ]
})
export class PhbkEnterpriseViewSModule { }


