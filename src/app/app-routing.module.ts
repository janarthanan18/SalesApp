import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
    {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: 'leads',
    loadChildren: () => import('./leads/leads.module').then( m => m.LeadsPageModule)
  },
  {
    path: 'deals',
    loadChildren: () => import('./deals/deals.module').then( m => m.DealsPageModule)
  },
  {
    path: 'leadsdetails',
    loadChildren: () => import('./leadsdetails/leadsdetails.module').then( m => m.LeadsdetailsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'dealsdetails',
    loadChildren: () => import('./dealsdetails/dealsdetails.module').then( m => m.DealsdetailsPageModule)
  },
  {
    path: 'createleads',
    loadChildren: () => import('./createleads/createleads.module').then( m => m.CreateleadsPageModule)
  },
  {
    path: 'createdeals',
    loadChildren: () => import('./createdeals/createdeals.module').then( m => m.CreatedealsPageModule)
  },
  {
    path: 'plan',
    loadChildren: () => import('./plan/plan.module').then( m => m.PlanPageModule)
  },
  {
    path: 'planview',
    loadChildren: () => import('./planview/planview.module').then( m => m.PlanviewPageModule)
  },
  {
    path: 'plandetails',
    loadChildren: () => import('./plandetails/plandetails.module').then( m => m.PlandetailsPageModule)
  },
  {
    path: 'unitplan',
    loadChildren: () => import('./unitplan/unitplan.module').then( m => m.UnitplanPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'layoutplan',
    loadChildren: () => import('./layoutplan/layoutplan.module').then( m => m.LayoutplanPageModule)
  },
  {
    path: 'layoutview',
    loadChildren: () => import('./layoutview/layoutview.module').then( m => m.LayoutviewPageModule)
  },
  {
    path: 'sales',
    loadChildren: () => import('./sales/sales.module').then( m => m.SalesPageModule)
  },
  {
    path: 'ratings',
    loadChildren: () => import('./ratings/ratings.module').then( m => m.RatingsPageModule)
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then( m => m.BookPageModule)
  },
  {
    path: 'testing',
    loadChildren: () => import('./testing/testing.module').then( m => m.TestingPageModule)
  },
  {
    path: 'customerdetails',
    loadChildren: () => import('./customerdetails/customerdetails.module').then( m => m.CustomerdetailsPageModule)
  },
  {
    path: 'documentdetails',
    loadChildren: () => import('./documentdetails/documentdetails.module').then( m => m.DocumentdetailsPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'unitcommissiom',
    loadChildren: () => import('./unitcommissiom/unitcommissiom.module').then( m => m.UnitcommissiomPageModule)
  },
  {
    path: 'propertydetails/:id',
    loadChildren: () => import('./propertydetails/propertydetails.module').then( m => m.PropertydetailsPageModule)
  },
  {
    path: 'propertymodal',
    loadChildren: () => import('./propertymodal/propertymodal.module').then( m => m.PropertymodalPageModule)
  },
  {
    path: 'socialmedialeads/:id',
    loadChildren: () => import('./socialmedialeads/socialmedialeads.module').then( m => m.SocialmedialeadsPageModule)
  },
  {
    path: 'socialmedia',
    loadChildren: () => import('./socialmedia/socialmedia.module').then( m => m.SocialmediaPageModule)
  },
  {
    path: 'internal',
    loadChildren: () => import('./internal/internal.module').then( m => m.InternalPageModule)
  },
  {
    path: 'internalmodal',
    loadChildren: () => import('./internalmodal/internalmodal.module').then( m => m.InternalmodalPageModule)
  },
  {
    path: 'registerassign',
    loadChildren: () => import('./registerassign/registerassign.module').then( m => m.RegisterassignPageModule)
  },
  {
    path: 'registerassignleads/:id',
    loadChildren: () => import('./registerassignleads/registerassignleads.module').then( m => m.RegisterassignleadsPageModule)
  },
  {
    path: 'propertyindex',
    loadChildren: () => import('./propertyindex/propertyindex.module').then( m => m.PropertyindexPageModule)
  },
  {
    path: 'lotbooking/:id',
    loadChildren: () => import('./lotbooking/lotbooking.module').then( m => m.LotbookingPageModule)
  },
  {
    path: 'lotbookingstatus/:id',
    loadChildren: () => import('./lotbookingstatus/lotbookingstatus.module').then( m => m.LotbookingstatusPageModule)
  },
  {
    path: 'lotbookingavailable/:id',
    loadChildren: () => import('./lotbookingavailable/lotbookingavailable.module').then( m => m.LotbookingavailablePageModule)
  },
  {
    path: 'lotbookingsold/:id',
    loadChildren: () => import('./lotbookingsold/lotbookingsold.module').then( m => m.LotbookingsoldPageModule)
  },
  {
    path: 'lotbookingrejected/:id',
    loadChildren: () => import('./lotbookingrejected/lotbookingrejected.module').then( m => m.LotbookingrejectedPageModule)
  },
  {
    path: 'documentview/:id',
    loadChildren: () => import('./documentview/documentview.module').then( m => m.DocumentviewPageModule)
  },
  {
    path: 'signingappointment',
    loadChildren: () => import('./signingappointment/signingappointment.module').then( m => m.SigningappointmentPageModule)
  },
  {
    path: 'loanstatus',
    loadChildren: () => import('./loanstatus/loanstatus.module').then( m => m.LoanstatusPageModule)
  },
  {
    path: 'editinternalleads/:id',
    loadChildren: () => import('./editinternalleads/editinternalleads.module').then( m => m.EditinternalleadsPageModule)
  },
  {
    path: 'propertylist',
    loadChildren: () => import('./propertylist/propertylist.module').then( m => m.PropertylistPageModule)
  },
  {
    path: 'documentmodal',
    loadChildren: () => import('./documentmodal/documentmodal.module').then( m => m.DocumentmodalPageModule)
  },
  {
    path: 'privacypolicy',
    loadChildren: () => import('./privacypolicy/privacypolicy.module').then( m => m.PrivacypolicyPageModule)
  },
  {
    path: 'socialmediapipeline',
    loadChildren: () => import('./socialmediapipeline/socialmediapipeline.module').then( m => m.SocialmediapipelinePageModule)
  },
  {
    path: 'propertyshow',
    loadChildren: () => import('./propertyshow/propertyshow.module').then( m => m.PropertyshowPageModule)
  },
  {
    path: 'registerassignpipeline',
    loadChildren: () => import('./registerassignpipeline/registerassignpipeline.module').then( m => m.RegisterassignpipelinePageModule)
  },
  {
    path: 'internalpipeline/:id',
    loadChildren: () => import('./internalpipeline/internalpipeline.module').then( m => m.InternalpipelinePageModule)
  },
  {
    path: 'interestedproperty/:id',
    loadChildren: () => import('./interestedproperty/interestedproperty.module').then( m => m.InterestedpropertyPageModule)
  },
  {
    path: 'assignedbuddy',
    loadChildren: () => import('./assignedbuddy/assignedbuddy.module').then( m => m.AssignedbuddyPageModule)
  },
  {
    path: 'socialmediamodal',
    loadChildren: () => import('./socialmediamodal/socialmediamodal.module').then( m => m.SocialmediamodalPageModule)
  },
  {
    path: 'salescommission',
    loadChildren: () => import('./salescommission/salescommission.module').then( m => m.SalescommissionPageModule)
  },
  {
    path: 'addsalescommission/:id',
    loadChildren: () => import('./addsalescommission/addsalescommission.module').then( m => m.AddsalescommissionPageModule)
  },
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
