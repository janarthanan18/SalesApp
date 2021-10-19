import { Component, OnInit } from '@angular/core';
import { NavController,ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router'; 
import { DataService } from '../services/data.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-internalpipeline',
  templateUrl: './internalpipeline.page.html',
  styleUrls: ['./internalpipeline.page.scss'],
})
export class InternalpipelinePage implements OnInit {
  leadId: any;
  salesid: any;
  leads: any;
  pipe: any;
  showSubmenuNew: boolean= false;
  SubmenuNext: boolean =false;
  SubmenuNext1: boolean = false;
  UserCmt : FormGroup;
  cmtList: any;
  pipes: any;

  menuItemsecond(): void {
    this.showSubmenuNew = !this.showSubmenuNew;
  }
  menuItemThird() :void {
    this.SubmenuNext = !this.SubmenuNext;

  }
  menuItemForth() {
   this.SubmenuNext1 = !this.SubmenuNext1
  }
  constructor( private formBuilder: FormBuilder, private toastController: ToastController,private navCtrl: NavController, private route: ActivatedRoute,private dataService: DataService) { 
    this.leadId = this.route.snapshot.params.id
    console.log(this.leadId);
    this.UserCmt = this.formBuilder.group({
      remarks : [""],
    })
  }

  ngOnInit() {
    this.salesid = JSON.parse(localStorage.getItem('salesId'));
    console.log(this.salesid);
    const params : any = {};
    params.lead_id = this.leadId;
    this.dataService.getInternalLeads(params).subscribe((data : any ) => {
    // console.log(data);
    this.leads = data;   
    console.log(this.leads);
    console.log(this.leads.pipeline === null);
    
    this.pipe = this.leads.pipeline;
      console.log(this.pipe);

    this.cmtList= this.leads.remarks;
 
    console.log(this.cmtList);
    
    })
this.internalPipeline();
  }

  // ionViewWillEnter() {
  //   this.internalPipeline();
  // }

  internalPipeline(){
    $(document).ready(function(){
      $(document).on('click', ".pipeline", function() {

        $(this).addClass('pipeline-trigger-clicked');
		    var response = $('.pipeline-trigger-clicked').data('value');
        console.log('che',response);
        if (response == "null") {
          $('#Prospecting').addClass('planning')
          $('#PhoneCall').addClass('planning')
          $('#SiteBooking').addClass('planning')
          $('#Appointment').addClass('planning')
          $('#ClosedDeals').addClass('planning')
          $('#Negotiation').addClass('planning')
        }
        else if(response=="Prospecting")
			{
				$('#Prospecting').removeClass('planning')
				$('#PhoneCall').addClass('planning')
				$('#SiteBooking').addClass('planning')
				$('#Appointment').addClass('planning')
				$('#ClosedDeals').addClass('planning')
				$('#Negotiation').addClass('planning')
        
			}else if(response=="Phone Call")
			{
				
				$('#Prospecting').removeClass('planning')
				$('#PhoneCall').removeClass('planning')
				$('#SiteBooking').addClass('planning')
				$('#Appointment').addClass('planning')
				$('#ClosedDeals').addClass('planning')
				$('#Negotiation').addClass('planning')
			}else if(response=="Appointment")
			{	
				$('#Prospecting').removeClass('planning')
				$('#PhoneCall').removeClass('planning')
				$('#Appointment').removeClass('planning')
				$('#SiteBooking').addClass('planning')
				$('#ClosedDeals').addClass('planning')
				$('#Negotiation').addClass('planning')
			}else if(response=="Site Booking")
			{	
				$('#Prospecting').removeClass('planning')
				$('#PhoneCall').removeClass('planning')
				$('#Appointment').removeClass('planning')
				$('#SiteBooking').removeClass('planning')
				$('#ClosedDeals').addClass('planning')
				$('#Negotiation').addClass('planning')
			}else if(response=="Negotiation")
			{
				
				$('#Prospecting').removeClass('planning')
				$('#PhoneCall').removeClass('planning')
				$('#Appointment').removeClass('planning')
				$('#SiteBooking').removeClass('planning')
				$('#Negotiation').removeClass('planning')
				$('#ClosedDeals').addClass('planning')
			}else if(response=="Closed Deals")
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
    params.customer_id = this.leadId;
    params.remarks = this.UserCmt.value.remarks;
    console.log(params);
    this.dataService.internalComment(params).subscribe(data => {
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


  pipeline(event) {
      
    this.pipes= event.target.innerHTML;
    console.log(this.pipes);
      const params :any = {};
      params.sales_id = this.salesid;
      params.customer_id = this.leadId;
      params.value = this.pipes;
      this.dataService.InternalPipeline(params).subscribe(resp => {
        console.log(resp);
this.ngOnInit();
        })
     }


  goBack() {
    this.navCtrl.back();
  }
}
