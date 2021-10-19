import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterestedpropertyPageRoutingModule } from './interestedproperty-routing.module';

import { InterestedpropertyPage } from './interestedproperty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterestedpropertyPageRoutingModule
  ],
  declarations: [InterestedpropertyPage]
})
export class InterestedpropertyPageModule {}
