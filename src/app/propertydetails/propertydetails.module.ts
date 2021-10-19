import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertydetailsPageRoutingModule } from './propertydetails-routing.module';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { PropertydetailsPage } from './propertydetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertydetailsPageRoutingModule,

  ],
  declarations: [PropertydetailsPage],
  providers:[PhotoViewer,InAppBrowser]
})
export class PropertydetailsPageModule {}
