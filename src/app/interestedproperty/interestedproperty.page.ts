import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-interestedproperty',
  templateUrl: './interestedproperty.page.html',
  styleUrls: ['./interestedproperty.page.scss'],
})
export class InterestedpropertyPage implements OnInit {

  lead_id: any;
  name: any;
  property: any;
  constructor(private dataService: DataService, private route: ActivatedRoute,private navctrl: NavController) { 
    this.lead_id = this.route.snapshot.params.id
    console.log(this.lead_id);
  }

  ngOnInit() {
const params: any = {};
params.lead_id = this.lead_id;
this.dataService.customerProperty(params).subscribe(resp => {
  console.log(resp);
  this.name =resp["name"];
  console.log(this.name);
  this.property = resp["properties"];
  console.log(this.property);
  
})
 
  }

  goBack(){
    this.navctrl.back();
  }

}
