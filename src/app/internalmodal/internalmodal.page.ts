import { Component, OnInit } from '@angular/core';
import { ModalController,ToastController,NavController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-internalmodal',
  templateUrl: './internalmodal.page.html',
  styleUrls: ['./internalmodal.page.scss'],
})
export class InternalmodalPage implements OnInit {
  internal : FormGroup;
  salesid: any;
 constructor(private navctrl: NavController,private toastController: ToastController,public modalController: ModalController, private formBuilder: FormBuilder,private dataservice: DataService) {
    this.internal = this.formBuilder.group({
      first_name : ["", Validators.required],
      last_name : ["", Validators.required],
      passport : ["", Validators.required],
      email : ["", Validators.required],
      age: [""],
      gender : [""],
      phone_number : ["", Validators.required],
      address_line1 : [""],
      address_line2 : [""],
      postal_code : [""],
      occupation : ["", Validators.required],
      salary_range : [""],
      property_category_preferred : ["", Validators.required],
      nationality : ["", Validators.required],
      state : ["", Validators.required],
      country : ["", Validators.required],
      province : ["", Validators.required],
      created_by : [""],
      property_price_preferred: [""]
    })
   }

   internalForm() {
    //  console.log(this.internal.value);
     const params: any = {};
     params.first_name = this.internal.value.first_name;
     params.last_name = this.internal.value.last_name;
     params.passport = this.internal.value.passport;
     params.email = this.internal.value.email;
     params.age = this.internal.value.age;
     params.gender = this.internal.value.gender;
     params.phone_number = this.internal.value.phone_number;
     params.address_line1 = this.internal.value.address_line1;
     params.address_line2 = this.internal.value.address_line2;
     params.postal_code = this.internal.value.postal_code;
     params.occupation = this.internal.value.occupation;
     params.salary_range = this.internal.value.salary_range;
     params.property_category_preferred = this.internal.value.property_category_preferred;
     params.property_price_preferred = this.internal.value.property_price_preferred;
     params.nationality = this.internal.value.nationality;
     params.state = this.internal.value.state;
     params.country = this.internal.value.country;
     params.province = this.internal.value.province;
     params.created_by = this.salesid;
     console.log(params);
     this.dataservice.PostInternalLeads(params).subscribe((data : any) => {
       console.log(data);
       this.successToast();
        this.internal.reset();
        this.navctrl.back();

     })
     

      
   }
   async successToast() {
    const toast = await this.toastController.create({
      message: 'Leads Added Successfully!!',
      duration: 3000,
      position: 'top',
      mode: 'ios',
      color: 'success'
    });
    toast.present();
  }

  ngOnInit() {
    this.salesid = JSON.parse(localStorage.getItem('salesId'));
   console.log(this.salesid); 
   }

  
  goBack() {
    this.navctrl.back();
  }

}
