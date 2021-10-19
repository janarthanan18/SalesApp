import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialmediapipelinePageRoutingModule } from './socialmediapipeline-routing.module';

import { SocialmediapipelinePage } from './socialmediapipeline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SocialmediapipelinePageRoutingModule
  ],
  declarations: [SocialmediapipelinePage]
})
export class SocialmediapipelinePageModule {}
