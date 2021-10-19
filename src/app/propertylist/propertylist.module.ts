import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertylistPageRoutingModule } from './propertylist-routing.module';

import { PropertylistPage } from './propertylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertylistPageRoutingModule
  ],
  declarations: [PropertylistPage]
})
export class PropertylistPageModule {}
