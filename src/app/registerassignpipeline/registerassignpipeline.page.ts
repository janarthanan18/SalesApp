import { Component, OnInit } from '@angular/core';
import { NavController,ToastController } from '@ionic/angular';
import { DataService } from '../services/data.service'; 
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-registerassignpipeline',
  templateUrl: './registerassignpipeline.page.html',
  styleUrls: ['./registerassignpipeline.page.scss'],
})
export class RegisterassignpipelinePage implements OnInit {
  UserCmt : FormGroup;
  showSubmenuNew: boolean= false;
  SubmenuNext: boolean =false;
  SubmenuNext1: boolean = false;
  salesid: any;
  registercustomerId: any;
  value: any;
  commentsList: any;
  pipe: any;
  pipes: any;
  cmtList: any;
  menuItemsecond(): void {
    this.showSubmenuNew = !this.showSubmenuNew;
  }
  menuItemThird() :void {
    this.SubmenuNext = !this.SubmenuNext;

  }
  menuItemForth() {
   this.SubmenuNext1 = !this.SubmenuNext1
  }
  constructor(private toastController: ToastController,private navCtrl: NavController ,private dataService: DataService, private formBuilder: FormBuilder) {
    this.UserCmt = this.formBuilder.group({
      remarks : [""],
    })
   }

  ngOnInit() {
    this.salesid = JSON.parse(localStorage.getItem('salesId'));
    console.log(this.salesid);
    this.registercustomerId = JSON.parse(localStorage.getItem('RegisterPipelineCustomerId'));
    console.log(this.registercustomerId);

    const params : any ={};
    params.customer_id = this.registercustomerId;
    this.dataService.registerAssignDetails(params).subscribe( data => {
      console.log(data);
      this.value = data;
 
      this.cmtList = this.value["remarks"];
      console.log(this.cmtList);
      
      this.pipe = this.value["pipeline"];
      console.log(this.pipe);

    })
  // this.registerPipeline();
  }

  registerPipeline(){
  
    $(document).ready(function(){
      $(document).on('click', ".pipeline", function() {

        $(this).addClass('pipeline-trigger-clicked');
		    var data = $('.pipeline-trigger-clicked').data('value');
        console.log('che',data)
        if(data=="Prospecting")
			{
				$('#Prospecting').removeClass('planning')
				$('#PhoneCall').addClass('planning')
				$('#SiteBooking').addClass('planning')
				$('#Appointment').addClass('planning')
				$('#ClosedDeals').addClass('planning')
				$('#Negotiation').addClass('planning')
        
			}else if(data=="Phone Call")
			{
				
				$('#Prospecting').removeClass('planning')
				$('#PhoneCall').removeClass('planning')
				$('#SiteBooking').addClass('planning')
				$('#Appointment').addClass('planning')
				$('#ClosedDeals').addClass('planning')
				$('#Negotiation').addClass('planning')
			}else if(data=="Appointment")
			{	
				$('#Prospecting').removeClass('planning')
				$('#PhoneCall').removeClass('planning')
				$('#Appointment').removeClass('planning')
				$('#SiteBooking').addClass('planning')
				$('#ClosedDeals').addClass('planning')
				$('#Negotiation').addClass('planning')
			}else if(data=="Site Booking")
			{	
				$('#Prospecting').removeClass('planning')
				$('#PhoneCall').removeClass('planning')
				$('#Appointment').removeClass('planning')
				$('#SiteBooking').removeClass('planning')
				$('#ClosedDeals').addClass('planning')
				$('#Negotiation').addClass('planning')
			}else if(data=="Negotiation")
			{
				
				$('#Prospecting').removeClass('planning')
				$('#PhoneCall').removeClass('planning')
				$('#Appointment').removeClass('planning')
				$('#SiteBooking').removeClass('planning')
				$('#Negotiation').removeClass('planning')
				$('#ClosedDeals').addClass('planning')
			}else if(data=="Closed Deals")
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
    params.customer_id = this.registercustomerId;
    params.remarks = this.UserCmt.value.remarks;
    console.log(params);
    this.dataService.SocialComment(params).subscribe(data => {
    // console.log(data);
    this.cmtList = data;
console.log(this.cmtList);

    this.UserCmt.reset()
  
  this.successToast()
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
      
      this.pipes= event.target.innerHTML;
      console.log(this.pipes);
        const params :any = {};
        params.sales_id = this.salesid;
        params.customer_id = this.registercustomerId;
        params.value = this.pipes;
        this.dataService.PostPipeline(params).subscribe(resp => {
          console.log(resp);
          this.ngOnInit();

          })
       }











  goBack() {
    this.navCtrl.back();
  }
}
