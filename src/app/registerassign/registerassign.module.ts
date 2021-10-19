import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterassignPageRoutingModule } from './registerassign-routing.module';

import { RegisterassignPage } from './registerassign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterassignPageRoutingModule
  ],
  declarations: [RegisterassignPage]
})
export class RegisterassignPageModule {}
