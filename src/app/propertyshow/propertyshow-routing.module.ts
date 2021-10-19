import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyshowPage } from './propertyshow.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyshowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyshowPageRoutingModule {}
