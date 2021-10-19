import { Component,Input, OnInit } from '@angular/core';
import { ModalController,ToastController } from '@ionic/angular';
import { NavController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import {DataService } from '../services/data.service'
import { query } from '@angular/animations';

@Component({
  selector: 'app-lotbookingstatus',
  templateUrl: './lotbookingstatus.page.html',
  styleUrls: ['./lotbookingstatus.page.scss'],
})
export class LotbookingstatusPage implements OnInit {
  customer_Id: any;
  customerId: any;
  salesid :any;
  list: any;
  customer: any;
  lotid: any;
  propertyid: any;
  status: any;
  id: any;
  assignhidevalue: boolean = true;
  searchQuery : boolean = false;
  public objects:any[];

  public labelAttribute:string;  
  // protected: any
  allData = []; //Store all data from provider
  filterData = [];//Store filtered data
  value1: string;
  items: any;
  lots_Id:any;
constructor(private toastController: ToastController ,private dataService: DataService,private navCtrl : NavController,public modalController: ModalController,private route :ActivatedRoute) { 
  this.salesid = JSON.parse(localStorage.getItem('salesId'));

  this.lots_Id = this.route.snapshot.params.id
  console.log(this.lots_Id);

  // protected filter(keyword) {
  //   keyword = keyword.toLowerCase();

  //   return this.objects.filter(
  //     (object) => {
  //       const value = object[this.labelAttribute].toLowerCase();

  //       return value.includes(keyword);
  //     }
  //   );
  // }

}

  



  ngOnInit() {
    this.lotid = localStorage.getItem('lotId');
    console.log(this.lotid);
    this.propertyid = localStorage.getItem('PropertyId');
    this.status = localStorage.getItem('Status');
    console.log(this.status);
    
    // this.search(query);

  }

  filter(value) {
    console.log(value);
    
    this.filterData = this.allData.filter((location) => {

    return location.title.toLowerCase().indexOf(value.toLowerCase( value)) > -1;
  });
}
  




  search(ev: any) {
    const val = ev.target.value;
    console.log(val);
    const params: any = {};
    params. customer_name = val;
    params.sales_id =this.salesid
    this.dataService.getCustomerList(params).subscribe((resp : any) => {
      console.log(resp);
       this.list = resp;
         if(this.list.length === 0){
       this.searchQuery = true;
     }
     else{
       this.searchQuery = false;
     }
     
       this.customerId =resp[0].id;
       console.log(this.customerId);  
      
    
    },err => {
      console.log(err);
      
    })
 
  }


  // search(query) {

    // const params: any = {};
    // params. customer_name = query;

    // this.dataService.getCustomerList(params).subscribe((resp : any) => {
    //   console.log(resp);
    //    //  this.searchQuery = false;
    //    this.list = resp;
    //  console.log(this.list.length === 0);
    //  if(this.list.length === 0){
    //    this.searchQuery = true;
    //  }
    //  else{
    //    this.searchQuery = false;
    //  }
     
    //    this.customerId =resp[0].id;
    //    console.log(this.customerId);  
      
    
    // },err => {
    //   console.log(err);
      
    // });
    // console.log(query);
  // }  


  // search(event: Event) {
  //   this.value1 = (event.target as HTMLInputElement).value;

  //   console.log(event);
  //       if(!event) {
  //   return false 
  //       } 
  //       else {
  //         const params: any = {};
          
  //          params. customer_name = query;
  //           params.sales_id = this.salesid;
  //          this.dataService.getCustomerList(params).subscribe((resp : any) => {
  //            console.log(resp);
  //              this.searchQuery = false;
  //             this.list = resp;

  //             // if(this.All === 'Check-in' || this.All === 'Check-out'){
             
              
                 
  //               //  this.list = this.list.filter((item) => {
  //               //   this.searchQuery = false;

  //               //   return (item.first_name.toLocaleLowerCase().indexOf(event.toLocaleLowerCase()) > -1);
  //               // })
              
  //             // }
  //           //  console.log(this.list.length>0 );
  //           // // if(this.list.length === 0){
  //           //   this.searchQuery = true;
  //           //   let value = this.list.indexOf(event);
              
  //           //   this.list = this.list.filter((sample) =>{
  //           //   // console.log(sample.first_name);
  //           //     return sample.first_name.toLowerCase().indexOf(value.toLowerCase()> -1);
  //           //   })
              
  //           // // }
  //           // // else{
  //           // //   this.searchQuery = false;
  //           // // }
            
  //           //   this.customerId =resp[0].id;
  //           //   console.log(this.customerId);  
             
           
  //          },err => {
  //            console.log(err);
             
  //          });
  //          console.log(query);
  //       }
   
  //    }



   gotoCustomer() {
     const params: any ={};
     params.customer_id = this.customerId;
     console.log(params.customer_id);
     
     this.dataService.getCustomer(params).subscribe((value:any) => {
     console.log(value);
     this.customer = value;
     if(this.customer){
       this.assignhidevalue = false;
     }
    })
   }

   submit() {
     const params: any ={};
     console.log(this.lots_Id);
    //  console.log(this.status);
     console.log(this.customerId);
     console.log(this.propertyid);
     
     params.lot_id =this.lots_Id;
     params.status = '2';
     params.customer_id= this.customerId;
     params.property_id = this.propertyid;
     this.dataService.lotSubmit(params).subscribe(async (resp: any ) => {
       console.log(resp);
        this.successToast();

        this.navCtrl.navigateForward('/lotbooking/' + this.propertyid );

     })
      }

      async successToast() {
        const toast = await this.toastController.create({
          message: 'Lot Booked Successfully!!',
          duration: 3000,
          position: 'top',
          mode: 'ios',
          color: 'success'
        });
        toast.present();
      }

  //   filterItems(searchTerm) {
  //   return this.list.filter(item => {
  //     return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  //   });
  // }
  goBack() {
      this.navCtrl.back();

  }

}
