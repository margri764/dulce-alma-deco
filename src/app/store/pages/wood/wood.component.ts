import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../../shared/services/images.service';
import Swal from 'sweetalert2';
import { Cart } from 'src/app/model/cart.model';
import { Imagen } from '../../interface';


@Component({
  selector: 'app-wood',
  templateUrl: './wood.component.html',
  styleUrls: ['./wood.component.css']
})
export class WoodComponent implements OnInit {

  arrayProductos : Imagen []=[];
  numero : any;  
  cartel : any;

  constructor(
            public servicio :  ImagesService, 
            public cart : Cart
  ) { 
              this.arrayProductos = servicio.getProductos();
              this.servicio= servicio.getIndex("id");
              this.numero= servicio.itemsProductos();
  }

  ngOnInit() { 


  
    }// fin ngOnInit
  
      addBook(producto: Imagen){
        this.cart.addLine(producto)
      }
    
      getCartel(){
        this.cartel = Swal.fire("Muchas Gracias!", "Producto añadido al Carrito!", "success");
        return this.cartel
     }

    
        
      }





