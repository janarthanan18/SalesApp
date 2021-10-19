import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitcommissiomPageRoutingModule } from './unitcommissiom-routing.module';

import { UnitcommissiomPage } from './unitcommissiom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitcommissiomPageRoutingModule
  ],
  declarations: [UnitcommissiomPage]
})
export class UnitcommissiomPageModule {}
