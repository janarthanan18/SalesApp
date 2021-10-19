import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyindexPageRoutingModule } from './propertyindex-routing.module';

import { PropertyindexPage } from './propertyindex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyindexPageRoutingModule
  ],
  declarations: [PropertyindexPage]
})
export class PropertyindexPageModule {}
