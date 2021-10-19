import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyshowPageRoutingModule } from './propertyshow-routing.module';

import { PropertyshowPage } from './propertyshow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyshowPageRoutingModule
  ],
  declarations: [PropertyshowPage]
})
export class PropertyshowPageModule {}
