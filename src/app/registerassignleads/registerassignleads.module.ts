import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterassignleadsPageRoutingModule } from './registerassignleads-routing.module';

import { RegisterassignleadsPage } from './registerassignleads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterassignleadsPageRoutingModule
  ],
  declarations: [RegisterassignleadsPage]
})
export class RegisterassignleadsPageModule {}
