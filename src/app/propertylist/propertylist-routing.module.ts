import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertylistPage } from './propertylist.page';

const routes: Routes = [
  {
    path: '',
    component: PropertylistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertylistPageRoutingModule {}
