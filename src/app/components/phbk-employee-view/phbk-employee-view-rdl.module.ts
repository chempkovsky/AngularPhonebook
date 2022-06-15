
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';


import { PhbkEmployeeViewSModule } from './phbk-employee-view-s.module';
import { PhbkEmployeeViewRdlistComponent } from './rdlist/phbk-employee-view-rdlist.component';
import { PhbkEmployeeViewVModule } from './phbk-employee-view-v.module';
import { PhbkEmployeeViewAModule } from './phbk-employee-view-a.module';
import { PhbkEmployeeViewUModule } from './phbk-employee-view-u.module';
import { PhbkEmployeeViewDModule } from './phbk-employee-view-d.module';


import { PhbkDivisionViewSModule } from './../phbk-division-view/phbk-division-view-s.module';
import { PhbkEnterpriseViewSModule } from './../phbk-enterprise-view/phbk-enterprise-view-s.module';



@NgModule({
    declarations: [
        PhbkEmployeeViewRdlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        PhbkEmployeeViewSModule,



        PhbkEmployeeViewVModule,
        PhbkEmployeeViewAModule,
        PhbkEmployeeViewUModule,
        PhbkEmployeeViewDModule,


        PhbkDivisionViewSModule,
        PhbkEnterpriseViewSModule,




    ],
    exports: [
        PhbkEmployeeViewRdlistComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkEmployeeViewRdlModule { }


