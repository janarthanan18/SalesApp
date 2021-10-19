import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlandetailsPageRoutingModule } from './plandetails-routing.module';

import { PlandetailsPage } from './plandetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlandetailsPageRoutingModule
  ],
  declarations: [PlandetailsPage]
})
export class PlandetailsPageModule {}
