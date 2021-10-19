import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-propertydetails',
  templateUrl: './propertydetails.page.html',
  styleUrls: ['./propertydetails.page.scss'],
})

export class PropertydetailsPage implements OnInit {
  overviewsegment: string;
  segment: string;
  propertyId: any;
  data: any;
  lots: any;
  end: any = [];
  intermediate: any = [];
  odd: any = [];
  img: any;
  value: any;
  value1: any = [];
  document: any;
  doc1: any;
  value2: string;
  value3: string
  corners: any = [];
  docs: any = [];
  schedule: any;
  schedules: any;
  sched: string;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  slideOpts1= { 
    initialSlide: 1,
    speed: 400
  }
  pdfLink:any;
  block: any;
  pdf: any;
  view: any;
  pdf1: any;
  pdf2: any;
  pdf3: any;
  pdf4: any;
  pdf5: any;
  pdf6: any;
  pdf7: any;
  pdf8: any;
  pdf9: any;
  pdfSource: string;
  houseType: any;
  panel: any;
  category: any;
  phase: any;
  constructor(private iab: InAppBrowser,private sanitizer: DomSanitizer,private previewAnyFile: PreviewAnyFile, private photoViewer: PhotoViewer, public navCtrl: NavController, private route: ActivatedRoute, private dataService: DataService) {
    this.propertyId = this.route.snapshot.params.id
    console.log(this.propertyId);
    // this.pdfLink = this.sanitizer.bypassSecurityTrustResourceUrl('http://www.africau.edu/images/default/sample.pdf');
    // this.pdf = this.sanitizer.bypassSecurityTrustScript(this.docs[0]);
this.overviewsegment = "overview";
this.segment =  "features";
  }



  ngOnInit() {
    const params: any = {};
    params.id = this.propertyId;
    this.dataService.propertyView(params).subscribe(value => {
      console.log(value);
      this.data = value;
      this.houseType = value["house_type"];
      this.phase = value["property_phase"];
      this.panel  = value["panel"];
      this.category = value["category"];

    
      
    //  Block
      this.block = this.data.block;
      // console.log("block",this.block);
      
     
      // schedule

      this.schedule = this.data.schedule;
      // console.log(this.schedule);
      for (let i= 0;i<this.schedule.length;i++) {
        this.schedules = 'https://premierplusgroup.com/public/document/schedule/' + this.propertyId + '/' + this.schedule[i].schedule_document;
        // console.log("schedule",this.schedules);

      }
    

      
      // Document details

      this.document = JSON.parse(this.data.document);
      // console.log(this.document);
      for (let i = 0; i < this.document.length; i++) {
        this.doc1 = 'https://premierplusgroup.com/public/document/property/' + this.propertyId + '/' + this.document[i];
        this.docs.push(this.doc1);
        // console.log("docs",this.docs);

        this.pdf = this.docs;

        this.view  = this.docs[0];
      // console.log(this.view);
      
        this.pdf1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.docs[1]);
        // this.pdf2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.docs[2]);
        // this.pdf3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.docs[3]);
        // this.pdf4 = this.sanitizer.bypassSecurityTrustResourceUrl(this.docs[4]);
        // this.pdf5 = this.sanitizer.bypassSecurityTrustResourceUrl(this.docs[5]);
        // this.pdf6 = this.sanitizer.bypassSecurityTrustResourceUrl(this.docs[6]);
        // this.pdf7 = this.sanitizer.bypassSecurityTrustResourceUrl(this.docs[7]);
        // this.pdf8 = this.sanitizer.bypassSecurityTrustResourceUrl(this.docs[8]);
        // this.pdf9 = this.sanitizer.bypassSecurityTrustResourceUrl(this.docs[9]);

        // console.log(this.pdf);
   
      }


      // image View

      this.img = JSON.parse(this.data.image);
      // console.log(this.img);
      for (let i = 0; i < this.img.length; i++) {
        this.value = 'https://premierplusgroup.com/public/img/property/' + this.propertyId + '/' + this.img[i];
        this.value1.push(this.value);
        // console.log(this.value1);
        
      }


      // Lots List  



      this.lots = this.data.lot;
      // console.log(this.lots);

      for (let i = 0; i < this.lots.length; i++) {
        if (this.lots[i].lot_type === 'IL') {
          this.intermediate.push(this.lots[i]);

        }
      }

      for (let i = 0; i < this.lots.length; i++) {
        if (this.lots[i].lot_type === 'CL') {
          this.corners.push(this.lots[i]);
          // console.log("cornerLot", this.corners);

        }
      }


      for (let i = 0; i < this.lots.length; i++) {
        if (this.lots[i].lot_type === 'EL') {
          this.end.push(this.lots[i]);
          // console.log("EndLot", this.end);

        }
      }


      for (let i = 0; i < this.lots.length; i++) {
        if (this.lots[i].lot_type === 'ODD') {
          this.odd.push(this.lots[i]);
          // console.log("OddLot", this.odd);

        }
      }
      // this.lots.forEach(element => {
      //   if (element.lot_type === 'CL') {
      //     this.corner = element;
      //     console.log("CornerLot", this.corner);[]

      //   }
      // })


    })


// this.property()
  }



// property(){
//   const params :any ={}
//    params.id= '1';
//    this.dataService.propertyViewtest(params).subscribe(data =>{
//      console.log(data);
//      this.houseType = data["house_type"];
//      console.log(this.houseType);
//      this.panel  = data["panel"];
//      console.log(this.panel);
      
     
//    })
// }

  viewDocument(data) {
    console.log(data);
    
    this.previewAnyFile.preview(data)
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));
  }


  gotoSchedule(data) {
    this.sched = 'https://premierplusgroup.com/public/document/property/schedule/' + this.propertyId + '/' + data;
    // console.log(this.sched);
    
   this.previewAnyFile.preview(this.sched)
.then((res: any) => console.log(res))
.catch((error: any) => console.error(error));
  }   

  gotoDoc(data) {
    console.log(data);

    this.previewAnyFile.preview(data)
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));

}

  gotoPhoto1(data) {
    this.photoViewer.show(data);
  }


  goBack() {
    this.navCtrl.back();
  }

 
}
