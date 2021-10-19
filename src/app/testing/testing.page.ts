import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
})
export class TestingPage implements OnInit {
news:any;
  data: any;
  resp: any;
  constructor(public httpClient: HttpClient) { }

  ngOnInit() {
    this.sendPostRequest()
  }
  sendPostRequest() {
    
    let postData = {
      "MethodName": "GetNewsInfo",
      "InputStr":[{"UserID":"3","Device":"D","CompanyID":"2"}]
}
      this.httpClient.post("http://103.240.91.171/romainspectwebapi/Api/RoMaInspect/InvokeProcedure", postData) .subscribe(value => {
        this.news = value['Table1'];
        console.log(this.news);
       this.data =this.news[0];
       console.log(this.data);

       this.resp = this.data;
       console.log(this.resp);
       
      
       });

  }
}
