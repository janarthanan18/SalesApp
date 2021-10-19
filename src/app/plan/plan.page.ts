import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
 goBack() {
  this.navCtrl.back();
}
gotoPage(page) {
  this.navCtrl.navigateForward(page);
}
}
