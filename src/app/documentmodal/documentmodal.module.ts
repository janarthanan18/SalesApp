import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentmodalPageRoutingModule } from './documentmodal-routing.module';

import { DocumentmodalPage } from './documentmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentmodalPageRoutingModule
  ],
  declarations: [DocumentmodalPage]
})
export class DocumentmodalPageModule {}
