import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatedealsPageRoutingModule } from './createdeals-routing.module';

import { CreatedealsPage } from './createdeals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatedealsPageRoutingModule
  ],
  declarations: [CreatedealsPage]
})
export class CreatedealsPageModule {}
