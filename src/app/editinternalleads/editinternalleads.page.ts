import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NavController,ToastController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-editinternalleads',
  templateUrl: './editinternalleads.page.html',
  styleUrls: ['./editinternalleads.page.scss'],
})
export class EditinternalleadsPage implements OnInit {
  leadsId: any;
  internal : FormGroup;
  data: Object;
  salesid: any;
  constructor(private toastController: ToastController,private route :ActivatedRoute ,private navctrl : NavController, private formBuilder: FormBuilder,private dataservice: DataService) {
    this.leadsId = this.route.snapshot.params.id
    console.log(this.leadsId);
    this.internal = this.formBuilder.group({
      first_name : ["", Validators.required],
      last_name : ["", Validators.required],
      passport : [""],
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

   ngOnInit() {
    this.salesid = JSON.parse(localStorage.getItem('salesId'));
    console.log(this.salesid); 
     const params: any ={};
     params.lead_id = this.leadsId;
     this.dataservice.getInternalLeads(params).subscribe(resp => {
     console.log(resp);
     this.data = resp;
      console.log(this.data['first_name'])
     this.internal.get('first_name').setValue(this.data['first_name']);
     this.internal.get('last_name').setValue(this.data['last_name']);
     this.internal.get('passport').setValue(this.data['passport']);
     this.internal.get('email').setValue(this.data['email']);
     this.internal.get('age').setValue(this.data['age']);
     this.internal.get('gender').setValue(this.data['gender']);
     this.internal.get('phone_number').setValue(this.data['phone_number']);
     this.internal.get('address_line1').setValue(this.data['address_line1']);
     this.internal.get('address_line2').setValue(this.data['address_line2']);
     this.internal.get('postal_code').setValue(this.data['postal_code']);
     this.internal.get('occupation').setValue(this.data['occupation']);
     this.internal.get('salary_range').setValue(this.data['salary_range']);
     this.internal.get('property_category_preferred').setValue(this.data['property_category_preferred']);
     this.internal.get('property_price_preferred').setValue(this.data['property_price_preferred']);
     this.internal.get('nationality').setValue(this.data['nationality']);
     this.internal.get('state').setValue(this.data['state']);
     this.internal.get('country').setValue(this.data['country']);
     this.internal.get('province').setValue(this.data['province']);
     this.internal.get('created_by').setValue(this.data['created_by']);

     })
  }

   internalForm() {
    //  console.log(this.internal.value);
     const params: any = {};
     params.lead_id = this.leadsId
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
     this.dataservice.UpdateInternalLeads(params).subscribe((data : any) => {
       console.log(data);
       this.successToast(data);
        this.internal.reset();
        this.navctrl.back();
     })
 }

 async successToast(data) {
  const toast = await this.toastController.create({
    message: data.message,
    duration: 3000,
    position: 'top',
    mode: 'ios',
    color: 'success'
  });
  toast.present();
}


  goBack() {
    this.navctrl.back();
  }
}
