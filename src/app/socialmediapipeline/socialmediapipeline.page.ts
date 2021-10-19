import { Component, OnInit } from '@angular/core';
import { NavController,ToastController } from '@ionic/angular';
import { DataService } from '../services/data.service'; 
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

declare var $ :any;
@Component({
  selector: 'app-socialmediapipeline',
  templateUrl: './socialmediapipeline.page.html',
  styleUrls: ['./socialmediapipeline.page.scss'],
})
export class SocialmediapipelinePage implements OnInit {
  UserCmt : FormGroup;
  showSubmenuNew: boolean= false;
  SubmenuNext: boolean =false;
  SubmenuNext1: boolean = false;
  socialcustomerId: any;
  value: any;
  pipe: any;
  pipes: any;
  salesid: any;
  commentsList: any;
  menuItemsecond(): void {
    this.showSubmenuNew = !this.showSubmenuNew;
  }
  menuItemThird() :void {
    this.SubmenuNext = !this.SubmenuNext;

  }
  menuItemForth() {
   this.SubmenuNext1 = !this.SubmenuNext1
  }

  constructor(private toastController:ToastController, private formBuilder: FormBuilder,private navCtrl: NavController,private dataService: DataService) {
    this.UserCmt = this.formBuilder.group({
      remarks : [""],
    })
   }

  ngOnInit() {
    this.salesid = JSON.parse(localStorage.getItem('salesId'));
    console.log(this.salesid);
    this.socialcustomerId = JSON.parse(localStorage.getItem('SocialPipelineCustomerId'));
    console.log(this.socialcustomerId);
    const params : any ={};
    params.customer_id = this.socialcustomerId;
    this.dataService.socialMediadetails(params).subscribe( data => {
      console.log(data);

      this.value =data;
      console.log(this.value.pipeline === null);
      
      this.commentsList = this.value.remarks;
      console.log(this.commentsList);
      
      this.pipe = this.value["pipeline"];
      console.log(this.pipe);

    })
    // this.socialPipeline(); 
  }


  socialPipeline(){
    $(document).ready(function(){
      $(document).on('click', ".pipeline", function() {

        $(this).addClass('pipeline-trigger-clicked');
		    var data = $('.pipeline-trigger-clicked').data('value');
        console.log('Social',data)
        if(data == "Prospecting")
			{
				$('#Prospecting').removeClass('planning')
				$('#PhoneCall').addClass('planning')
				$('#SiteBooking').addClass('planning')
				$('#Appointment').addClass('planning')
				$('#ClosedDeals').addClass('planning')
				$('#Negotiation').addClass('planning')
        
			}else if(data == "Phone Call")
			{
				
				$('#Prospecting').removeClass('planning')
				$('#PhoneCall').removeClass('planning')
				$('#SiteBooking').addClass('planning')
				$('#Appointment').addClass('planning')
				$('#ClosedDeals').addClass('planning')
				$('#Negotiation').addClass('planning')
			}else if(data == "Appointment")
			{	
				$('#Prospecting').removeClass('planning')
				$('#PhoneCall').removeClass('planning')
				$('#Appointment').removeClass('planning')
				$('#SiteBooking').addClass('planning')
				$('#ClosedDeals').addClass('planning')
				$('#Negotiation').addClass('planning')
			}else if(data == "Site Booking")
			{	
				$('#Prospecting').removeClass('planning')
				$('#PhoneCall').removeClass('planning')
				$('#Appointment').removeClass('planning')
				$('#SiteBooking').removeClass('planning')
				$('#ClosedDeals').addClass('planning')
				$('#Negotiation').addClass('planning')
			}else if(data == "Negotiation")
			{
				
				$('#Prospecting').removeClass('planning')
				$('#PhoneCall').removeClass('planning')
				$('#Appointment').removeClass('planning')
				$('#SiteBooking').removeClass('planning')
				$('#Negotiation').removeClass('planning')
				$('#ClosedDeals').addClass('planning')
			}else if(data == "Closed Deals")
			{
				
				$('#Prospecting').removeClass('planning')
				$('#PhoneCall').removeClass('planning')
				$('#Appointment').removeClass('planning')
				$('#SiteBooking').removeClass('planning')
				$('#ClosedDeals').removeClass('planning')
				$('#Negotiation').removeClass('planning')
			}
      $(this).removeClass('pipeline-trigger-clicked');
      });
    });
}

OnSubmit(){
  const params: any ={};
  params.customer_id = this.socialcustomerId;
  params.remarks = this.UserCmt.value.remarks;
  console.log(params);
  this.dataService.SocialComment(params).subscribe(data => {
  // console.log(data);
  this.commentsList =data;
  console.log(this.commentsList);
  
  this.UserCmt.reset()

this.successToast()
// this.navCtrl.back();
  })

}

async successToast() {
  const toast = await this.toastController.create({
    message: 'Posted Successfully!!',
    duration: 3000,
    position: 'top',
    mode: 'ios',
    color: 'success'
  });
  toast.present();
}

// ionViewWillEnter() {
//   this.ngOnInit();

// }
 
pipeline(event) {
    
      this.pipes = event.target.innerHTML;
      console.log(this.pipes);
      const params :any = {};
      params.sales_id = this.salesid;
      params.customer_id = this.socialcustomerId;
      params.value = this.pipes;
      this.dataService.socialMediaPipeline(params).subscribe(resp => {
        console.log(resp);
     this.ngOnInit()
        })
     }
 
     

goBack() {
  this.navCtrl.back();
}
}
