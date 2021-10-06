import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../../shared/services/images.service';
import Swal from 'sweetalert2';
import { Cart } from 'src/app/model/cart.model';
import { ImagenBackend } from '../../interface';
import { interval, Observable, timer } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wood',
  templateUrl: './wood.component.html',
  styleUrls: ['./wood.component.css']
})
export class WoodComponent implements OnInit {

  arrayProductos : ImagenBackend []=[];
  numero : any;  
  cartel : any;
  hidden:boolean = false

  get productWood(){
    if(this.servicio.productWood.length != 0 ){
      this.hidden=true;
    }
    return this.servicio.productWood; 
   }

  constructor(
            public servicio :  ImagesService, 
            public cart : Cart,
            public router : Router
  ) { 
              // this.arrayProductos = servicio.getProductsFromBackend();
              // this.servicio= servicio.getIndex("id");
              // this.numero= servicio.itemsProductos();
  }

  ngOnInit() { 

    // this.servicio.getProductsFromBackend().subscribe( (res: any) => {
     
    //     this.hidden= true;
    //     this.arrayProductos = res.product
    // });
    this.servicio.getProductsFromBackend();
  
    

  
    setTimeout(()=>{
    this.hidden= true
    if(this.servicio.productWood.length === 0){
    this.router.navigateByUrl('/error-page')}
    },10000);
   
   }// fin ngOnInit

   

      addBook(producto: ImagenBackend){
        this.cart.addLine(producto)
      }
    
      getCartel(){
        this.cartel = Swal.fire("Muchas Gracias!", "Producto añadido al Carrito!", "success");
        return this.cartel
     }

   
        
}





