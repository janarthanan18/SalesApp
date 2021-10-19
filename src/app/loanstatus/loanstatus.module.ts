import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanstatusPageRoutingModule } from './loanstatus-routing.module';

import { LoanstatusPage } from './loanstatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanstatusPageRoutingModule
  ],
  declarations: [LoanstatusPage]
})
export class LoanstatusPageModule {}
