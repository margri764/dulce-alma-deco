//modules
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider}  from 'angularx-social-login';


import { Cart } from './model/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

// Cambiar el locale de la app
import localeEs from '@angular/common/locales/es-AR'; //nombre inventado
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeEs );




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
    MatDialogModule,
    SocialLoginModule
    
 
  ],
  
  providers: [
 
   {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            "945600672462-sj0kqgfae94mr9fi1mkbgplm77n9h8pc.apps.googleusercontent.com"
          )
        },
                  // {
        //   id: FacebookLoginProvider.PROVIDER_ID,
        //   provider: new FacebookLoginProvider('clientId')
        // }
      ]
    } as SocialAuthServiceConfig,
  },
  { provide: LOCALE_ID, useValue: 'es-AR' },
    Cart,
    MatSnackBar,
   
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
