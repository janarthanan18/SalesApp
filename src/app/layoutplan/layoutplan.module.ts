import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutplanPageRoutingModule } from './layoutplan-routing.module';

import { LayoutplanPage } from './layoutplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutplanPageRoutingModule
  ],
  declarations: [LayoutplanPage]
})
export class LayoutplanPageModule {}
