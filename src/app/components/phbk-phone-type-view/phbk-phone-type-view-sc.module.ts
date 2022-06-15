
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';


import { PhbkPhoneTypeViewScComponent } from './sc/phbk-phone-type-view-sc.component';

@NgModule({
    declarations: [
        PhbkPhoneTypeViewScComponent,
    ],
    imports: [
        CommonModule,
        AppMaterialModule,
        AppFlexLayoutModule,
    ],
    exports: [
        PhbkPhoneTypeViewScComponent,
    ],
    entryComponents: [
        PhbkPhoneTypeViewScComponent
    ]
})
export class PhbkPhoneTypeViewScModule { }


