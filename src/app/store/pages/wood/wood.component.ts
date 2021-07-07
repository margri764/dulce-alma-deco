import { Component, OnInit } from '@angular/core';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { CarritoComponent } from '../carrito/carrito.component';
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
            // public dialog : MatDialog,
  ) { 
              this.arrayProductos = servicio.getProductos();
              this.servicio= servicio.getIndex("id");
              this.numero= servicio.itemsProductos();
  }

  ngOnInit() { 

    // this.uploadimageservice.imageDetailList.snapshotChanges().subscribe(
      
    //   list => {
    //     this.imageList = list.map(item => { return item.payload.val(); });
    //     this.arrCategoryFofacil=this.imageList.filter(item => {return item.category === "Fibro Facil"})

    //   }, 
    // ) 
  
    }// fin ngOnInit
  
      addBook(producto: Imagen){
        this.cart.addLine(producto)
      }
    
      getCartel(){
        this.cartel = Swal.fire("Muchas Gracias!", "Producto añadido al Carrito!", "success");
        return this.cartel
     }

    //  onCreate(){
    //   const dialogConfig=new MatDialogConfig()
    //   dialogConfig.disableClose=true
    //   dialogConfig.autoFocus=true
    //   dialogConfig.width="100%"
    //   dialogConfig.height="100%"
    //   this.dialog.open(CarritoComponent,dialogConfig)
    //  }

    
        
      }





