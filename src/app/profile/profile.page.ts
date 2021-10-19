import { Component, OnInit } from '@angular/core';
import { NavController }  from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

import { DataService } from  '../services/data.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  salesid: any;
  user: any;
  data: any;

  constructor(private httpClient : HttpClient,private dataService: DataService,private navCtrl: NavController) { }

  ngOnInit() {
    this.salesid = JSON.parse(localStorage.getItem('salesId'));
   console.log(this.salesid);
 
  //  const params: any = {};
  //  params.sales_id = '3';
  //  return this.httpClient.get('https://premierplusgroup.com/public/api/profile?sales_id=3' ).subscribe((res: any ) => {
  //    console.log(res);
  //    this.user =res;

  //  })
    this.profile();
  }

  profile() {
    const params: any = {};
    params.sales_id = this.salesid;
    this.dataService.getProfile(params).subscribe((res: any) => {
      console.log(res);
      this.user =res;
      this.data = this.user.sales_type;
      console.log(this.data);
      
    })
  }






  // profile() {
  //   const params: any = {};
  //   params.sales_id = 3;
  //   this.dataService.getProfile(params).subscribe(( res : any) => {
  //     console.log(res);
      
  //   })
  // }
goBack() {
  this.navCtrl.back();
}
}
