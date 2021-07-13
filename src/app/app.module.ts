//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';


import { Cart } from './model/cart.model';

import { MatSnackBar } from '@angular/material/snack-bar';


//components
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    HomeModule,
    BrowserAnimationsModule,
    OverlayModule,
    MatDialogModule
    
 
  ],
  
  providers: [
    Cart,
    MatSnackBar,
    {
      provide: MatDialogRef,
      useValue:{}
    }
   
  ],
  bootstrap: [AppComponent],
  // entryComponents : [ PopupComponent ]
})
export class AppModule { }
