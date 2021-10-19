import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup ,FormControl } from "@angular/forms";
import { ActivatedRoute}from '@angular/router';
declare var $ :any;
import { DataService } from '../services/data.service';
import { NavController,ToastController } from '@ionic/angular';
@Component({
  selector: 'app-addsalescommission',
  templateUrl: './addsalescommission.page.html',
  styleUrls: ['./addsalescommission.page.scss'],
})
export class AddsalescommissionPage implements OnInit {
// @ViewChild ('one', {static: true})one:ElementRef;
private isButtonVisible = true;

  val: any;
  classone:any;
  classonestyle: any;
  lotId:any;
  customer:any;
  SalesForm: FormGroup;
  cust: any;
  property: any;
  prop: any;
  sales: any;
  salesComm: any;
  commission: any;
  mycomm: any;
  constructor(public toastController: ToastController,private dataService: DataService,private navctrl : NavController ,private formBuilder: FormBuilder, private router: ActivatedRoute,) { 

    this.lotId = this.router.snapshot.params.id
    console.log(this.lotId);

    
  this.SalesForm =  this.formBuilder.group({
     member : [""],
     type1:[""],
     type2:[""],
     type3:[""],
     sales1:[""],
     bonus1: [""],
     sales2:[""],
    bonus2:[""],
    sales3:[""],
    bonus3:[""],
    sales4:[""],
    bonus4:[""],
    sales5:[""],
    bonus5:[""],
    sales6:[""],
    bonus6:[""],
    sales7:[""],
    bonus7:[""],
    sales8:[""],
    bonus8:[""],
    sales9:[""],
    bonus9:[""],
    sales10:[""],
    bonus10:[""],
    sales11:[""],
    bonus11:[""],
    sales12:[""],
    bonus12:[""],
    sales13:[""],
    bonus13:[""],
    sales14:[""],
    bonus14:[""],
    sales15:[""],
    bonus15:[""],
    sales16:[""],
    bonus16:[""],
    sales17:[""],
    bonus17:[""],

    
  })
  }
  ngAfterContentInit() {
    // this.classonestyle = this.one.nativeElement.style;
    // console.log(this.classonestyle);
    
    
    // this.classone = this.one.nativeElement.className;
    // console.log(this.classone); 
  }

  get membelist() {
    return this.SalesForm.get('member') as FormArray;
  }

  addItem() {
    this.membelist.push(this.formBuilder.control(''));
  }

