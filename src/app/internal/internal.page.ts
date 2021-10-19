import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';
import { ModalController, ToastController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-internal',
  templateUrl: './internal.page.html',
  styleUrls: ['./internal.page.scss'],
})
export class InternalPage implements OnInit {
  salesid : any;
  internalleads: any;
  leadsId: any;
  constructor( public alertCtrl: AlertController, private toastController : ToastController,private dataService:DataService,private navCtrl: NavController,public modalController: ModalController) { }

  ngOnInit() {
    this.salesid = JSON.parse(localStorage.getItem('salesId'));
    console.log(this.salesid);
    const params: any ={};
    params.sales_id = this.salesid;
    this.dataService.internalLeads(params).subscribe((value : any ) => {
      console.log(value);
      this.internalleads = value;
   console.log(this.internalleads);


      for (let i= 0 ;i< this.internalleads; i++) {
        this.leadsId = this.internalleads[i].id;
        console.log(this.leadsId);
      }

   
      

    })
  }
 

  ionViewWillEnter() {
    this.ngOnInit();
  }

addLead() {
  this.navCtrl.navigateForward('/internalmodal');
}

  async deleteinternal(id) {
    console.log(id);

  const alert = await this.alertCtrl.create({
  message: 'Confirm! Are you sure want to delete? ',
  buttons: [
    {
      text : 'Yes',
      handler: () => {
        const params: any = {};
  
  params.lead_id = id;
  this.dataService.deleteinternalLeads(params).subscribe((resp: any) => {
    console.log(resp);
    this.successToast1(resp);

    this.ngOnInit();
        
        }, err => {
          console.log(err);
        });
      }
    },
    {
      text : 'No',
      handler: () => {
        console.log('Thank you');
        // this.navCtrl.back();
      }
    }
  ]
}); alert.present();


  // const params: any = {};
  // params.lead_id = this.leadsId;
  // this.dataService.deleteinternalLeads(params).subscribe((resp: any) => {
  //   console.log(resp);

  //   this.ngOnInit();
  //   this.successToast1(resp);
    
  // })
}
async successToast(data) {
  const toast = await this.toastController.create({
    message: data.message,
    duration: 3000,
    position: 'top',
    mode: 'ios',
    color: 'success'
  });
  toast.present();
}
pipeline(id) {
  this.navCtrl.navigateForward('/internalpipeline/' + id);
}

async successToast1(resp) {
  const toast = await this.toastController.create({
    message: resp.message,
    duration: 3000,
    position: 'top',
    mode: 'ios',
    color: 'success'
  });
  toast.present();
}

gotoEditInternal(id) {
  this.navCtrl.navigateForward('/editinternalleads/' + id);
}

  goBack () {
    this.navCtrl.back();
  }
}
