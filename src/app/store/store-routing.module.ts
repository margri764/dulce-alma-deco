import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { StencilComponent } from './pages/stencil/stencil.component';
import { ViewMoreComponent } from './pages/view-more/view-more.component';
import { WoodComponent } from './pages/wood/wood.component';


const routes : Routes = [
  { 
    path: '', 
    children: [
      { path: 'wood', component: WoodComponent },
      { path: 'stencil', component: StencilComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'view-more/:id', component: ViewMoreComponent },


      // { path: '**', redirectTo: 'wood' },


    ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class StoreRoutingModule { }
