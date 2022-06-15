
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { PhbkEmployeeViewUformComponent } from './uform/phbk-employee-view-uform.component';
import { PhbkEmployeeViewUdlgComponent } from './udlg/phbk-employee-view-udlg.component';


import { PhbkDivisionViewSModule } from './../phbk-division-view/phbk-division-view-s.module';
import { PhbkEnterpriseViewSModule } from './../phbk-enterprise-view/phbk-enterprise-view-s.module';

@NgModule({
    declarations: [
        PhbkEmployeeViewUformComponent,
        PhbkEmployeeViewUdlgComponent
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
        PhbkEmployeeViewUformComponent,
        PhbkEmployeeViewUdlgComponent
    ],
    entryComponents: [
        PhbkEmployeeViewUdlgComponent
    ]
})
export class PhbkEmployeeViewUModule { }


