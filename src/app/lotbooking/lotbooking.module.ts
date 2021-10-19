import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { IonicModule } from '@ionic/angular';

import { LotbookingPageRoutingModule } from './lotbooking-routing.module';

import { LotbookingPage } from './lotbooking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinchZoomModule,
    LotbookingPageRoutingModule
  ],
  declarations: [LotbookingPage]
})
export class LotbookingPageModule {}
