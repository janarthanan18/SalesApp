import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { AddsalescommissionPageRoutingModule } from './addsalescommission-routing.module';

import { AddsalescommissionPage } from './addsalescommission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddsalescommissionPageRoutingModule
  ],
  declarations: [AddsalescommissionPage]
})
export class AddsalescommissionPageModule {}
