
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { PhbkDivisionViewAformComponent } from './aform/phbk-division-view-aform.component';
import { PhbkDivisionViewAdlgComponent } from './adlg/phbk-division-view-adlg.component';


import { PhbkEnterpriseViewSModule } from './../phbk-enterprise-view/phbk-enterprise-view-s.module';

@NgModule({
    declarations: [
        PhbkDivisionViewAformComponent,
        PhbkDivisionViewAdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,
        PhbkEnterpriseViewSModule,

    ],
    exports: [
        PhbkDivisionViewAformComponent,
        PhbkDivisionViewAdlgComponent
    ],
    entryComponents: [
        PhbkDivisionViewAdlgComponent
    ]
})
export class PhbkDivisionViewAModule { }


