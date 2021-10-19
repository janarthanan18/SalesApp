import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.page.html',
  styleUrls: ['./customerdetails.page.scss'],
})
export class CustomerdetailsPage implements OnInit {

  constructor( private navCtrl : NavController,public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }

    });
    return await modal.present();
  }
  goBack() {
    this.navCtrl.back();
  }
}
