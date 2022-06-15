
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';


import { PhbkPhoneViewSModule } from './phbk-phone-view-s.module';
import { PhbkPhoneViewRdlistComponent } from './rdlist/phbk-phone-view-rdlist.component';
import { PhbkPhoneViewVModule } from './phbk-phone-view-v.module';
import { PhbkPhoneViewAModule } from './phbk-phone-view-a.module';
import { PhbkPhoneViewUModule } from './phbk-phone-view-u.module';
import { PhbkPhoneViewDModule } from './phbk-phone-view-d.module';


import { PhbkEmployeeViewSModule } from './../phbk-employee-view/phbk-employee-view-s.module';
import { PhbkDivisionViewSModule } from './../phbk-division-view/phbk-division-view-s.module';
import { PhbkEnterpriseViewSModule } from './../phbk-enterprise-view/phbk-enterprise-view-s.module';



@NgModule({
    declarations: [
        PhbkPhoneViewRdlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        PhbkPhoneViewSModule,



        PhbkPhoneViewVModule,
        PhbkPhoneViewAModule,
        PhbkPhoneViewUModule,
        PhbkPhoneViewDModule,


        PhbkEmployeeViewSModule,
        PhbkDivisionViewSModule,
        PhbkEnterpriseViewSModule,




    ],
    exports: [
        PhbkPhoneViewRdlistComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkPhoneViewRdlModule { }


