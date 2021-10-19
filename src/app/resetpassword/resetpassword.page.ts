import { Component, OnInit } from '@angular/core';
import { NavController,ToastController } from '@ionic/angular'; 
import { FormGroup,FormControl } from "@angular/forms";
import { DataService } from '../services/data.service';
import { Data } from '@angular/router';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {
  loginForm : FormGroup;
  constructor(private navCtrl: NavController ,private dataservice:DataService,private toastController: ToastController) {

    this.loginForm = new FormGroup ({
      email : new FormControl(),
      password : new FormControl(),
      conform_password: new FormControl(),
    })
   }

   onSubmit() {
     const  params : any ={}; 
     params.email = this.loginForm.value.email;
     params.password = this.loginForm.value.password;
     params.password_confirmation = this.loginForm.value.conform_password;
     params.token = "";
     console.log(params);
     this.dataservice.ResetPassword(params).subscribe(resp => {
     console.log(resp);
     if(resp["status"] == 200) {
     this.presentToast(resp)
     }
     this.loginForm.reset();

    })
    }

    async presentToast(resp) {
      const toast = await this.toastController.create({
        message: resp.message,
        duration: 2000,
        mode:'ios',
        position:'top',
        color:'success'
      });
      toast.present();
    }

  ngOnInit() {
  }
  goBack() {
  this.navCtrl.back();
  }

// gotoPage(page) {
//   this.navCtrl.navigateForward(page);
// }
// gotoPage(page) {
// 	this.navCtrl.navigateForward(page);
// }

}
