import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Cart } from 'src/app/models/cart.model';
import { Wood } from 'src/app/models/wood.models';
import { ImagenBackend } from 'src/app/shared/pages/interfaces';
import { ImagesService } from 'src/app/shared/services/images.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent implements OnInit {

  public arrProducts: any;
  
  constructor(
            private activatedRoute : ActivatedRoute,
            public servicio : ImagesService,
            public cart : Cart,    
            public notificationService : NotificationService,  
            private router: Router

    )
        { 
          this.activatedRoute.params.subscribe( params => {
      
           this.arrProducts = this.servicio.getIndex( params["id"] );   
         })  


  }


 
  
  ngOnInit(  ) {


  }



  addItem(item : any){
    this.cart.addLine( item );
    this.notification();
  }

  notification(){
    if(this.cart.lines.length !== 0)
       this.notificationService.success(':: Producto Agregado al Carrito')
  }
}




