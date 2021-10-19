import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialmedialeadsPageRoutingModule } from './socialmedialeads-routing.module';

import { SocialmedialeadsPage } from './socialmedialeads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SocialmedialeadsPageRoutingModule
  ],
  declarations: [SocialmedialeadsPage]
})
export class SocialmedialeadsPageModule {}
