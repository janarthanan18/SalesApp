import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterassignpipelinePageRoutingModule } from './registerassignpipeline-routing.module';

import { RegisterassignpipelinePage } from './registerassignpipeline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegisterassignpipelinePageRoutingModule
  ],
  declarations: [RegisterassignpipelinePage]
})
export class RegisterassignpipelinePageModule {}
