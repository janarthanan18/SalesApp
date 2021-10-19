import { Component, OnInit } from '@angular/core';
import {NavController } from '@ionic/angular';
@Component({
  selector: 'app-leads',
  templateUrl: './leads.page.html',
  styleUrls: ['./leads.page.scss'],
})
export class LeadsPage implements OnInit {

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
