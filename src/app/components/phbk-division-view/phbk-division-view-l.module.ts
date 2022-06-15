
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
// import { WebServiceFilterModule } from './../../shared/modules/web-service-filter.module';
import { PhbkDivisionViewSModule } from './phbk-division-view-s.module';

import { PhbkDivisionViewVModule } from './phbk-division-view-v.module';
import { PhbkDivisionViewAModule } from './phbk-division-view-a.module';
import { PhbkDivisionViewUModule } from './phbk-division-view-u.module';
import { PhbkDivisionViewDModule } from './phbk-division-view-d.module';

import { PhbkDivisionViewLformComponent } from './lform/phbk-division-view-lform.component';
import { PhbkDivisionViewLdlgComponent } from './ldlg/phbk-division-view-ldlg.component';

@NgModule({
    declarations: [
        PhbkDivisionViewLformComponent,
        PhbkDivisionViewLdlgComponent
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        // WebServiceFilterModule,
        PhbkDivisionViewSModule,

        PhbkDivisionViewVModule,
        PhbkDivisionViewAModule,
        PhbkDivisionViewUModule,
        PhbkDivisionViewDModule,
    ],
    exports: [
        PhbkDivisionViewLformComponent,
        PhbkDivisionViewLdlgComponent
    ],
    entryComponents: [
        PhbkDivisionViewLdlgComponent
    ]
})
export class PhbkDivisionViewLModule { }


