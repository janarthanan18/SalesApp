import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentviewPageRoutingModule } from './documentview-routing.module';

import { DocumentviewPage } from './documentview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentviewPageRoutingModule
  ],
  declarations: [DocumentviewPage]
})
export class DocumentviewPageModule {}
