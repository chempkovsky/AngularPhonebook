
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
// import { WebServiceFilterModule } from './../../shared/modules/web-service-filter.module';
import { PhbkPhoneTypeViewSModule } from './phbk-phone-type-view-s.module';

import { PhbkPhoneTypeViewVModule } from './phbk-phone-type-view-v.module';
import { PhbkPhoneTypeViewAModule } from './phbk-phone-type-view-a.module';
import { PhbkPhoneTypeViewUModule } from './phbk-phone-type-view-u.module';
import { PhbkPhoneTypeViewDModule } from './phbk-phone-type-view-d.module';

import { PhbkPhoneTypeViewLformComponent } from './lform/phbk-phone-type-view-lform.component';
import { PhbkPhoneTypeViewLdlgComponent } from './ldlg/phbk-phone-type-view-ldlg.component';

@NgModule({
    declarations: [
        PhbkPhoneTypeViewLformComponent,
        PhbkPhoneTypeViewLdlgComponent
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        PhbkPhoneTypeViewSModule,

        PhbkPhoneTypeViewVModule,
        PhbkPhoneTypeViewAModule,
        PhbkPhoneTypeViewUModule,
        PhbkPhoneTypeViewDModule,
    ],
    exports: [
        PhbkPhoneTypeViewLformComponent,
        PhbkPhoneTypeViewLdlgComponent
    ],
    entryComponents: [
        PhbkPhoneTypeViewLdlgComponent
    ]
})
export class PhbkPhoneTypeViewLModule { }


