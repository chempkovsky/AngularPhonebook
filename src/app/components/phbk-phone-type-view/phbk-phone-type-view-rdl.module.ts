
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';


import { PhbkPhoneTypeViewSModule } from './phbk-phone-type-view-s.module';
import { PhbkPhoneTypeViewRdlistComponent } from './rdlist/phbk-phone-type-view-rdlist.component';
import { PhbkPhoneTypeViewVModule } from './phbk-phone-type-view-v.module';
import { PhbkPhoneTypeViewAModule } from './phbk-phone-type-view-a.module';
import { PhbkPhoneTypeViewUModule } from './phbk-phone-type-view-u.module';
import { PhbkPhoneTypeViewDModule } from './phbk-phone-type-view-d.module';





@NgModule({
    declarations: [
        PhbkPhoneTypeViewRdlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        PhbkPhoneTypeViewSModule,



        PhbkPhoneTypeViewVModule,
        PhbkPhoneTypeViewAModule,
        PhbkPhoneTypeViewUModule,
        PhbkPhoneTypeViewDModule,






    ],
    exports: [
        PhbkPhoneTypeViewRdlistComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkPhoneTypeViewRdlModule { }


