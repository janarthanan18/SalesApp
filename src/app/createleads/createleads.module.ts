import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateleadsPageRoutingModule } from './createleads-routing.module';

import { CreateleadsPage } from './createleads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateleadsPageRoutingModule
  ],
  declarations: [CreateleadsPage]
})
export class CreateleadsPageModule {}
