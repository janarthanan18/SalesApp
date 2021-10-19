import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalescommissionPageRoutingModule } from './salescommission-routing.module';

import { SalescommissionPage } from './salescommission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalescommissionPageRoutingModule
  ],
  declarations: [SalescommissionPage]
})
export class SalescommissionPageModule {}
