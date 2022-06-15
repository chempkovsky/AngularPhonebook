
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
// import { WebServiceFilterModule } from './../../shared/modules/web-service-filter.module';
import { PhbkEmployeeViewSModule } from './phbk-employee-view-s.module';

import { PhbkEmployeeViewVModule } from './phbk-employee-view-v.module';
import { PhbkEmployeeViewAModule } from './phbk-employee-view-a.module';
import { PhbkEmployeeViewUModule } from './phbk-employee-view-u.module';
import { PhbkEmployeeViewDModule } from './phbk-employee-view-d.module';

import { PhbkEmployeeViewLformComponent } from './lform/phbk-employee-view-lform.component';
import { PhbkEmployeeViewLdlgComponent } from './ldlg/phbk-employee-view-ldlg.component';

@NgModule({
    declarations: [
        PhbkEmployeeViewLformComponent,
        PhbkEmployeeViewLdlgComponent
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        PhbkEmployeeViewSModule,

        PhbkEmployeeViewVModule,
        PhbkEmployeeViewAModule,
        PhbkEmployeeViewUModule,
        PhbkEmployeeViewDModule,
    ],
    exports: [
        PhbkEmployeeViewLformComponent,
        PhbkEmployeeViewLdlgComponent
    ],
    entryComponents: [
        PhbkEmployeeViewLdlgComponent
    ]
})
export class PhbkEmployeeViewLModule { }


