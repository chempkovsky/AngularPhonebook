
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { PhbkDivisionViewVformComponent } from './vform/phbk-division-view-vform.component';
import { PhbkDivisionViewVdlgComponent } from './vdlg/phbk-division-view-vdlg.component';


import { PhbkEnterpriseViewSModule } from './../phbk-enterprise-view/phbk-enterprise-view-s.module';

@NgModule({
    declarations: [
        PhbkDivisionViewVformComponent,
        PhbkDivisionViewVdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,
        PhbkEnterpriseViewSModule,

    ],
    exports: [
        PhbkDivisionViewVformComponent,
        PhbkDivisionViewVdlgComponent
    ],
    entryComponents: [
        PhbkDivisionViewVdlgComponent
    ]
})
export class PhbkDivisionViewVModule { }


