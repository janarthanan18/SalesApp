import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = "https://premierplusgroup.com/public/api/";

  constructor(private httpClient: HttpClient) { }


  login (params) {
    return this.httpClient.post(this.baseUrl + 'login' ,params);
   } 

   ForgotPassword(params) {
     return this.httpClient.post(this.baseUrl + 'resetpassword' ,params)
   }

ResetPassword(params) {
  return this.httpClient.post(this.baseUrl + 'resetpasswordvalidation',params)
}

  getPropertyList() {
    return this.httpClient.get(this.baseUrl + 'propertylist') ;
  }

  getPropertyView(params) {
     return this.httpClient.post(this.baseUrl +'lotbooking',params );
  }

   getCustomerList(params) {
  return this.httpClient.post(this.baseUrl +'customerlist',params );
  }

  // {keyword: query.query, customer_name:query.customer_name,sales_id: query.salesId}

  getProfile(params) {
    return this.httpClient.post(this.baseUrl +'profile',params);
    
  }

  getSales(params) {
    return this.httpClient.post(this.baseUrl+'getsales',params)
  }

getCustomer(params) {
  return this.httpClient.post(this.baseUrl + 'getcustomer',params);
}

lotSubmit(params) {
  return this.httpClient.post(this.baseUrl + 'lotsubmit' ,params);
}

socilamediaLeads(params) {
  return this.httpClient.post(this.baseUrl + 'socialmedialeads', params)
}
socialMediadetails(params) {
  return this.httpClient.post(this.baseUrl + 'socialmediacustomer' ,params)
}

internalLeads(params) {
  return this.httpClient.post(this.baseUrl + 'internalleads', params)
}

registerAssignLeads(params) {
  return this.httpClient.post(this.baseUrl + 'registerassignleads' ,params) ;
}

registerAssignDetails(params) {
  return this.httpClient.post(this.baseUrl + 'registerassigncustomer' ,params) ;
}
getDocument(params) {
  return this.httpClient.post(this.baseUrl + 'document' ,params);
}

viewDocument(params) {
  return this.httpClient.post(this.baseUrl + 'getdocument' ,params);
}

getsigningAppointment(params) {
  return this.httpClient.post(this.baseUrl + 'signingappointment' ,params)
}
getLoanStatus(params) {
  return this.httpClient.post(this.baseUrl + 'loanstatus' ,params);
}


getunitCommision(params) {
  return this.httpClient.post(this.baseUrl + 'unitcommission' ,params) ;  
}

PostInternalLeads(params) {
  return this.httpClient.post(this.baseUrl + 'storeinternalleads' ,params);
}

getInternalLeads(params) {
  return this.httpClient.post(this.baseUrl + 'getinternalleads' ,params);
}
UpdateInternalLeads(params) {
  return this.httpClient.post(this.baseUrl + 'updateinternalleads' ,params);

}
deleteinternalLeads(params){
  return this.httpClient.post(this.baseUrl + 'deleteinternalleads' ,params);

}
 propertyView(params) {
  return this.httpClient.post(this.baseUrl + 'propertyview' ,params); 
}


// Testing


propertyViewtest (params){
  return this.httpClient.post('https://www.premierplusgroup.com/premiertest/public/api/propertyview' ,params)
}


PostPipeline(params) {
  return this.httpClient.post(this.baseUrl + 'pipeline' ,params);
}

socialMediaPipeline(params) {
  return this.httpClient.post(this.baseUrl + 'socialpipeline' ,params);
}
leadsDashboard(params) {
return this.httpClient.post(this.baseUrl + 'leadsdashboard' ,params);
}

commissionDashboard(params) {
  return this.httpClient.post(this.baseUrl + 'commissiondashboard' ,params);
}

lotDashboard(params) {
  return this.httpClient.post(this.baseUrl + 'lotdashboard' ,params);
}

SocialMediaDashboard(params) {
  return this.httpClient.post(this.baseUrl + 'socialmediadashboard' ,params);
}

SalesCustomerDashboard(params) {
  return this.httpClient.post(this.baseUrl + 'salescustomerdashboard' ,params)
}

Notification(params) {
  return this.httpClient.post(this.baseUrl + 'notifications' ,params);
}

SocialComment(params) {
  return this.httpClient.post(this.baseUrl + 'socialcomment' ,params)
}

customerComment(params) {
  return this.httpClient.post(this.baseUrl + 'customercomment' ,params);
}


InternalPipeline(params) {
  return this.httpClient.post(this.baseUrl + 'internalpipeline' ,params);
}

internalComment(params) {
  return this.httpClient.post(this.baseUrl + 'internalcomment' ,params);
}

socialBuddy(params) {
  return this.httpClient.post(this.baseUrl + 'assignbuddy',params)
}
PostBuddy(params) {
  return this.httpClient.post(this.baseUrl + 'assignbuddystore' ,params)
}

customerProperty(params) {
  return this.httpClient.post(this.baseUrl + 'customerproperty' ,params); 
}

PostSalesCommission(params) {
  return this.httpClient.post(this.baseUrl + 'salescommission',params)
}

SubmitSalesCommission(params) {
  return this.httpClient.post(this.baseUrl + 'submitsalescommission' ,params)
}
CommissionSales(params) {
  return this.httpClient.post(this.baseUrl + 'commissionsales' ,params)
}


}
