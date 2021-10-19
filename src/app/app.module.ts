import { NgModule ,} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
// import { NgApexchartsModule } from "ng-apexcharts";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http' ;
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

// import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     ReactiveFormsModule,
    BrowserAnimationsModule,
   ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },InAppBrowser,PreviewAnyFile],
  bootstrap: [AppComponent],
})
export class AppModule {}
  