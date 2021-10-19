import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.page.html',
  styleUrls: ['./propertylist.page.scss'],
})
export class PropertylistPage implements OnInit {
  propertylist: any;
  property2: any;
  property3: any;
  property4: any;
  property5: any;

  constructor(private navctrl : NavController,private dataservice: DataService) { }

  ngOnInit() {
           this.getProperty();
  }
  getProperty() {
    this.dataservice.getPropertyList().subscribe((response: any) => {
      console.log(response);
     this.propertylist = response;
   })
  }
  goBack() {
    this.navctrl.back();
  }

  gotoDetails(id) {
    this.navctrl.navigateForward('/propertydetails/' + id);
  }
}
