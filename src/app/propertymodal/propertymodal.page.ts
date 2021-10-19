import { Component, OnInit } from '@angular/core';
import { ModalController  } from '@ionic/angular';
@Component({
  selector: 'app-propertymodal',
  templateUrl: './propertymodal.page.html',
  styleUrls: ['./propertymodal.page.scss'],
})
export class PropertymodalPage implements OnInit {

  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }

  dismiss() {
  
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
