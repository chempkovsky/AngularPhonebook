
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { PhbkEnterpriseViewUformComponent } from './uform/phbk-enterprise-view-uform.component';
import { PhbkEnterpriseViewUdlgComponent } from './udlg/phbk-enterprise-view-udlg.component';



@NgModule({
    declarations: [
        PhbkEnterpriseViewUformComponent,
        PhbkEnterpriseViewUdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        PhbkEnterpriseViewUformComponent,
        PhbkEnterpriseViewUdlgComponent
    ],
    entryComponents: [
        PhbkEnterpriseViewUdlgComponent
    ]
})
export class PhbkEnterpriseViewUModule { }


