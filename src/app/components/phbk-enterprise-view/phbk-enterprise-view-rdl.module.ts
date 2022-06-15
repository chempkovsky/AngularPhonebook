
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';


import { PhbkEnterpriseViewSModule } from './phbk-enterprise-view-s.module';
import { PhbkEnterpriseViewRdlistComponent } from './rdlist/phbk-enterprise-view-rdlist.component';
import { PhbkEnterpriseViewVModule } from './phbk-enterprise-view-v.module';
import { PhbkEnterpriseViewAModule } from './phbk-enterprise-view-a.module';
import { PhbkEnterpriseViewUModule } from './phbk-enterprise-view-u.module';
import { PhbkEnterpriseViewDModule } from './phbk-enterprise-view-d.module';





@NgModule({
    declarations: [
        PhbkEnterpriseViewRdlistComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        PhbkEnterpriseViewSModule,



        PhbkEnterpriseViewVModule,
        PhbkEnterpriseViewAModule,
        PhbkEnterpriseViewUModule,
        PhbkEnterpriseViewDModule,






    ],
    exports: [
        PhbkEnterpriseViewRdlistComponent,
    ],
    entryComponents: [
    ]
})
export class PhbkEnterpriseViewRdlModule { }


