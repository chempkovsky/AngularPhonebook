
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';



import { PhbkEnterpriseViewSModule } from './phbk-enterprise-view-s.module';
import { PhbkEnterpriseViewRlistComponent } from './rlist/phbk-enterprise-view-rlist.component';







@NgModule({
    declarations: [
        PhbkEnterpriseViewRlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        PhbkEnterpriseViewSModule,





    ],
    exports: [
        PhbkEnterpriseViewRlistComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkEnterpriseViewRlModule { }


