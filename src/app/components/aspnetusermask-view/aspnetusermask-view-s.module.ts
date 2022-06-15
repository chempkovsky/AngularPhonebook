
import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppFlexLayoutModule } from './../../shared/modules/app-flex-layout.module';
import { AppMaterialModule } from './../../shared/modules/app-material.module';
import { WebServiceFilterModule } from './../../shared/modules/web-service-filter.module';
import { AspnetusermaskViewSformComponent } from './sform/aspnetusermask-view-sform.component';
import { AspnetusermaskViewSdlgComponent } from './sdlg/aspnetusermask-view-sdlg.component';

@NgModule({
    declarations: [
        AspnetusermaskViewSformComponent,
        AspnetusermaskViewSdlgComponent
    ],
    imports: [
        CommonModule,
//        BrowserModule,
        AppMaterialModule,
        AppFlexLayoutModule,
        WebServiceFilterModule,
    ],
    exports: [
        AspnetusermaskViewSformComponent,
        AspnetusermaskViewSdlgComponent
    ],
    entryComponents: [
        AspnetusermaskViewSdlgComponent
    ]
})
export class AspnetusermaskViewSModule { }


