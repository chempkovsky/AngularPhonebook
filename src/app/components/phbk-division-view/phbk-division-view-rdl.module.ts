
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';


import { PhbkDivisionViewSModule } from './phbk-division-view-s.module';
import { PhbkDivisionViewRdlistComponent } from './rdlist/phbk-division-view-rdlist.component';
import { PhbkDivisionViewVModule } from './phbk-division-view-v.module';
import { PhbkDivisionViewAModule } from './phbk-division-view-a.module';
import { PhbkDivisionViewUModule } from './phbk-division-view-u.module';
import { PhbkDivisionViewDModule } from './phbk-division-view-d.module';


import { PhbkEnterpriseViewSModule } from './../phbk-enterprise-view/phbk-enterprise-view-s.module';



@NgModule({
    declarations: [
        PhbkDivisionViewRdlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        PhbkDivisionViewSModule,



        PhbkDivisionViewVModule,
        PhbkDivisionViewAModule,
        PhbkDivisionViewUModule,
        PhbkDivisionViewDModule,


        PhbkEnterpriseViewSModule,




    ],
    exports: [
        PhbkDivisionViewRdlistComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkDivisionViewRdlModule { }


