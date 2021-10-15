import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

//services


//components
import { HeaderComponent } from './pages/header/header.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SlideoffComponent } from './pages/slideoff/slideoff.component';
import { SliderUpComponent } from './pages/slider-up/slider-up.component';
import { PopupComponent } from './pages/popup/popup.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { CategoryPipe } from '../store/pipes/categoryPipe';




@NgModule({

  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SlideoffComponent,
    SliderUpComponent,
    PopupComponent,
    InvoiceComponent,
    ErrorPageComponent,
    CategoryPipe
  ],

  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
  

 
  ],

  exports:[
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SlideoffComponent,
    SliderUpComponent,
    PopupComponent,
    InvoiceComponent,
    ErrorPageComponent
 ]
})
export class SharedModule { }