  member() {
 

    var a = $('select[name=members]').val();
  
    console.log(a);
  
if (a == 1) {
      console.log(a == 1);

   
      $('.one').css("display", "Block");
      $('.two').css("display", "none");
      $('.three').css("display", "none");
      $('.four').css("display", "none");

      $('.two-one').css("display", "none");
      $('.two-two').css("display", "none");
      $('.two-three').css("display", "none");

      $('.three-one').css("display", "none");
      $('.three-two').css("display", "none");


      $('.one *').prop('disabled',false);
      
      $('.two *').prop('disabled',true);
      $('.two-one *').prop('disabled',true);
      $('.two-two *').prop('disabled',true);
      $('.two-three *').prop('disabled',true);

      $('.three *').prop('disabled',true);
      $('.three-one *').prop('disabled',true);
      $('.three-two *').prop('disabled',true);

      $('.four *').prop('disabled',true);



  }else if ( a == "2") {
    $('.one').css("display", "none");
    $('.two').css("display", "BLOCK");
    $('.three').css("display", "none");
    $('.four').css("display", "none");

    $('.three-one').css("display", "none");
    $('.three-two').css("display", "none");

    $('.one *').prop('disabled',true);

    $('.two *').prop('disabled',false);

    $('.three *').prop('disabled',true);
    $('.three-one *').prop('disabled',true);
    $('.three-two *').prop('disabled',true);

    $('.four *').prop('disabled',true);


    var b = $('select[name=type]').val();
    if ( b == "1") {

        $('.two-one *').prop('disabled',false);
        $('.two-two *').prop('disabled',true);
        $('.two-three *').prop('disabled',true);

        $('.two-one').css("display", "BLOCK");
        $('.two-two').css("display", "none");
        $('.two-three').css("display", "none");

        
    }else if ( b == "2") {

        
        $('.two-one *').prop('disabled',true);
        $('.two-two *').prop('disabled',false);
        $('.two-three *').prop('disabled',true);

        $('.two-one').css("display", "none");
        $('.two-two').css("display", "BLOCK");
        $('.two-three').css("display", "none");

        
    
    }else if ( b == "3") {

        $('.two-one *').prop('disabled',true);
        $('.two-two *').prop('disabled',true);
        $('.two-three *').prop('disabled',false);

        $('.two-one').css("display", "none");
        $('.two-two').css("display", "none");
        $('.two-three').css("display", "BLOCK");
    } 


  
  }else if ( a == "3") {

    $('.one *').prop('disabled',true);

    $('.two *').prop('disabled',true);
    $('.two-one *').prop('disabled',true);
    $('.two-two *').prop('disabled',true);
    $('.two-three *').prop('disabled',true);

    $('.three *').prop('disabled',false);

    $('.four *').prop('disabled',true);


    $('.one').css("display", "none");
    $('.two').css("display", "none");
    $('.three').css("display", "BLOCK");
    $('.four').css("display", "none");

    $('.two-one').css("display", "none");
    $('.two-two').css("display", "none");
    $('.two-three').css("display", "none");

    var b = $('select[name=type2]').val()

    if ( b == "1") {

        
        $('.three-one *').prop('disabled',false);
        $('.three-two *').prop('disabled',true);

        $('.three-one').css("display", "BLOCK");
        $('.three-two').css("display", "none");
    }else if ( b == "2") {

        
        $('.three-one *').prop('disabled',true);
        $('.three-two *').prop('disabled',false);

        $('.three-one').css("display", "none");
        $('.three-two').css("display", "BLOCK");
    }   

  }else if ( a == "4") {
    // Disable Function Start

        $('.one *').prop('disabled',true);

        $('.two *').prop('disabled',true);
        $('.two-one *').prop('disabled',true);
        $('.two-two *').prop('disabled',true);
        $('.two-three *').prop('disabled',true);

        $('.three *').prop('disabled',true);
        $('.three-one *').prop('disabled',true);
        $('.three-two *').prop('disabled',true);

        $('.four *').prop('disabled',false);

    // Disabled End
    $('.one').css("display", "none");
    $('.two').css("display", "none");
    $('.three').css("display", "none");
    $('.four').css("display", "BLOCK");

    $('.two-one').css("display", "none");
    $('.two-two').css("display", "none");
    $('.two-three').css("display", "none");
    
    $('.three-one').css("display", "none");
    $('.three-two').css("display", "none");

} 



  }


  type() {

    var b = $('select[name=type]').val()

    if ( b == "1") {
        
        $('.two-one *').prop('disabled',false);
        $('.two-two *').prop('disabled',true);
        $('.two-three *').prop('disabled',true);

        $('.two-one').css("display", "BLOCK");
        $('.two-two').css("display", "none");
        $('.two-three').css("display", "none");
    }else if ( b == "2") {
        
        $('.two-one *').prop('disabled',true);
        $('.two-two *').prop('disabled',false);
        $('.two-three *').prop('disabled',true);

        $('.two-one').css("display", "none");
        $('.two-two').css("display", "BLOCK");
        $('.two-three').css("display", "none");
    
    }else if ( b == "3") {
        
        $('.two-one *').prop('disabled',true);
        $('.two-two *').prop('disabled',true);
        $('.two-three *').prop('disabled',false);

        $('.two-one').css("display", "none");
        $('.two-two').css("display", "none");
        $('.two-three').css("display", "BLOCK");
    
    } 

  }

