
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { PhbkEnterpriseViewVformComponent } from './vform/phbk-enterprise-view-vform.component';
import { PhbkEnterpriseViewVdlgComponent } from './vdlg/phbk-enterprise-view-vdlg.component';



@NgModule({
    declarations: [
        PhbkEnterpriseViewVformComponent,
        PhbkEnterpriseViewVdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        PhbkEnterpriseViewVformComponent,
        PhbkEnterpriseViewVdlgComponent
    ],
    entryComponents: [
        PhbkEnterpriseViewVdlgComponent
    ]
})
export class PhbkEnterpriseViewVModule { }


