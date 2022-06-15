
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { PhbkPhoneViewDformComponent } from './dform/phbk-phone-view-dform.component';
import { PhbkPhoneViewDdlgComponent } from './ddlg/phbk-phone-view-ddlg.component';


import { PhbkEmployeeViewSModule } from './../phbk-employee-view/phbk-employee-view-s.module';
import { PhbkDivisionViewSModule } from './../phbk-division-view/phbk-division-view-s.module';
import { PhbkEnterpriseViewSModule } from './../phbk-enterprise-view/phbk-enterprise-view-s.module';

@NgModule({
    declarations: [
        PhbkPhoneViewDformComponent,
        PhbkPhoneViewDdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,
        PhbkEmployeeViewSModule,
        PhbkDivisionViewSModule,
        PhbkEnterpriseViewSModule,

    ],
    exports: [
        PhbkPhoneViewDformComponent,
        PhbkPhoneViewDdlgComponent
    ],
    entryComponents: [
        PhbkPhoneViewDdlgComponent
    ]
})
export class PhbkPhoneViewDModule { }


