import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LotbookingsoldPageRoutingModule } from './lotbookingsold-routing.module';

import { LotbookingsoldPage } from './lotbookingsold.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LotbookingsoldPageRoutingModule
  ],
  declarations: [LotbookingsoldPage]
})
export class LotbookingsoldPageModule {}
