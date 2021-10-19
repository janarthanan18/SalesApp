import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternalmodalPageRoutingModule } from './internalmodal-routing.module';

import { InternalmodalPage } from './internalmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    InternalmodalPageRoutingModule
  ],
  declarations: [InternalmodalPage]
})
export class InternalmodalPageModule {}
