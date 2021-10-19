import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { ModalController } from '@ionic/angular';
import {AssignedbuddyPage}  from '../assignedbuddy/assignedbuddy.page'
declare var $: any;

@Component({
  selector: 'app-registerassignleads',
  templateUrl: './registerassignleads.page.html',
  styleUrls: ['./registerassignleads.page.scss'],
})
export class RegisterassignleadsPage implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;

  registercustomerId: any;
  leads: any;
  pipe: any;
  property: any;
  datas: any;
  data: any;
  pipes: any;
  constructor(public modalController: ModalController,public loadingController: LoadingController, private navCtrl: NavController, private route: ActivatedRoute, private dataService: DataService) {
    this.registercustomerId = this.route.snapshot.params.id
    console.log(this.registercustomerId);
    localStorage.setItem('RegisterPipelineCustomerId',this.registercustomerId);

  }

  ngOnInit() {



    const params: any = {};
    params.customer_id = this.registercustomerId;
    this.dataService.registerAssignDetails(params).subscribe(value => {
      this.datas = value;
      console.log("leads", this.datas);

      this.pipe = this.datas['pipeline']
      console.log(this.pipe);

    })



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

async gotoAssigned(id) {
  const modal = await this.modalController.create({
    component: AssignedbuddyPage,
    cssClass: 'my-custom-class',
    componentProps: {
      'data': id,
     }
  });
  await modal.present();

  return await modal.onDidDismiss().then(() => {
  this.ngOnInit();
});
}


  ionViewWillEnter() {
    this.ngOnInit();
  }
  pipeline(event) {
   
    this.pipes = event.target.innerHTML;
    this.navCtrl.navigateForward('/registerassignpipeline');
    // const params: any = {};
    // params.customer_id = this.register_customerId;
    // params.value = this.pipes;
    // this.dataService.PostPipeline(params).subscribe(resp => {
    //   console.log(resp);

    // })
    // event.target.classList.add('checked');
}


async presentLoading() {
  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Please wait...',
    duration: 2000
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  console.log('Loading dismissed!');
}

  goBack() {
    this.navCtrl.back();
  }

  gotoInterested(id) {
    this.navCtrl.navigateForward('/interestedproperty/' + id);
  }
}
