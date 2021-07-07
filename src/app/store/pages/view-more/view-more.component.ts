import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { ImagesService } from 'src/app/shared/services/images.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent implements OnInit {

  arrProductos : any[]=[] ;

  
  constructor(
            private ruta : ActivatedRoute,
            public servicio :  ImagesService,
            public cart:Cart,    
            public notificationService : NotificationService   

    )
        { 
          this.ruta.params.subscribe(params=>{
      
          this.arrProductos = this.servicio.getIndex(params["id"]);    
         })  
  }

  ngOnInit(  ) {

  }
  addBook(producto:any){
    this.cart.addLine(producto)
  }

  notification(){
    if(this.cart.lines.length !== 0)
       this.notificationService.success(':: Producto Agregado al Carrito')
  }
}




