import { Component, Input,OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-lotbookingavailable',
  templateUrl: './lotbookingavailable.page.html',
  styleUrls: ['./lotbookingavailable.page.scss'],
})
export class LotbookingavailablePage implements OnInit {
  customer_Id: any;
  customer: any;
 

  constructor(public navCtrl: NavController,public dataService: DataService,private route :ActivatedRoute) { 
    this.customer_Id = this.route.snapshot.params.id
    console.log(this.customer_Id);
  }

  ngOnInit() {
    this.gotoCustomer();
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
