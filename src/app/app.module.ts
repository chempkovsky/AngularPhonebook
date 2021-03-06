
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './shared/modules/app-material.module';
import { AppFlexLayoutModule } from './shared/modules/app-flex-layout.module';
import { AppGlblInterceptor } from './shared/interceptors/app-glbl.interceptor';
import { AppConfigService } from './shared/services/app-config.service';

import { AppFormatterModule } from './shared/modules/app-formatter.module';
import { AppGlblHomeComponent } from './shared/components/app-glbl-home/app-glbl-home.component';
import { AppGlblPagenotfoundComponent } from './shared/components/app-glbl-pagenotfound/app-glbl-pagenotfound.component';

const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
      return appConfig.loadAppConfig();
  }
};


@NgModule({
  declarations: [
    AppComponent,
    AppGlblHomeComponent, 
    AppGlblPagenotfoundComponent, 

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    AppFormatterModule,
    AppFlexLayoutModule,
    HttpClientModule,
  ],
  entryComponents: [
  ],
  exports: [
  ],
  providers: [
    AppConfigService,
    {
        provide: APP_INITIALIZER,
        useFactory: appInitializerFn,
        multi: true,
        deps: [AppConfigService]
    },        
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppGlblInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

