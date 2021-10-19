import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { DataService } from '../services/data.service'
@Component({
  selector: 'app-registerassign',
  templateUrl: './registerassign.page.html',
  styleUrls: ['./registerassign.page.scss'],
})
export class RegisterassignPage implements OnInit {
  salesid: any;
  leads: any;

  constructor(private navCtrl :NavController,private dataService: DataService ) { }

  ngOnInit() {
    this.salesid = JSON.parse(localStorage.getItem('salesId'));
    console.log(this.salesid);
    this.registerleads();
  }


 registerleads() {
   const params: any ={};
   params.sales_id = this.salesid
   this.dataService.registerAssignLeads(params).subscribe((value : any) => {
   console.log(value);
   this.leads = value;

   })
 }

  goBack () {
    this.navCtrl.back();
  } 
  gotoNext (id){
    this.navCtrl.navigateForward('/registerassignleads/' + id);
  }
}
