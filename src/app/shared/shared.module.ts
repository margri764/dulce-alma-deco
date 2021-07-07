import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';




import { MatDialogModule } from '@angular/material/dialog';

import { ValidatorService } from './validator/validator.service';


import { HeaderComponent } from './pages/header/header.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SlideoffComponent } from './pages/slideoff/slideoff.component';
import { SliderUpComponent } from './pages/slider-up/slider-up.component';
import { PopupComponent } from './pages/popup/popup.component';




@NgModule({
  providers:[
    ValidatorService,
 
    
  
  ],
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SlideoffComponent,
    SliderUpComponent,
    PopupComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule

 
  ],

  exports:[
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SlideoffComponent,
    SliderUpComponent,
    PopupComponent
  ]
})
export class SharedModule { }
