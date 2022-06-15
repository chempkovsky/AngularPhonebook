
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';

import { SimpleDictionaryFtrComponent } from './simple-dictionary.ftr.component';

import { PhbkPhoneTypeViewLModule } from './../../components/phbk-phone-type-view/phbk-phone-type-view-l.module';
import { PhbkPhoneTypeViewScModule } from './../../components/phbk-phone-type-view/phbk-phone-type-view-sc.module';
import { PhbkEnterpriseViewLModule } from './../../components/phbk-enterprise-view/phbk-enterprise-view-l.module';


@NgModule({
    declarations: [
        SimpleDictionaryFtrComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        PhbkPhoneTypeViewLModule,
        PhbkPhoneTypeViewScModule,
        PhbkEnterpriseViewLModule,
    ],
    exports: [
        SimpleDictionaryFtrComponent,
    ],
    entryComponents: [
    ]
})
export class SimpleDictionaryFtrModule { }


