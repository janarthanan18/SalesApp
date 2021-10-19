import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-propertyshow',
  templateUrl: './propertyshow.page.html',
  styleUrls: ['./propertyshow.page.scss'],
})
export class PropertyshowPage implements OnInit {
  segment: string;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  slideOpts1= { 
    initialSlide: 1,
    speed: 400
  }
  pdfLink:any;
  constructor(private navctrl: NavController,private sanitizer: DomSanitizer) {
    this.pdfLink = this.sanitizer.bypassSecurityTrustResourceUrl('http://www.africau.edu/images/default/sample.pdf');

   }

  ngOnInit() {
  }
  goBack() {
    this.navctrl.back();
  }
}
