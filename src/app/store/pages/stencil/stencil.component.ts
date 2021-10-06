import { Component, OnInit } from '@angular/core';
import { PageEvent} from '@angular/material/paginator';
import { Cart } from 'src/app/model/cart.model';
import { ImagenBackend } from 'src/app/shared/pages/interfaces';
import { ImagesService } from 'src/app/shared/services/images.service';
// import { Imagen } from '../../interface';



@Component({
  selector: 'app-stencil',
  templateUrl: './stencil.component.html',
  styleUrls: ['./stencil.component.css']
})


export class StencilComponent implements OnInit {
 
  // public arrayProductos= [{cardNumber:1},{cardNumber:2},{cardNumber:3},
  //   {cardNumber:4},{cardNumber:5},{cardNumber:6},
  //   {cardNumber:7},{cardNumber:8},{cardNumber:9},
  //   {cardNumber:10},{cardNumber:11},{cardNumber:12}]
  
arrayProductos : ImagenBackend []=[];
numero : any;  
cartel : any;
event: PageEvent;
public pageSlice = this.arrayProductos.slice(0 , 3);

    constructor(
      public servicio :  ImagesService, 
      public cart : Cart
) { 
        // this.arrayProductos = servicio.getProductos();
        // this.servicio= servicio.getIndex("id");
        // this.numero= servicio.itemsProductos();
}


OnPageChange(event: PageEvent){
  console.log(event);
  const startIndex = event.pageIndex * event.pageSize;
  let endIndex = startIndex + event.pageSize;
  if(endIndex > this.arrayProductos.length){
    endIndex = this.arrayProductos.length;
  }
  this.pageSlice = this.arrayProductos.slice( startIndex, endIndex);
}

  ngOnInit(): void {

  // this.OnPageChange(this.pageSlice)

  }

}
