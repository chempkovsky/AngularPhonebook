
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
// import { WebServiceFilterModule } from './../../shared/modules/web-service-filter.module';
import { PhbkEnterpriseViewSModule } from './phbk-enterprise-view-s.module';

import { PhbkEnterpriseViewVModule } from './phbk-enterprise-view-v.module';
import { PhbkEnterpriseViewAModule } from './phbk-enterprise-view-a.module';
import { PhbkEnterpriseViewUModule } from './phbk-enterprise-view-u.module';
import { PhbkEnterpriseViewDModule } from './phbk-enterprise-view-d.module';

import { PhbkEnterpriseViewLformComponent } from './lform/phbk-enterprise-view-lform.component';
import { PhbkEnterpriseViewLdlgComponent } from './ldlg/phbk-enterprise-view-ldlg.component';

@NgModule({
    declarations: [
        PhbkEnterpriseViewLformComponent,
        PhbkEnterpriseViewLdlgComponent
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        PhbkEnterpriseViewSModule,

        PhbkEnterpriseViewVModule,
        PhbkEnterpriseViewAModule,
        PhbkEnterpriseViewUModule,
        PhbkEnterpriseViewDModule,
    ],
    exports: [
        PhbkEnterpriseViewLformComponent,
        PhbkEnterpriseViewLdlgComponent
    ],
    entryComponents: [
        PhbkEnterpriseViewLdlgComponent
    ]
})
export class PhbkEnterpriseViewLModule { }


