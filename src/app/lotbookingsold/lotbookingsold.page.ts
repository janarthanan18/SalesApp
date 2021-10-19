import { Component, OnInit } from '@angular/core';
import {NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lotbookingsold',
  templateUrl: './lotbookingsold.page.html',
  styleUrls: ['./lotbookingsold.page.scss'],
})
export class LotbookingsoldPage implements OnInit {
  customer_Id: any;
  customer: any;

  constructor(private route :ActivatedRoute,public dataService: DataService,private navCtrl : NavController) { 
    this.customer_Id = this.route.snapshot.params.id
    console.log(this.customer_Id);
  }

  ngOnInit() {
    this.gotoCustomer()
  }
  gotoCustomer() {
    const params: any ={};
    params.customer_id = this.customer_Id;
    console.log(params.customer_id);
    
    this.dataService.getCustomer(params).subscribe((value:any) => {
    console.log(value);
    this.customer = value;
   })
  }
goBack() {
  this.navCtrl.back();
}

}
