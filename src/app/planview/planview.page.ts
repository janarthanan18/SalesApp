import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-planview',
  templateUrl: './planview.page.html',
  styleUrls: ['./planview.page.scss'],
})
export class PlanviewPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
goBack() {
  this.navCtrl.back();
}
gotoPage(page) {
  this.navCtrl.navigateForward(page);
}
}
