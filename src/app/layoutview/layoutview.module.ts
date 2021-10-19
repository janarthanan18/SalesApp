import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { PinchZoomModule } from 'ngx-pinch-zoom';

import { IonicModule } from '@ionic/angular';

import { LayoutviewPageRoutingModule } from './layoutview-routing.module';

import { LayoutviewPage } from './layoutview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // PinchZoomModule,
    IonicModule,
    LayoutviewPageRoutingModule
  ],
  declarations: [LayoutviewPage]
})
export class LayoutviewPageModule {}
