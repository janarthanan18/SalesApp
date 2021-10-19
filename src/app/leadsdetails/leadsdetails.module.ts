import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeadsdetailsPageRoutingModule } from './leadsdetails-routing.module';

import { LeadsdetailsPage } from './leadsdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeadsdetailsPageRoutingModule
  ],
  declarations: [LeadsdetailsPage]
})
export class LeadsdetailsPageModule {}
