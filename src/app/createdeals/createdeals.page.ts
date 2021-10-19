import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-createdeals',
  templateUrl: './createdeals.page.html',
  styleUrls: ['./createdeals.page.scss'],
})
export class CreatedealsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
goBack() {
  this.navCtrl.back()
}
gotoPage(page) {
  this.navCtrl.navigateForward(page);
}
}
