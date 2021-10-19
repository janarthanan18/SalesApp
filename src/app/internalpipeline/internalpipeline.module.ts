import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternalpipelinePageRoutingModule } from './internalpipeline-routing.module';

import { InternalpipelinePage } from './internalpipeline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    InternalpipelinePageRoutingModule
  ],
  declarations: [InternalpipelinePage]
})
export class InternalpipelinePageModule {}
