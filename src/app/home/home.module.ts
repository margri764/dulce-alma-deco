import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';

import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';





@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule


  ],
  exports:[
    HomeComponent,
    ContactUsComponent
  ]
})
export class HomeModule { }
