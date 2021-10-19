import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternalPageRoutingModule } from './internal-routing.module';

import { InternalPage } from './internal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InternalPageRoutingModule
  ],
  declarations: [InternalPage]
})
export class InternalPageModule {}
