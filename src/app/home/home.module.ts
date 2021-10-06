import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LoginComponent } from './pages/login/login.component';
import { ValidatorService } from '../shared/validator/validator.service';





@NgModule({


  declarations: [
    HomeComponent,
    ContactUsComponent,
    LoginComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule



  ],
  exports:[
    HomeComponent,
    ContactUsComponent
  ]
})
export class HomeModule { }

// MatAutocompleteModule,
// MatButtonModule,
// MatCardModule,
// MatDialogModule,
// MatFormFieldModule,
// MatGridListModule,
// MatInputModule,
// MatListModule,
// MatIconModule,
// MatProgressSpinnerModule,
// MatSelectModule,
// MatSidenavModule,
// MatSnackBarModule,
// MatToolbarModule