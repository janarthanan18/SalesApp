import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.page.html',
  styleUrls: ['./privacypolicy.page.scss'],
})
export class PrivacypolicyPage implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
 
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
