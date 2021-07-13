import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar} from '@angular/material/snack-bar';


//modules
import { StoreRoutingModule } from './store-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

//components
import { WoodComponent } from './pages/wood/wood.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { StencilComponent } from './pages/stencil/stencil.component';
import { ViewMoreComponent } from './pages/view-more/view-more.component';



//services
import { NotificationService } from '../shared/services/notification.service';






@NgModule({

  providers:[
    MatSnackBar,
    NotificationService,

  ],

  declarations: [
    WoodComponent,
    ShoppingCartComponent,
    StencilComponent,
    ViewMoreComponent,
 
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,

 
  
  ],
  exports:[
    WoodComponent,
    ShoppingCartComponent,
    StencilComponent,
    ViewMoreComponent
  ]

})
export class StoreModule { }
