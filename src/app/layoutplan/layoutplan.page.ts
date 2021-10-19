import { Component, OnInit } from '@angular/core';
import {  NavController } from "@ionic/angular";
import { ThemeService } from 'ng2-charts';
@Component({
  selector: 'app-layoutplan',
  templateUrl: './layoutplan.page.html',
  styleUrls: ['./layoutplan.page.scss'],
})
export class LayoutplanPage implements OnInit {

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
