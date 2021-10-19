import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController,ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { SocialmediamodalPage } from '../socialmediamodal/socialmediamodal.page'
declare var $: any;


@Component({
  selector: 'app-socialmedialeads',
  templateUrl: './socialmedialeads.page.html',
  styleUrls: ['./socialmedialeads.page.scss'],
})
export class SocialmedialeadsPage implements OnInit {
  activeState = 'Draft';
  salesid; any;
  socialcustomerId: any;
  leads: Object;
  value: any;
  pipe: any;
  pipes: any;
  title = 'app works!';
  mydata: any;

  constructor(public modalController:ModalController,public loadingController: LoadingController, private dataService: DataService, private navCtrl: NavController, private route: ActivatedRoute) {
    this.socialcustomerId = this.route.snapshot.params.id
    console.log(this.socialcustomerId);
    localStorage.setItem('SocialPipelineCustomerId', this.socialcustomerId);

  }


  ngOnInit() {
    this.salesid = JSON.parse(localStorage.getItem('salesId'));
    console.log(this.salesid);
    this.socialmedialeads();

  }

  //   ngAfterViewInit(){
  //     $(document).ready(function(){
  //       $(document).on('click', ".pipeline", function() {

  //         $(this).addClass('pipeline-trigger-clicked');
  // 		    var response = $('.pipeline-trigger-clicked').data('value');
  //         console.log('che',response)
  //         if(response=="Prospecting")
  // 			{
  // 				$('#Prospecting').removeClass('planning')
  // 				$('#PhoneCall').addClass('planning')
  // 				$('#SiteBooking').addClass('planning')
  // 				$('#Appointment').addClass('planning')
  // 				$('#ClosedDeals').addClass('planning')
  // 				$('#Negotiation').addClass('planning')

  // 			}else if(response=="Phone Call")
  // 			{

  // 				$('#Prospecting').removeClass('planning')
  // 				$('#PhoneCall').removeClass('planning')
  // 				$('#SiteBooking').addClass('planning')
  // 				$('#Appointment').addClass('planning')
  // 				$('#ClosedDeals').addClass('planning')
  // 				$('#Negotiation').addClass('planning')
  // 			}else if(response=="Appointment")
  // 			{	
  // 				$('#Prospecting').removeClass('planning')
  // 				$('#PhoneCall').removeClass('planning')
  // 				$('#Appointment').removeClass('planning')
  // 				$('#SiteBooking').addClass('planning')
  // 				$('#ClosedDeals').addClass('planning')
  // 				$('#Negotiation').addClass('planning')
  // 			}else if(response=="Site Booking")
  // 			{	
  // 				$('#Prospecting').removeClass('planning')
  // 				$('#PhoneCall').removeClass('planning')
  // 				$('#Appointment').removeClass('planning')
  // 				$('#SiteBooking').removeClass('planning')
  // 				$('#ClosedDeals').addClass('planning')
  // 				$('#Negotiation').addClass('planning')
  // 			}else if(response=="Negotiation")
  // 			{

  // 				$('#Prospecting').removeClass('planning')
  // 				$('#PhoneCall').removeClass('planning')
  // 				$('#Appointment').removeClass('planning')
  // 				$('#SiteBooking').removeClass('planning')
  // 				$('#Negotiation').removeClass('planning')
  // 				$('#ClosedDeals').addClass('planning')
  // 			}else if(response=="Closed Deals")
  // 			{

  // 				$('#Prospecting').removeClass('planning')
  // 				$('#PhoneCall').removeClass('planning')
  // 				$('#Appointment').removeClass('planning')
  // 				$('#SiteBooking').removeClass('planning')
  // 				$('#ClosedDeals').removeClass('planning')
  // 				$('#Negotiation').removeClass('planning')
  // 			}
  //       $(this).removeClass('pipeline-trigger-clicked');
  //       });
  //     });
  // }

//   async openModal() {
//     const modal: HTMLIonModalElement =
//        await this.modalController.create({
//           component: DatePickerModal,
//           componentProps: {
//              aParameter: true,
//              otherParameter: new Date()
//           }
//     });

//     modal.onDidDismiss().then((detail: OverlayEventDetail) => {
//        if (detail !== null) {
//          console.log('The result:', detail.data);
//        }
//     });

//     await modal.present();
// }


  async gotoAssigned(id) {
    const modal = await this.modalController.create({
      component: SocialmediamodalPage,
      cssClass: 'my-custom-class',
      componentProps: {
       'data': id,
      },

  
    });

   await modal.present();

    return await modal.onDidDismiss().then(() => {
    this.socialmedialeads();
  });
  
  }

  socialmedialeads() {
    const params: any = {};
    params.customer_id = this.socialcustomerId;
    this.dataService.socialMediadetails(params).subscribe(data => {
      console.log(data);
      this.value = data;
      this.pipe = this.value.pipeline;
      console.log(this.pipe);

    })
  }


  // gotoPipe() {
  // }

  ionViewWillEnter() {
    this.socialmedialeads();

  }

  pipeline(event) {

    this.pipes = event.target.innerHTML;

    this.navCtrl.navigateForward('/socialmediapipeline');


    // console.log(this.pipes);
    // const params: any = {};
    // params.sales_id = this.salesid
    // params.customer_id = this.customerId;
    // params.value = this.pipes;
    // this.dataService.socialMediaPipeline(params).subscribe(resp => {
    //   console.log(resp);
    //   this.presentLoading(resp);


    // })
    }

  async presentLoading(resp) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: resp.message,
      duration: 2000
    });
    await loading.onwaiting;
  }


  goBack() {
    this.navCtrl.back();
  }

}
