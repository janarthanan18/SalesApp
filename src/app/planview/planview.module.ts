import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { PinchZoomModule } from 'ngx-pinch-zoom';

import { IonicModule } from '@ionic/angular';

import { PlanviewPageRoutingModule } from './planview-routing.module';

import { PlanviewPage } from './planview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // PinchZoomModule,
    PlanviewPageRoutingModule
  ],
  declarations: [PlanviewPage]
})
export class PlanviewPageModule {}
