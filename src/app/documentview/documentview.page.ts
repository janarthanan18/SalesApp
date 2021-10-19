import { Component, OnInit } from '@angular/core';
import { ActivatedRoute}from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { HttpClient} from  '@angular/common/http'
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';

@Component({
  selector: 'app-documentview',
  templateUrl: './documentview.page.html',
  styleUrls: ['./documentview.page.scss'],
})
export class DocumentviewPage implements OnInit {
  customerId : any;
  document: any;
  name: any;
  id: any;
  docs: string;
  constructor(private previewAnyFile: PreviewAnyFile,private httClient:HttpClient, private router: ActivatedRoute, public navCtrl : NavController ,private dataService :DataService) {
    this.customerId = this.router.snapshot.params.id
    console.log(this.customerId);
   }

  ngOnInit() {
    const params :any = {};
    params.customer_id  = this.customerId;
    this.dataService.viewDocument(params).subscribe(value => {
      console.log(value);
      this.document = value;
      // console.log(this.document[0].document_name);
    this.name = this.document[0].document_name;
    this.id = this.document[0].id;

      console.log(this.name);
      
    })
  }

  gotoDocument(data) {
this.docs = 'https://premierplusgroup.com/public/document/property/' + this.customerId + '/' + data;
    console.log(this.docs);
    
    this.previewAnyFile.preview(this.docs)
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
      
  //     return this.httClient.get('https://premierplusgroup.com/public/document/customer/%7Bcustomer_id%7D/%7Bdocument_name%7D' ).subscribe(resp => {
  //   console.log(resp);
    
  // })
  }


  goBack() {
    this.navCtrl.back();
  }
}
