import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LotbookingstatusPageRoutingModule } from './lotbookingstatus-routing.module';

import { LotbookingstatusPage } from './lotbookingstatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LotbookingstatusPageRoutingModule
  ],
  declarations: [LotbookingstatusPage]
})
export class LotbookingstatusPageModule {}
