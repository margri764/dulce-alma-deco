import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ImagesService } from '../../../shared/services/images.service';
import Swal from 'sweetalert2';
import { Cart } from 'src/app/model/cart.model';
import { ImagenBackend } from '../../interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wood',
  templateUrl: './wood.component.html',
  styleUrls: ['./wood.component.css']
})
export class WoodComponent implements OnInit, AfterViewChecked {

  arrayProductos : ImagenBackend []=[];
  numItem : number = 0;  
  cartel : any;
  hidden:boolean = false

  get productWood(){
  this.numItem=0; 

    if(this.servicio.productWood.length != 0 ){
      this.hidden=true;
      this.numItem = this.servicio.productWood.length;
    }
    return this.servicio.productWood; 
   }

  constructor(
            public servicio :  ImagesService, 
            public cart : Cart,
            public router : Router,
            private cdRef: ChangeDetectorRef   
            ) { 
              
  }

  ngAfterViewChecked(){
    this.numItem = this.servicio.productWood.length;
    this.cdRef.detectChanges();

  };


  ngOnInit() { 


    this.servicio.getProductsFromBackend()
    
 
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





