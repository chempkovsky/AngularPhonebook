
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser';

import { AppMaterialModule } from './app-material.module';
import { AppFlexLayoutModule } from './app-flex-layout.module';

// import { IUniqServiceFilterDef } from './../interfaces/uniq-service-filter-def.interface';
// import { IUniqServiceFilter } from './../interfaces/uniq-service-filter.interface';
// import { IWebServiceFilter } from './../interfaces/web-service-filter.interface';
// import { IWebServiceFilterDef } from './../interfaces/web-service-filter-def.interface';
// import { IWebServiceFilterOperator } from './../interfaces/web-service-filter-operator.interface';
// import { IWebServiceFilterRslt } from './../interfaces/web-service-filter-rslt.interface';
// import { AppGlblSettingsService } from './../services/app-glbl-settings.service';

import { WebServiceFilterComponent } from './../components/web-service-filter/web-service-filter.component';
import { UniqServiceFilterComponent } from './../components/uniq-service-filter/uniq-service-filter.component';

import { ColumnSelectorComponent } from './../components/column-selector/column-selector.component';
import { ColumnSelectorDlgComponent } from './../components/column-selector-dlg/column-selector-dlg.component';
import { MessageDialogComponent } from './../components/message-dialog/message-dialog.component';



@NgModule({
    declarations: [
     //   IWebServiceFilter,
     //   IWebServiceFilterDef,
     //   IWebServiceFilterOperator,
     //   IWebServiceFilterRslt,
     //   AppGlblSettingsService,
        UniqServiceFilterComponent,
        WebServiceFilterComponent,
        ColumnSelectorComponent,
        ColumnSelectorDlgComponent,
        MessageDialogComponent,
    ],
    imports: [
        CommonModule,
//        BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
    ],
    exports: [
        UniqServiceFilterComponent,
        WebServiceFilterComponent,
        ColumnSelectorComponent,
        ColumnSelectorDlgComponent,
        MessageDialogComponent,
    ],
    entryComponents: [
        ColumnSelectorDlgComponent,
        MessageDialogComponent,
    ]
})
export class WebServiceFilterModule { }


