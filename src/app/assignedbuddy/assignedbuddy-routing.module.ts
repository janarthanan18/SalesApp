import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignedbuddyPage } from './assignedbuddy.page';

const routes: Routes = [
  {
    path: '',
    component: AssignedbuddyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignedbuddyPageRoutingModule {}
