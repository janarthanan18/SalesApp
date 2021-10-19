import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigningappointmentPageRoutingModule } from './signingappointment-routing.module';

import { SigningappointmentPage } from './signingappointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigningappointmentPageRoutingModule
  ],
  declarations: [SigningappointmentPage]
})
export class SigningappointmentPageModule {}
