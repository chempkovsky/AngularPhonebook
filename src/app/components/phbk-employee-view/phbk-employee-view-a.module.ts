
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { PhbkEmployeeViewAformComponent } from './aform/phbk-employee-view-aform.component';
import { PhbkEmployeeViewAdlgComponent } from './adlg/phbk-employee-view-adlg.component';


import { PhbkDivisionViewSModule } from './../phbk-division-view/phbk-division-view-s.module';
import { PhbkEnterpriseViewSModule } from './../phbk-enterprise-view/phbk-enterprise-view-s.module';

@NgModule({
    declarations: [
        PhbkEmployeeViewAformComponent,
        PhbkEmployeeViewAdlgComponent
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
        PhbkEmployeeViewAformComponent,
        PhbkEmployeeViewAdlgComponent
    ],
    entryComponents: [
        PhbkEmployeeViewAdlgComponent
    ]
})
export class PhbkEmployeeViewAModule { }


