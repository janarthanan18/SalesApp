import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LotbookingavailablePageRoutingModule } from './lotbookingavailable-routing.module';

import { LotbookingavailablePage } from './lotbookingavailable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LotbookingavailablePageRoutingModule
  ],
  declarations: [LotbookingavailablePage]
})
export class LotbookingavailablePageModule {}
