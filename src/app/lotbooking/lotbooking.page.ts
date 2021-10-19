import { Component, OnInit } from '@angular/core';
import { NavController,ToastController,ModalController,LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-lotbooking',
  templateUrl: './lotbooking.page.html',
  styleUrls: ['./lotbooking.page.scss'],
})
export class LotbookingPage implements OnInit {

  flag : any = false;
  propertyId: any;
  data: any =[];
  lots: any;
  lot1: any;
  blocks : any = [];
    devname:any;
  block: any;
 blockLen: any; 
 demo: any;
 way: any;
  lot: any;
concat:any
  constructor(public loadingController: LoadingController,private toastController : ToastController,public dataService: DataService, private navCtrl: NavController, public modalController: ModalController, private route: ActivatedRoute) {
    this.propertyId = this.route.snapshot.params.id
    console.log(this.propertyId);
    
  }

  ngOnInit() {
 
    this.propertyview();
  }
  propertyview() {
    const params: any = {};
    params.id = this.propertyId;
    this.dataService.getPropertyView(params).subscribe((response: any) => {
      
      this.lots = response;
      this.devname = this.lots.developer_name;

      
   this.blocks = this.lots.block;
   console.log(this.blocks);
//    this.concat = this.blocks[0].lot.concat(this.blocks[1].lot);

// console.log(this.concat);




// let data =[]


//   for(let i=0; i<this.concat.length ; i++) {
//     // console.log(this.concat[i]);
//     for(let j=0 ; j<this.concat[i].length ; j++) {
//       console.log(this.concat[j]);
      
//       // console.log(this.concat[i][j]["status"]);
//       // data.push(this.concat[i][j]["status"])
      

//     }
//   }
//   console.log(data);
  

// const flattened = [].concat(this.concat);
// console.log(flattened);

// this.concat.forEach(element => {
//   console.log(element);
  
// });

//  this.blocks.forEach(element => {
//   //  console.log(element.lot);
//    this.data.push(element.lot)
//    console.log(this.data);
   
   
//  });

 
   
     
   
   
  //  console.log("Blocks",this.blocks);


  //  this.data.push(this.block[0].lot);   
      // this.blocks =this.lots[0];
      // console.log("block",this.blocks);
      // this.block = this.lots[0].block;

      // for(let i =0 ; i<this.block.length; i++) {
      //   this.blockLen = this.block[i];
      //    this.demo = i+1;
      //   console.log(this.demo);
        
      // }


        //  this.block = this.lots[0].block;
        //  console.log(this.block);
         
      // this.lots = response.lot;
      // console.log(this.lots);

    })
  }


  ionViewWillEnter() {
  this.ngOnInit();
}

  LotBooking1(id) {
         console.log(this.blocks);


    
      this.blocks.forEach(data => {
      
    // console.log(element.lot);
       data.lot.forEach(lot => {
        // console.log(data);
        lot.forEach(element=> {
          console.log(element);
          
        if (element.status == 1) {
        
        console.log("status1", element)
        localStorage.setItem('lotId' ,element.id);
        localStorage.setItem('PropertyId' ,element.property_id);
        localStorage.setItem('Status' ,element.status);
        this.navCtrl.navigateForward('/lotbookingstatus/' + id);
      }

        });
      });
     
    })

  }
  LotBooking2(id) {



    console.log(this.blocks);


    
    this.blocks.forEach(data => {
    
  // console.log(element.lot);
     data.lot.forEach(lot => {
      // console.log(data);
      lot.forEach(element=> {
        console.log(element);
        
      if (element.status == 2) {
      
      console.log("status2", element)
      localStorage.setItem('lotId' ,element.id);
      localStorage.setItem('PropertyId' ,element.property_id);
      localStorage.setItem('Status' ,element.status);
      this.navCtrl.navigateForward('/lotbookingavailable/' + id);
    }

      });
    });
   
  })

    // this.data.forEach(element => {
    //   if (element.status == 2) {
    //     console.log("status2", element)
    //     localStorage.setItem('lotId' ,element.id);
    //     localStorage.setItem('PropertyId' ,element.property_id);
    //     localStorage.setItem('Status' ,element.status);
    //     this.navCtrl.navigateForward('/lotbookingavailable/' + id);
    //   }
    // })
  }



  LotBooking3(id) {


    console.log(this.blocks);


    
    this.blocks.forEach(data => {
    
  // console.log(element.lot);
     data.lot.forEach(lot => {
      // console.log(data);
      lot.forEach(element=> {
        console.log(element);
        
      if (element.status == 3) {
      
      console.log("status3", element)
      localStorage.setItem('lotId' ,element.id);
      localStorage.setItem('PropertyId' ,element.property_id);
      localStorage.setItem('Status' ,element.status);
      this.navCtrl.navigateForward('/lotbookingrejected/' + id);
    }

      });
    });
   
  })

    // this.data.forEach(element => {
    //   if (element.status == 3) {
    //     console.log("status3", element)
    //     localStorage.setItem('lotId' ,element.id);
    //     localStorage.setItem('PropertyId' ,element.property_id);
    //     localStorage.setItem('Status' ,element.status);
    //     this.navCtrl.navigateForward('/lotbookingrejected/' + id);
    //   }
    // })
  }


  LotBooking4(id) {


    console.log(this.blocks);


    
    this.blocks.forEach(data => {
    
  // console.log(element.lot);
     data.lot.forEach(lot => {
      // console.log(data);
      lot.forEach(element=> {
        console.log(element);
        
      if (element.status == 4) {
      
      console.log("status4", element)
      localStorage.setItem('lotId' ,element.id);
      localStorage.setItem('PropertyId' ,element.property_id);
      localStorage.setItem('Status' ,element.status);
      this.navCtrl.navigateForward('/lotbookingsold/' + id);
    }

      });
    });
   
  })

    // this.data.forEach(element => {
    //   if (element.status == 4) {
    //     console.log("status4", element)
    //     localStorage.setItem('lotId' ,element.id);
    //     localStorage.setItem('PropertyId' ,element.property_id);
    //     localStorage.setItem('Status' ,element.status);
    //     this.navCtrl.navigateForward('/lotbookingsold/' + id);
    //   }
    // })
  }


  async presentLoading() {
        // window.location.reload();

    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  goBack() {
    this.navCtrl.back();
  }

}



function id(id: any) {
  throw new Error('Function not implemented.');
}

