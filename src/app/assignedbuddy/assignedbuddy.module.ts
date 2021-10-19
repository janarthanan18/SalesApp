import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignedbuddyPageRoutingModule } from './assignedbuddy-routing.module';

import { AssignedbuddyPage } from './assignedbuddy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AssignedbuddyPageRoutingModule
  ],
  declarations: [AssignedbuddyPage]
})
export class AssignedbuddyPageModule {}
