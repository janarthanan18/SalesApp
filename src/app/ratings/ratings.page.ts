import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.page.html',
  styleUrls: ['./ratings.page.scss'],
})
export class RatingsPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
goBack() {
  this.navCtrl.back();
}
}
