
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { PhbkDivisionViewDformComponent } from './dform/phbk-division-view-dform.component';
import { PhbkDivisionViewDdlgComponent } from './ddlg/phbk-division-view-ddlg.component';


import { PhbkEnterpriseViewSModule } from './../phbk-enterprise-view/phbk-enterprise-view-s.module';

@NgModule({
    declarations: [
        PhbkDivisionViewDformComponent,
        PhbkDivisionViewDdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,
        PhbkEnterpriseViewSModule,

    ],
    exports: [
        PhbkDivisionViewDformComponent,
        PhbkDivisionViewDdlgComponent
    ],
    entryComponents: [
        PhbkDivisionViewDdlgComponent
    ]
})
export class PhbkDivisionViewDModule { }


