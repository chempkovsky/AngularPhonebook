
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { AppFormatterModule } from './../../shared/modules/app-formatter.module';
import { PhbkPhoneTypeViewAformComponent } from './aform/phbk-phone-type-view-aform.component';
import { PhbkPhoneTypeViewAdlgComponent } from './adlg/phbk-phone-type-view-adlg.component';



@NgModule({
    declarations: [
        PhbkPhoneTypeViewAformComponent,
        PhbkPhoneTypeViewAdlgComponent
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        AppFormatterModule,

    ],
    exports: [
        PhbkPhoneTypeViewAformComponent,
        PhbkPhoneTypeViewAdlgComponent
    ],
    entryComponents: [
        PhbkPhoneTypeViewAdlgComponent
    ]
})
export class PhbkPhoneTypeViewAModule { }


