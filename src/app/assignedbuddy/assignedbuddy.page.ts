import { Component, OnInit,Input } from '@angular/core';
import { ModalController,ToastController } from '@ionic/angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-assignedbuddy',
  templateUrl: './assignedbuddy.page.html',
  styleUrls: ['./assignedbuddy.page.scss'],
})
export class AssignedbuddyPage implements OnInit {
 selectOption : FormGroup;
  sales: any=[];
  admin: any= [];
  admins: any;
  salesman: any;
  @Input() data: any;

  salesmansocial: any;

  adminsocial: any;
  
  constructor(private toastController: ToastController,private dataService:DataService,private formBuilder: FormBuilder,public modalController: ModalController) {
    this.selectOption =this.formBuilder.group({
      salesmansocial: [],
      adminsocial: [],
      buddylist: [''],

    })
   }

  ngOnInit() {
    console.log(this.data);
    
    const params: any ={};
    params.lead_id= this.data;
    console.log(params);
    
    this.dataService.socialBuddy(params).subscribe(resp => {
    console.log(resp);
    
    this.admins = resp["admin"];
    this.salesman= resp["sales"];
    console.log(this.salesman);
    
    console.log(this.admins);
    
  })
  }

  // ionViewWillEnter() {
  //   this.selectForm()
  // }
  selectForm(){
    console.log(this.selectOption.value);

 const params: any ={};

 params.lead_id = this.data;
 params.salesman= this.selectOption.value.salesmansocial;
 params.admin= this.selectOption.value.adminsocial;
 console.log(params);
 
 this.dataService.PostBuddy(params).subscribe(data => {
   console.log(data);
   this.presentToast(data);
   this.dismiss()
 })
 
 }


 async presentToast(data) {
  const toast = await this.toastController.create({
    message: data.message,
    color: 'success',
    duration: 2000,
    position: 'top',

  });
  toast.present();
}

  select(event) {
    // console.log(event.target.value);
   this.sales.push(event.target.value);
   console.log(this.sales);

    
  }

  selectAdmin(event) {
    // console.log(event.target.value);
    this.admin.push(event.target.value)
console.log(this.admin);

  }

  selectSales(event) {
    console.log(this.selectOption)
    // console.log(event.target.value);
   this.sales.push(event.target.value);
   console.log(this.sales);
 }

  dismiss() {

    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
