
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { PhbkPhoneTypeViewDformComponent } from './dform/phbk-phone-type-view-dform.component';
import { PhbkPhoneTypeViewDdlgComponent } from './ddlg/phbk-phone-type-view-ddlg.component';



@NgModule({
    declarations: [
        PhbkPhoneTypeViewDformComponent,
        PhbkPhoneTypeViewDdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        PhbkPhoneTypeViewDformComponent,
        PhbkPhoneTypeViewDdlgComponent
    ],
    entryComponents: [
        PhbkPhoneTypeViewDdlgComponent
    ]
})
export class PhbkPhoneTypeViewDModule { }


