import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyindexPage } from './propertyindex.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyindexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyindexPageRoutingModule {}
