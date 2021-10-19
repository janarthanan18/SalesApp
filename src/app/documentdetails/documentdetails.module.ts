import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentdetailsPageRoutingModule } from './documentdetails-routing.module';

import { DocumentdetailsPage } from './documentdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentdetailsPageRoutingModule
  ],
  declarations: [DocumentdetailsPage]
})
export class DocumentdetailsPageModule {}
