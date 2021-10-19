import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-leadsdetails',
  templateUrl: './leadsdetails.page.html',
  styleUrls: ['./leadsdetails.page.scss'],
})
export class LeadsdetailsPage implements OnInit {
  // list = [[1,2,3],[4,5,6]];
  //  accordionExpanded = false;
  //  @ViewChild('head') cardContent: any;
  constructor() { }

  ngOnInit() {
   
    // console.log(this.cardContent.el);

    
  }



  // toggleAccordion() {
  //   if(this.accordionExpanded) {
  // this.renderer.setStyle(this.cardContent.el, "max-height","0px");
  //   } else {
  //     this.renderer.setStyle(this.cardContent.el, "max-height","500px");
  //   }
  //   this.accordionExpanded =!this.accordionExpanded
  // }
// goBack() {
//   this.navCtrl.back();
// }
// gotoPage(page) {
//   this.navCtrl.navigateBack(page)
// }
}
