import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-book',
   templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
goBack(){
  this.navCtrl.back();
}

gotoPage(page) {
  this.navCtrl.navigateForward(page);
}
}
