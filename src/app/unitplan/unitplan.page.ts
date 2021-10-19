import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-unitplan',
  templateUrl: './unitplan.page.html',
  styleUrls: ['./unitplan.page.scss'],
})
export class UnitplanPage implements OnInit {

  constructor(  private navCtrl : NavController) { }

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.back();
  }
  gotoPage(page) {
    this.navCtrl.navigateForward(page);
  }
}
