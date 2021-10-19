import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-salescommission',
  templateUrl: './salescommission.page.html',
  styleUrls: ['./salescommission.page.scss'],
})
export class SalescommissionPage implements OnInit {
  salesid: any;
  sales: any;
  constructor(private navctrl: NavController , private dataService: DataService) { }

  ngOnInit() {
    this.salesid = JSON.parse(localStorage.getItem('salesId'));
console.log(this.salesid);

const params: any ={} 
params.sales_id = this.salesid;

this.dataService.PostSalesCommission(params).subscribe(resp => {
  console.log(resp);
  this.sales = resp;
})
  }



  goBack() {
    this.navctrl.back();
  }


  gotoNext(id) {
    this.navctrl.navigateForward('/addsalescommission/' + id);
  }
}