  type2() {
    var b = $('select[name=type2]').val()

    if ( b == "1") {
        $('.three-one *').prop('disabled',false);
        $('.three-two *').prop('disabled',true);

        $('.three-one').css("display", "BLOCK");
        $('.three-two').css("display", "none");
    }else if ( b == "2") {


        $('.three-one *').prop('disabled',true);
        $('.three-two *').prop('disabled',false);

        $('.three-one').css("display", "none");
        $('.three-two').css("display", "BLOCK");
    } 


  }

  employees(): FormArray {
       return this.SalesForm.get("member") as FormArray
  
  }

  newForm(): FormGroup {
    return this.formBuilder.group({
      member: '',
    })
  }
  
  addEmployee() {
    this.employees().push(this.newForm());
    console.log(this.employees());
    
  }


  // ionViewWillEnter() {
  //   this.ngOnInit()
  // }
  ngOnInit() {
    
    const params: any ={};
    params.lot_id= this.lotId;
    this.dataService.CommissionSales(params).subscribe(resp => {
      console.log(resp);
      this.mycomm = resp ["commission_status"];
    console.log(this.mycomm);
    
      this.customer = resp["customer"];
       this.cust =this.customer[0]
      console.log(this.cust);
      this.property = resp["property"];
      this.prop = this.property[0];
      console.log(this.prop);
      

      this.sales = resp["sales"];
      console.log(this.sales);
       this.commission = resp["commission"];
 
       console.log(  "commission",this.commission);
       
    })

  }



