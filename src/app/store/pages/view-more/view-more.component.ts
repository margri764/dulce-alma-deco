import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Cart } from 'src/app/model/cart.model';
import { ImagenBackend } from 'src/app/shared/pages/interfaces';
import { ImagesService } from 'src/app/shared/services/images.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent implements OnInit {

  arrProductos: any = {};

  // get productWood(){
  //   // if(this.servicio.productWood.length != 0 ){
  //   //   // this.hidden=true;
  //   // }
  //   // this.arrProductos = this.servicio.productWood;
  //   // const test = this.servicio.productWood.map(( wood )=>{
  //   //       console.log(wood)

  //   // });

  //   this.arrProductos = this.servicio.productWood;

  //   console.log(this.arrProductos);

  //   return this.servicio.productWood; 
  //  }
  
  constructor(
            private activatedRoute : ActivatedRoute,
            public servicio : ImagesService,
            public cart : Cart,    
            public notificationService : NotificationService,  
            private router: Router

    )
        { 
          this.activatedRoute.params.subscribe( params => {
      
           this.arrProductos = this.servicio.getIndex( params["id"] );   
         })  

        //  console.log(this.arrProductos.name)

  }


 
  
  ngOnInit(  ) {


  }



  addBook(producto:any){
    this.cart.addLine(producto);
    this.notification();
  }

  notification(){
    if(this.cart.lines.length !== 0)
       this.notificationService.success(':: Producto Agregado al Carrito')
  }
}




