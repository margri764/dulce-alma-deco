import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './home/pages/contact-us/contact-us.component';
import { HomeComponent } from './home/pages/home/home.component';
import { PopupComponent } from './shared/pages/popup/popup.component';





const routes : Routes = [

  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then( m => m.StoreModule )    
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: 'popup', component: PopupComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
]


@NgModule({

  imports: [
   RouterModule.forRoot( routes )

  ],
  exports: [

    RouterModule
  ]
})
export class AppRoutingModule { }
