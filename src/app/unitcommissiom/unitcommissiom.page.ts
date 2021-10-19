import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-unitcommissiom',
  templateUrl: './unitcommissiom.page.html',
  styleUrls: ['./unitcommissiom.page.scss'],
})
export class UnitcommissiomPage implements OnInit {
  salesid: any;
  unit : any;
  amt:any
  constructor(private navCtrl : NavController, private dataservice: DataService) { }

  ngOnInit() {
    this.salesid = JSON.parse(localStorage.getItem('salesId'));
    console.log(this.salesid);
    this.unitCommission();
  }
  unitCommission() {
    
    const params: any = {};
    params.sales_id = this.salesid;
    this.dataservice.getunitCommision(params).subscribe(value  => {
      console.log(value);
      this.unit = value[0];
       this.amt= value[2];
    })
  }

  goBack() {
    this.navCtrl.back();
  }
}
