import { Component, OnInit } from '@angular/core';
import { NavController, ToastController ,AlertController } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { DataService } from '../services/data.service';
import { ModalController } from '@ionic/angular';
import {PrivacypolicyPage } from '../privacypolicy/privacypolicy.page';
// import { Cookie } from 'ng2-cookies';
@Component({

  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  Email :any;
  Password :any;
  userId: any;
  data: any;
  cookieemail: void;
  cookiepw: void;
  // checkedItems = []
  // btnDisabled:true;
  constructor(public alertController: AlertController,public modalController: ModalController,private formBuilder: FormBuilder, private toastController: ToastController, private navCtrl: NavController, private dataService: DataService) {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      // remember:[""]
    })

  }


  login() {
    console.log(document.cookie);
    
    console.log(this.loginForm.value);
    // this.Email = Cookie.get('email');
    // console.log(this.Email);
    
    // this.Password = Cookie.get('password')
    
   const params: any = {};
    params.email = this.loginForm.value.email;
    params.password = this.loginForm.value.password;
    console.log(params);
  
    this.dataService.login(params).subscribe((resp: any) => {
      console.log(resp);
 
     if (resp.user) {
      localStorage.setItem('salesId', resp.user.sales_id);
   
    
      
      this.presentAlert();
      console.log("success");
    
    }  else { 
       this.presentToast(resp);
    
      }
       
  })


  }


  
  // getCookie(cname) {
  //   var name = cname + "=";
  //   var decodedCookie = decodeURIComponent(document.cookie);
  //   var ca = decodedCookie.split(';');
  //   for(var i = 0; i <ca.length; i++) {
  //     var c = ca[i];
  //     while (c.charAt(0) == ' ') {
  //       c = c.substring(1);
  //     }
  //     if (c.indexOf(name) == 0) {
  //       return c.substring(name.length, c.length);
  //     }
  //   }
  //   return "";
  //  }

//   onSave() {

//     console.log(this.loginForm.value);
    
  
 
//     this.cookieemail = Cookie.set("email",this.loginForm.value.email) ;



//     this.cookiepw =  Cookie.set("password",this.loginForm.value.password); 

//     document.cookie="myemail="+this.cookieemail +"; path=http://localhost:8100/";
   
    
//       document.cookie = "mypassword="+ this.cookiepw+"; path=http://localhost:8100/";


//       console.log(document.cookie);
      
//   	console.log(e.currentTarget.checked);	
// }








 async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Login Successfully',
      message: 'Click ok to Home',
      mode:'ios',
      buttons: [ 
        {
          text: 'Okay',
          handler: () => {
          this.navCtrl.navigateForward('/home');
          console.log('Confirm Okay');
          }
        }
      ]

    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  
  async successToast() {
    const toast = await this.toastController.create({
      message: 'login Successfully!!',
      duration: 3000,
      position: 'middle',
      mode: 'ios',
      color: 'success'
    });
    toast.present();
  }


  async presentToast(resp) {
    const toast = await this.toastController.create({
      message: resp.errors,
      duration: 3000,
      position: 'top',
      mode: 'ios',
      color: 'danger'
    });
    toast.present();
  }


  ionViewWillEnter() {
    this.ngOnInit();
  }

  ngOnInit() {

    // this.email = localStorage.getItem("Email");
    // console.log(this.email);
    
    // this.password = localStorage.getItem("Password")
    //  console.log(this.password);
     

  }

   // this.presentToast(resp);
    

      // this.data = resp.user
      // console.log(this.data);
      // localStorage.setItem('salesId', this.data.sales_id);
      // // this.successToast();
      // this.navCtrl.navigateForward('/home');
      // this.loginForm.reset();

      // if (this.data.sales_id == !null) {
      //   this.navCtrl.back()
      // } else {
      //   this.loginForm.reset();
      //   this.navCtrl.navigateForward('/home');

      // }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PrivacypolicyPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
  }


  gotoPage(page) {
    this.navCtrl.navigateForward(page);
  }




  
}