  OnSubmit() {
    console.log(this.SalesForm.value);
    var a = $('select[name=members]').val();
  
    console.log(a);
       if(a ==1) {
        const params :any ={};
        params.lot_id = this.lotId;
        params.members= this.SalesForm.value.member;
        params.sales1 =this.SalesForm.value.sales1;
        params.bonus1 =this.SalesForm.value.bonus1;
        console.log(params);
        this.dataService.SubmitSalesCommission(params).subscribe(resp => {
        console.log(resp);
        this.presentToast(resp);
        this.SalesForm.reset();
   })

       }else if ( a == "2") {

        const params :any ={};
        params.lot_id = this.lotId;
        params.members= this.SalesForm.value.member;
        params.type =this.SalesForm.value.type1;
        if ( this.SalesForm.value.type1 == "1")
        {
        params.sales1 =this.SalesForm.value.sales2;
        params.bonus1 =this.SalesForm.value.bonus2;
        params.sales2 =this.SalesForm.value.sales3;
        params.bonus2 =this.SalesForm.value.bonus3;
        }else if ( this.SalesForm.value.type1 =="2")
        {
          params.sales1 =this.SalesForm.value.sales4;
          params.bonus1 =this.SalesForm.value.bonus4;
          params.sales2 =this.SalesForm.value.sales5;
          params.bonus2 =this.SalesForm.value.bonus5;
        }else if ( this.SalesForm.value.type1 =="3")
        {
          params.sales1 =this.SalesForm.value.sales6;
          params.bonus1 =this.SalesForm.value.bonus6;
          params.sales2 =this.SalesForm.value.sales7;
          params.bonus2 =this.SalesForm.value.bonus7;
        }
        console.log(params);
        this.dataService.SubmitSalesCommission(params).subscribe(resp => {
          console.log(resp);
          this.presentToast(resp);
          this.SalesForm.reset();
     })
      }else if ( a == "3") {

        const params :any ={};
        params.lot_id = this.lotId;
        params.members= this.SalesForm.value.member;
        params.type2 =this.SalesForm.value.type2;
        if ( this.SalesForm.value.type2 == "1")
        {
        params.sales1 =this.SalesForm.value.sales8;
        params.bonus1 =this.SalesForm.value.bonus8;
        params.sales2 =this.SalesForm.value.sales9;
        params.bonus2 =this.SalesForm.value.bonus9;
        params.sales3 =this.SalesForm.value.sales10;
        params.bonus3 =this.SalesForm.value.bonus10;
        }else if ( this.SalesForm.value.type2 =="2")
        {
          params.sales1 =this.SalesForm.value.sales11;
          params.bonus1 =this.SalesForm.value.bonus11;
          params.sales2 =this.SalesForm.value.sales12;
          params.bonus2 =this.SalesForm.value.bonus12;
          params.sales3 =this.SalesForm.value.sales13;
          params.bonus3 =this.SalesForm.value.bonus13;
          
        }
      
        console.log(params);
        this.dataService.SubmitSalesCommission(params).subscribe(resp => {
          console.log(resp);
          this.presentToast(resp);
          this.SalesForm.reset();
     })
      }else if ( a == "4") {

        const params :any ={};
        params.lot_id = this.lotId;
        params.members= this.SalesForm.value.member;
        params.sales1 =this.SalesForm.value.sales14;
        params.bonus1 =this.SalesForm.value.bonus14;
        params.sales2 =this.SalesForm.value.sales15;
        params.bonus2 =this.SalesForm.value.bonus15;
        params.sales3 =this.SalesForm.value.sales16;
        params.bonus3 =this.SalesForm.value.bonus16;
        params.sales4 =this.SalesForm.value.sales17;
        params.bonus4 =this.SalesForm.value.bonus17;
        console.log(params);
        this.dataService.SubmitSalesCommission(params).subscribe(resp => {
          console.log(resp);
          this.presentToast(resp);
          this.SalesForm.reset();
     })
      }
        
   

     
        } 
      
       
    // const params :any ={};
    // params.customer_id = this.customerId
    // params.member= this.SalesForm.value.member;
    // params.type1 =this.SalesForm.value.type1;
    // params.type2 =this.SalesForm.value.type2;
    // params.type3 =this.SalesForm.value.type3;
    // params.sales1 =this.SalesForm.value.sales1;
    // params.sales2 =this.SalesForm.value.sales2;
    // params.sales3 =this.SalesForm.value.sales3;
    // params.sales4 =this.SalesForm.value.sales4;
    // params.sales5 =this.SalesForm.value.sales5;
    // params.sales6 =this.SalesForm.value.sales6;
    // params.sales7 =this.SalesForm.value.sales7;
    // params.sales8 =this.SalesForm.value.sales8;
    // params.sales9 =this.SalesForm.value.sales9;
    // params.sales10 =this.SalesForm.value.sales10;
    // params.sales11 =this.SalesForm.value.sales11;
    // params.sales12 =this.SalesForm.value.sales12;
    // params.sales13 =this.SalesForm.value.sales13;
    // params.sales14 =this.SalesForm.value.sales14;
    // params.sales15 =this.SalesForm.value.sales15;
    // params.sales16 =this.SalesForm.value.sales16;
    // params.bonus1 =this.SalesForm.value.bonus1;
    // params.bonus2 =this.SalesForm.value.bonus2;
    // params.bonus3 =this.SalesForm.value.bonus3;
    // params.bonus4 =this.SalesForm.value.bonus4;
    // params.bonus5 =this.SalesForm.value.bonus5;
    // params.bonus6 =this.SalesForm.value.bonus6;
    // params.bonus7 =this.SalesForm.value.bonus7;
    // params.bonus8 =this.SalesForm.value.bonus8;
    // params.bonus9 =this.SalesForm.value.bonus9;
    // params.bonus10 =this.SalesForm.value.bonus10;
    // params.bonus11 =this.SalesForm.value.bonus11;
    // params.bonus12 =this.SalesForm.value.bonus12;
    // params.bonus13 =this.SalesForm.value.bonus13;
    // params.bonus14 =this.SalesForm.value.bonus14;
    // params.bonus15 =this.SalesForm.value.bonus15;
    // params.bonus16 =this.SalesForm.value.bonus16;
    // params.bonus17 =this.SalesForm.value.bonus17;
 

  


  async presentToast(resp) {
    const toast = await this.toastController.create({
      message: resp.message,
      duration: 2000,
      position: 'top',
      mode: 'ios',
      color:'success',
    });
    toast.present();
  }

  goBack() {
this.navctrl.back();
  }

}
