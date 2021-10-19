import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialmediamodalPageRoutingModule } from './socialmediamodal-routing.module';

import { SocialmediamodalPage } from './socialmediamodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SocialmediamodalPageRoutingModule
  ],
  declarations: [SocialmediamodalPage]
})
export class SocialmediamodalPageModule {}
