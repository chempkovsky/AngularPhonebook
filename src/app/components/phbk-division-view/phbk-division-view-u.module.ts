
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { PhbkDivisionViewUformComponent } from './uform/phbk-division-view-uform.component';
import { PhbkDivisionViewUdlgComponent } from './udlg/phbk-division-view-udlg.component';


import { PhbkEnterpriseViewSModule } from './../phbk-enterprise-view/phbk-enterprise-view-s.module';

@NgModule({
    declarations: [
        PhbkDivisionViewUformComponent,
        PhbkDivisionViewUdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,
        PhbkEnterpriseViewSModule,

    ],
    exports: [
        PhbkDivisionViewUformComponent,
        PhbkDivisionViewUdlgComponent
    ],
    entryComponents: [
        PhbkDivisionViewUdlgComponent
    ]
})
export class PhbkDivisionViewUModule { }


