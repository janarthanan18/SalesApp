import { Component, OnInit } from '@angular/core';
import { NavController  } from "@ionic/angular";
@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
goBack() {
  this.navCtrl.back();
}
}
