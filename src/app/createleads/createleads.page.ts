import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-createleads',
  templateUrl: './createleads.page.html',
  styleUrls: ['./createleads.page.scss'],
})
export class CreateleadsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
// goBack() {
//   this.navCtrl.back();
// }
// gotoPage(page) {
//   this.navCtrl.navigateForward(page);
// }
}
