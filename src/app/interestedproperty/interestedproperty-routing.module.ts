import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterestedpropertyPage } from './interestedproperty.page';

const routes: Routes = [
  {
    path: '',
    component: InterestedpropertyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterestedpropertyPageRoutingModule {}
