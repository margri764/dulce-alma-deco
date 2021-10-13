import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms'


//modules
import { StoreRoutingModule } from './store-routing.module';
import { MatPaginatorModule} from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';

//components
import { WoodComponent } from './pages/wood/wood.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { StencilComponent } from './pages/stencil/stencil.component';
import { ViewMoreComponent } from './pages/view-more/view-more.component';

//services
import { NotificationService } from '../shared/services/notification.service';

//pipes
import { imgPipe } from './pipes/imgPipe';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({

  providers:[
    MatSnackBar,
    NotificationService,
    MatIconModule,
    MatIcon
  ],
  declarations: [
    WoodComponent,
    ShoppingCartComponent,
    StencilComponent,
    ViewMoreComponent,
    
    //pipes
    imgPipe
   ],
 
   imports: [
    CommonModule,
    StoreRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    FormsModule,
    MatIconModule,
    MatButtonModule

  ],
  exports:[
    WoodComponent,
    ShoppingCartComponent,
    StencilComponent,
    ViewMoreComponent
  ]

})
export class StoreModule { }
