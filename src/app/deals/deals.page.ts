import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-deals',
  templateUrl: './deals.page.html',
  styleUrls: ['./deals.page.scss'],
})
export class DealsPage implements OnInit {

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
