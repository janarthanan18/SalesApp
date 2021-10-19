import { Component, OnInit,ElementRef, ViewChild, OnDestroy, AfterViewInit  } from '@angular/core';
// import { ChartHTMLTooltip, GoogleChartInterface } from 'ng2-google-charts';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

import { Platform } from '@ionic/angular';
declare var google:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  implements OnInit, AfterViewInit {
  backButtonSubscription; 
  @ViewChild('pieChart') pieChart: ElementRef
  @ViewChild('sampleChart') sampleChart: ElementRef

  salesid: any;
  assigned: any;
  internal: any;
  social: any;
  booked: any;
  unreadCount: any;
  lot: any;
  datas: any;
  sales: any



constructor(private platform: Platform, private navCtrl : NavController ,public dataService: DataService) {
    
}
  

 ngOnInit() {

  // this.unreadCount = JSON.parse(localStorage.getItem('COUNT'));

  this.salesid = JSON.parse(localStorage.getItem('salesId'));



  const params: any ={};
  params.sales_id = this.salesid;
  this.dataService.SalesCustomerDashboard(params).subscribe(resp => {
    console.log(resp);
    this.sales = resp["customer"] ;
    console.log(this.sales);
    
  })

}



drawChart3 =() => {

  const params : any ={};
  params.sales_id = this.salesid;
  this.dataService.commissionDashboard(params).subscribe(resp => {
  
   console.log(resp);
   this.datas = resp;

   let jan = this.datas['January'];
   let feb = this.datas['February'];
   let mar = this.datas['March'];
   let apr = this.datas['April'];
   let may = this.datas['May'];
   let jun = this.datas['June'];
   let jul = this.datas['July'];
   let aug = this.datas['August'];
   let sep = this.datas['September'];
   let oct = this.datas['October'];
   let nov = this.datas['November'];
   let dec = this.datas['December'];    


  var data = google.visualization.arrayToDataTable([
    ["Element", "Months", { role: "style" } ],
    ["Jan",jan, "#f8ad22"],
    ["Feb",feb, "gold"],
    ["Mar",mar, "gray"],
    ["Apr",apr, "red"],
    ["May",may, "rose"],
    ["Jun",jun, "blue"],
    ["Jul",jul, "skyblue"],
    ["Aug",aug, "violet"],
    ["Sep",sep, "orange"],
    ["Oct",oct, "black"],
    ["Nov",nov, "gold"],
    ["Dec",dec, "violet"],


 

  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    width: 500,
    height: 400,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values1"));
  chart.draw(data, options,view);
})
}







drawChart2 =() => {
 
  const params : any ={};
  params.sales_id = this.salesid;
  this.dataService.SocialMediaDashboard(params).subscribe(resp => {
  
   console.log(resp);
    

   this.social =  resp["socialmedia"];
  //  console.log(this.social);
   
  var data = google.visualization.arrayToDataTable([
    ["Element", "Socialmedia", { role: "style" } ],
    ["SocialMedia",this.social, "#f8ad22"],
 

  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    // title: "Density of Precious Metals, in g/cm^3",
    width: 500,
    height: 400,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
  chart.draw(data, options,view);
})
}





// Lots

drawChart1 = () => {
  const params : any ={};
  params.sales_id = this.salesid;
  this.dataService.lotDashboard(params).subscribe(resp =>  {
 
 
    this.lot = resp;
   console.log(this.lot);
  let booked = this.lot['booked'];
  let reject = this.lot['rejected'];
  let sold = this.lot['solded_out'];
  
   const data = google.visualization.arrayToDataTable([
      
      ['Task', 'Hours per Day'],
      ['Booked', booked],
      ['Rejected', reject],
      ['Sold Out', sold],
  
    ]);
  
    const options = {
      colors: ['#cc66ff','#fe7096', '#9a55ff'],
      width: 288,
      height: 200,
      pieHole: 0.4,
      legend: {position: 'top'}
    };
  
    const chart = new google.visualization.PieChart(this.sampleChart.nativeElement);
  
    chart.draw(data, options);
  })
}





// Lead

drawCharts = () => {
const params : any = {};
params.sales_id = this.salesid;
this.dataService.leadsDashboard(params).subscribe(resp=> {
  this.assigned = resp;

  

console.log(this.assigned);
let assign_lead = this.assigned.assigned_leads;
let internal_lead = this.assigned.internal_leads;
let social_lead =this.assigned.socialmedia_leads
console.log(assign_lead);


  const data = google.visualization.arrayToDataTable([
    
    ['Task', 'Hours per Day'],
    ['Assigned', assign_lead],
    ['Internal', internal_lead],
    ['SocialMedia', social_lead],

  ]);

  const options = {
    colors: ['#fe7096', '#cc66ff', '#9a55ff'],
    width: 288,
    height: 200,
    legend: {position: 'top'}
  };

  const chart = new google.visualization.PieChart(this.pieChart.nativeElement);

  chart.draw(data, options);
})
}



ngAfterViewInit() {

  google.charts.load('current', { 'packages': ['corechart'] });
  google.charts.setOnLoadCallback(this.drawCharts);

  google.charts.load('current', { 'packages': ['corechart'] });
  google.charts.setOnLoadCallback(this.drawChart1);

  google.charts.load("current", {packages:['corechart']});
  google.charts.setOnLoadCallback(this.drawChart2);

  google.charts.load('current', { 'packages': ['corechart'] });
  google.charts.setOnLoadCallback(this.drawChart3);

  this.backButtonSubscription = this.platform.backButton.subscribe(() => {
    navigator['app'].exitApp();

  });
}








ionViewWillLeave() {
  this.backButtonSubscription.unsubscribe();
}

gotoPage(page)
{
  this.navCtrl.navigateForward(page)
}

}
