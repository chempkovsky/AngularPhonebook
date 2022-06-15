
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { PhbkEnterpriseViewDformComponent } from './dform/phbk-enterprise-view-dform.component';
import { PhbkEnterpriseViewDdlgComponent } from './ddlg/phbk-enterprise-view-ddlg.component';



@NgModule({
    declarations: [
        PhbkEnterpriseViewDformComponent,
        PhbkEnterpriseViewDdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        PhbkEnterpriseViewDformComponent,
        PhbkEnterpriseViewDdlgComponent
    ],
    entryComponents: [
        PhbkEnterpriseViewDdlgComponent
    ]
})
export class PhbkEnterpriseViewDModule { }


