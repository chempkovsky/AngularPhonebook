
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { PhbkPhoneTypeViewVformComponent } from './vform/phbk-phone-type-view-vform.component';
import { PhbkPhoneTypeViewVdlgComponent } from './vdlg/phbk-phone-type-view-vdlg.component';



@NgModule({
    declarations: [
        PhbkPhoneTypeViewVformComponent,
        PhbkPhoneTypeViewVdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        PhbkPhoneTypeViewVformComponent,
        PhbkPhoneTypeViewVdlgComponent
    ],
    entryComponents: [
        PhbkPhoneTypeViewVdlgComponent
    ]
})
export class PhbkPhoneTypeViewVModule { }


