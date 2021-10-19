import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-propertyindex',
  templateUrl: './propertyindex.page.html',
  styleUrls: ['./propertyindex.page.scss'],
})
export class PropertyindexPage implements OnInit {
  propertylist: any;
property :any =[];
  data: any;
  value: any;
  constructor(private navCtrl : NavController, private dataService: DataService) { }

  ngOnInit() {
    this.getProperty();
  }

  getProperty() {
    this.dataService.getPropertyList().subscribe((response: any) => {
      console.log(response);
      this.propertylist = response;


      console.log(this.propertylist);
      
    })
  }
// for(let i= 0;i<this.propertylist.length;i++) {
//   this.property.push(this.propertylist[i])  ;
//   console.log("property",this.propertylist[i]);
//   this.data =this.propertylist[i];

//   console.log(this.data);
  
//   // this.data.array.forEach(element => {
//   //   console.log(element);
    
//   // });
//   // for(let j=0;j<this.data.length;j++) {
//   //   this.value = this.data[j];
//   //   console.log(this.value);
    
    
  
  


      //  console.log(this.propertylist[0]);
      //  console.log(this.propertylist[1]);
 
    




  goBack() {
    this.navCtrl.back();
  }
  gotoBook(id) {
    
    this.navCtrl.navigateForward('/lotbooking/' + id);
  }
}
