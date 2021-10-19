import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lotbookingrejected',
  templateUrl: './lotbookingrejected.page.html',
  styleUrls: ['./lotbookingrejected.page.scss'],
})
export class LotbookingrejectedPage implements OnInit {
  customer_Id: any;
  customer: any;

  constructor(public dataService: DataService,private navCtrl : NavController,private route :ActivatedRoute) {
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
