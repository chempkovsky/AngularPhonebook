
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { PhbkEnterpriseViewAformComponent } from './aform/phbk-enterprise-view-aform.component';
import { PhbkEnterpriseViewAdlgComponent } from './adlg/phbk-enterprise-view-adlg.component';



@NgModule({
    declarations: [
        PhbkEnterpriseViewAformComponent,
        PhbkEnterpriseViewAdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        PhbkEnterpriseViewAformComponent,
        PhbkEnterpriseViewAdlgComponent
    ],
    entryComponents: [
        PhbkEnterpriseViewAdlgComponent
    ]
})
export class PhbkEnterpriseViewAModule { }


