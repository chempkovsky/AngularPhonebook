
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { PhbkEmployeeViewDformComponent } from './dform/phbk-employee-view-dform.component';
import { PhbkEmployeeViewDdlgComponent } from './ddlg/phbk-employee-view-ddlg.component';


import { PhbkDivisionViewSModule } from './../phbk-division-view/phbk-division-view-s.module';
import { PhbkEnterpriseViewSModule } from './../phbk-enterprise-view/phbk-enterprise-view-s.module';

@NgModule({
    declarations: [
        PhbkEmployeeViewDformComponent,
        PhbkEmployeeViewDdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,
        PhbkDivisionViewSModule,
        PhbkEnterpriseViewSModule,

    ],
    exports: [
        PhbkEmployeeViewDformComponent,
        PhbkEmployeeViewDdlgComponent
    ],
    entryComponents: [
        PhbkEmployeeViewDdlgComponent
    ]
})
export class PhbkEmployeeViewDModule { }


