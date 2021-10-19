import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  salesid: any;
  notification: any;
  count: any;
  unreadCount: any;
  data: Object;
  list: any;
  constructor(private navCtrl: NavController,private dataService : DataService) { }

  ngOnInit() {

    this.salesid = JSON.parse(localStorage.getItem('salesId'));
console.log(this.salesid);

    this.notify();
    // localStorage.setItem('salesId', this.data.sales_id);

  }


  notify () {
    const params : any ={};
    params.sales_id = this.salesid
    this.dataService.Notification(params).subscribe(async res  => {
      console.log(res);
      this.data = res;
      // this.list = this.data['notification'];
      // console.log(this.list);
      
      // this.count=res['count'];
      // console.log(this.count);
      // localStorage.setItem('COUNT', this.count);
      // this.unreadCount = JSON.parse(localStorage.getItem('COUNT'));
    })
  }
goBack() {
  this.navCtrl.back();
}
}
