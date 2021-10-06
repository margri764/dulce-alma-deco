import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ContactUsComponent } from './home/pages/contact-us/contact-us.component';
import { HomeComponent } from './home/pages/home/home.component';
import { InvoiceComponent } from './shared/pages/invoice/invoice.component';
import { PopupComponent } from './shared/pages/popup/popup.component';
import { WorkshopComponent } from './workshop/workshop/workshop.component';
import { LoginComponent } from './home/pages/login/login.component';
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';





const routes : Routes = [

  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then( m => m.StoreModule )    
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'admin', 
    loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule ),  
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ],

  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: 'popup', component: PopupComponent
  },
  {
    path: 'invoice', component: InvoiceComponent
  },
  {
    path: 'workshop', component: WorkshopComponent
  },
  {
    path: 'error-page', component: ErrorPageComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
]


@NgModule({

  imports: [
   RouterModule.forRoot( routes ,{
     useHash: false
   })

  ],
  exports: [

    RouterModule
  ]
})
export class AppRoutingModule { }
