import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-documentdetails',
  templateUrl: './documentdetails.page.html',
  styleUrls: ['./documentdetails.page.scss'],
})
export class DocumentdetailsPage implements OnInit {
  salesid: any;
  document: any;

  constructor(private navCtrl: NavController , private dataService : DataService) { }

  ngOnInit() {
    this.salesid = JSON.parse(localStorage.getItem('salesId'));
    console.log(this.salesid);
    this.getdocument();
  }
  getdocument() {
    const params: any ={};
    params.sales_id = this.salesid;
  this.dataService.getDocument(params).subscribe(resp => {
    console.log(resp);
    this.document =resp;
    
  })
  }

  goBack() {
    this.navCtrl.back();
  }

  gotoDocument(id) {
    this.navCtrl.navigateForward('/documentview/' + id);
  }
}
