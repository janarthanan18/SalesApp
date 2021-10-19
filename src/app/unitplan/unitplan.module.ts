import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitplanPageRoutingModule } from './unitplan-routing.module';

import { UnitplanPage } from './unitplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitplanPageRoutingModule
  ],
  declarations: [UnitplanPage]
})
export class UnitplanPageModule {}
