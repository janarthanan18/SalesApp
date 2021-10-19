import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signingappointment',
  templateUrl: './signingappointment.page.html',
  styleUrls: ['./signingappointment.page.scss'],
})
export class SigningappointmentPage implements OnInit {
  salesid: any;
  sign: any;

  constructor(private navCtrl : NavController ,private dataservice: DataService) {}

  ngOnInit() {
    this.salesid = JSON.parse(localStorage.getItem('salesId'));
    console.log(this.salesid);
   this.appointment();
  }
  appointment(){
    const params : any ={};
    params.sales_id = this.salesid;
    this.dataservice.getsigningAppointment(params).subscribe((value : any) => {
      console.log(value);
      this.sign = value;
      
      
    })
      
 
  }
 

  goBack() {
    this.navCtrl.back();
  }



}
