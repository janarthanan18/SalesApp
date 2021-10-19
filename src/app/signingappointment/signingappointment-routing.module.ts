import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigningappointmentPage } from './signingappointment.page';

const routes: Routes = [
  {
    path: '',
    component: SigningappointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigningappointmentPageRoutingModule {}
