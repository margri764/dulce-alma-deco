import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  productos : any []=[
    {
      id:0,
      name: "Set Matero",
      img: "assets/compu.jpg",
      price:"250"
    },
    {
      id:1,
      name: "Masitero c/vidrio",
      img: "assets/2.jpg",
      price:"170"
    },
    {
      id:10,
      name: "Fondo moderno",
      img: "assets/3.jpg",
      price:"1700"
    },
    {
      id:2,
      name: "Cajon grande",
      img: "assets/4.jpg",
      price:"130"
      },
      {
        id:3,
        name: "Cajon frente",
        img: "assets/5.jpg",
        price:"200"
        },
    
        {
          id:4,
          name: "Set Matero2",
          img: "assets/6.jpg",
          price:"250"
        },  
        {
          id:4,
          name: "Set Matero2",
          img: "assets/7.jpg",
          price:"250"
        }, 
     
        
        
    ];
    
    
     
    
    
      constructor() { 
        
      }
     
    getProductos(){
    
      return this.productos;
    }
    getIndex(i:any){
    
      return this.productos[i];
      
     }
    
    itemsProductos(){
    
    return this.productos.length;
    
     }
    
    
    
    }