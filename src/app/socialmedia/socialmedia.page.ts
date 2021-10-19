import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.page.html',
  styleUrls: ['./socialmedia.page.scss'],
})
export class SocialmediaPage implements OnInit {
  salesid: any;
  customer: any;

  constructor( private navCtrl: NavController, private dataService: DataService) { }

  ngOnInit() {
    this.salesid = JSON.parse(localStorage.getItem('salesId'));
    console.log(this.salesid);
    this.socailmedia();
  }


  socailmedia(){
    const params: any ={};
    params.sales_id = this.salesid;
    this.dataService.socilamediaLeads(params).subscribe((res : any) =>{
    console.log(res)
    this.customer =res;
    })

  }
  goBack () {
    this.navCtrl.back();
  } 
  gotoNext (id) {
    this.navCtrl.navigateForward('/socialmedialeads/' + id);
  }
}
