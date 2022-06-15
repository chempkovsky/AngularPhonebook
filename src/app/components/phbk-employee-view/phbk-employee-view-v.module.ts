
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { PhbkEmployeeViewVformComponent } from './vform/phbk-employee-view-vform.component';
import { PhbkEmployeeViewVdlgComponent } from './vdlg/phbk-employee-view-vdlg.component';


import { PhbkDivisionViewSModule } from './../phbk-division-view/phbk-division-view-s.module';
import { PhbkEnterpriseViewSModule } from './../phbk-enterprise-view/phbk-enterprise-view-s.module';

@NgModule({
    declarations: [
        PhbkEmployeeViewVformComponent,
        PhbkEmployeeViewVdlgComponent
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
        PhbkEmployeeViewVformComponent,
        PhbkEmployeeViewVdlgComponent
    ],
    entryComponents: [
        PhbkEmployeeViewVdlgComponent
    ]
})
export class PhbkEmployeeViewVModule { }


