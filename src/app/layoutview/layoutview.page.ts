import { Component, OnInit } from '@angular/core';
import {  NavController } from "@ionic/angular";
@Component({
  selector: 'app-layoutview',
  templateUrl: './layoutview.page.html',
  styleUrls: ['./layoutview.page.scss'],
})
export class LayoutviewPage implements OnInit {
  // sliderOpt = {
  //   zoom: {
  //     maxRatio: 1,
  //   },
  // };
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
goBack() {
  this.navCtrl.back();
}

}
