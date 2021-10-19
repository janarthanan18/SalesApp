import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-plandetails',
  templateUrl: './plandetails.page.html',
  styleUrls: ['./plandetails.page.scss'],
})
export class PlandetailsPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
goBack() {
  this.navCtrl.back();
}
}
