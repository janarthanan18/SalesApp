import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { IonicModule } from '@ionic/angular';
import { NgApexchartsModule } from "ng-apexcharts";

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';


@NgModule({
  imports: [
    CommonModule,
    NgApexchartsModule,
    FormsModule,
    IonicModule,
    Ng2GoogleChartsModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
