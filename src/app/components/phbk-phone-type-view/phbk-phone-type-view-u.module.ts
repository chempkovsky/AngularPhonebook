
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { PhbkPhoneTypeViewUformComponent } from './uform/phbk-phone-type-view-uform.component';
import { PhbkPhoneTypeViewUdlgComponent } from './udlg/phbk-phone-type-view-udlg.component';



@NgModule({
    declarations: [
        PhbkPhoneTypeViewUformComponent,
        PhbkPhoneTypeViewUdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        PhbkPhoneTypeViewUformComponent,
        PhbkPhoneTypeViewUdlgComponent
    ],
    entryComponents: [
        PhbkPhoneTypeViewUdlgComponent
    ]
})
export class PhbkPhoneTypeViewUModule { }


