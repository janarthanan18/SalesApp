import { Component,OnInit,OnDestroy, AfterViewInit,ViewChild } from '@angular/core';
import {Platform, MenuController ,NavController,AlertController,ToastController} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryList } from '@angular/core';

import { IonRouterOutlet } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  backButtonSubscription; 

  lastTimeBackPress = 0;
  timePeriodToExit = 2000;



  showSubmenu: boolean = false;
  showSubmenuNew: boolean= false;
  salesid: any;
  
  menuItemHandler(): void {
    this.showSubmenu = !this.showSubmenu;
  }

  

  menuItemsecond(): void {
    this.showSubmenuNew = !this.showSubmenuNew;
  }
  constructor(private toastController :ToastController ,private platform: Platform,private menu: MenuController,private alertController: AlertController, public activatedRoute: Router, private navCtrl: NavController) {}


  gotoPageRoot(path) {
    console.log(path);
    this.menu.close();
    this.activatedRoute.navigateByUrl(path);

  }


  ngOnInit () {
    this.salesid = JSON.parse(localStorage.getItem('salesId'));
    if(localStorage.getItem('salesId') && localStorage.getItem('salesId') != 'null')
    {
      this.navCtrl.navigateRoot('/home');
      console.log("home");
    }
    else
    {
     
      this.menu.close();
      localStorage.clear();
      this.navCtrl.navigateRoot('login');
      console.log("login");
    }
   
  }



  backButtonEvent() {

    
    this.platform.backButton.subscribe(async () => {

      this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();

        } else if (this.activatedRoute.url === '/home') {
          if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
            navigator['app'].exitApp();

          } else {
            const toast = await this.toastController.create({
              message: 'Press back again to exit App.',
              duration: 2000,
              position: 'middle'
            });
            toast.present();
            this.lastTimeBackPress = new Date().getTime();
          }
        }
      });
    //   if(this.salesid !== 'null')
    // {
    //   this.navCtrl.navigateRoot('/home');
    //   console.log("home");
    // }
    // else
    // {
     
    //   this.menu.close();
    //   localStorage.clear();
    //   this.navCtrl.navigateRoot('login');
    //   console.log("login");
    // }


    });


    // this.platform.backButton.subscribeWithPriority(0, () => {
     
    //     if (this.activatedRoute.url != '/home') {
    //        this.navCtrl.pop();
    //        this.navCtrl.back();
    //     } else if (this.activatedRoute.url === '/home') {
    //       if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
    //         this.lastTimeBackPress = new Date().getTime();
    //         this.presentAlertConfirm();
    //       } else {
    //         navigator['app'].exitApp();
    //       }
    //     }
     
    // });
  }

  // async presentAlertConfirm() {
  //   const alert = await this.alertController.create({
  //     header: 'Confirm!',
  //     message: 'Are you sure you want to exit the app?',
  //     buttons: [{
  //       text: 'Cancel',
  //       role: 'cancel',
  //       cssClass: 'secondary',
  //       handler: (blah) => { console.log(blah);
  //       }
  //     }, {
  //       text: 'Close App',
  //       handler: () => {
  //         navigator['app'].exitApp();
  //       }
  //     }]
  //   });
  
  //   await alert.present();
  // }

  
    
 async gotoLogout() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Do you want to <strong>Logout</strong> your account?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
            this.menu.close();
            this.navCtrl.navigateRoot('home');

          }
        }, {
          text: 'Okay',
          cssClass: 'alertCustomCss',
          handler: () => {
            localStorage.clear();
            localStorage.removeItem('token');
            this.navCtrl.navigateRoot('login');
            this.menu.close();
          }
        }
      ]
    });

    await alert.present();


  }


  // ngAfterViewInit() {
  //     this.backButtonSubscription = this.platform.backButton.subscribe(() => {
  //     navigator['app'].exitApp();
  
  //   });
  // }

  }
