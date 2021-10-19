import { Component, OnInit } from '@angular/core';
import { NavController,ToastController } from '@ionic/angular'; 
import { FormGroup,FormControl } from "@angular/forms";
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

   loginForm : FormGroup;
  constructor(private navCtrl: NavController,private dataService: DataService,public toastController: ToastController) {

    this.loginForm = new FormGroup ({
      email : new FormControl(),

    })
   }

   onSubmit() {
    //  console.log(this.loginForm.value);
     
     const params : any ={}; 
     params.email = this.loginForm.value.email;
   console.log(params);
   this.dataService.ForgotPassword(params).subscribe(resp => {
     console.log(resp);

     if(resp["status"] == 200 ){
      this.presentToast(resp)
      this.navCtrl.navigateForward('/login');
      this.loginForm.reset();

     } else if(resp["status"] == 500) {
         this.errorToast(resp);
     }
     
   })

   }


   async presentToast(resp) {
    const toast = await this.toastController.create({
      message: resp.message,
      duration: 3000,
      mode:'ios',
      position:'top',
      color:'success'
    });
    toast.present();
  }


  async errorToast(resp) {
    const toast = await this.toastController.create({
      message: resp.message,
      duration: 2000,
      mode:'ios',
      position:'top',
      color:'danger'
    });
    toast.present();
  }

  ngOnInit() {
  }

goBack() {
	this.navCtrl.back();
}

// gotoNext() {
// 	this.navCtrl.navigateForward('/login');
// }
// gotoPage(page) {
// 	this.navCtrl.navigateForward(page);
// }

}
