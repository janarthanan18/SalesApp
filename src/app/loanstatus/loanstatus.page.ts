import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-loanstatus',
  templateUrl: './loanstatus.page.html',
  styleUrls: ['./loanstatus.page.scss'],
})
export class LoanstatusPage implements OnInit {
  salesid: any;
  loan: any;

  constructor(private navctrl: NavController, private dataservice: DataService) { }

  ngOnInit() {
    this.salesid = JSON.parse(localStorage.getItem('salesId'));
    console.log(this.salesid);
    this.loanstatus();
  }
   loanstatus() {
      const params : any = {};
      params.sales_id = this.salesid;
      this.dataservice.getLoanStatus(params).subscribe((resp : any) => {
        console.log(resp);
        this.loan = resp;
        
      }) 
  }
  goBack() {
    this.navctrl.back();
  }
}
