
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
// import { WebServiceFilterModule } from './../../shared/modules/web-service-filter.module';
import { PhbkPhoneViewSModule } from './phbk-phone-view-s.module';

import { PhbkPhoneViewVModule } from './phbk-phone-view-v.module';
import { PhbkPhoneViewAModule } from './phbk-phone-view-a.module';
import { PhbkPhoneViewUModule } from './phbk-phone-view-u.module';
import { PhbkPhoneViewDModule } from './phbk-phone-view-d.module';

import { PhbkPhoneViewLformComponent } from './lform/phbk-phone-view-lform.component';
import { PhbkPhoneViewLdlgComponent } from './ldlg/phbk-phone-view-ldlg.component';

@NgModule({
    declarations: [
        PhbkPhoneViewLformComponent,
        PhbkPhoneViewLdlgComponent
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        PhbkPhoneViewSModule,

        PhbkPhoneViewVModule,
        PhbkPhoneViewAModule,
        PhbkPhoneViewUModule,
        PhbkPhoneViewDModule,
    ],
    exports: [
        PhbkPhoneViewLformComponent,
        PhbkPhoneViewLdlgComponent
    ],
    entryComponents: [
        PhbkPhoneViewLdlgComponent
    ]
})
export class PhbkPhoneViewLModule { }


