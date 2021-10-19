import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertymodalPageRoutingModule } from './propertymodal-routing.module';

import { PropertymodalPage } from './propertymodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertymodalPageRoutingModule
  ],
  declarations: [PropertymodalPage]
})
export class PropertymodalPageModule {}
