import { HttpClient, HttpEventType, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Cart } from 'src/app/model/cart.model';
import { ImagenBackend } from 'src/app/store/interface';
// import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  lineIsEmpty:boolean=true;
  productos : any [];
  uploadProgress:number;
  uploadSub: Subscription;
  private baseUrl: string = environment.baseUrl; //ojo con el import xq puede ser prod!!

  woodProducts : any []=[];

 get productWood(){
  return this.woodProducts; 
 }


bodyObjectString: string= '';
         
    
    
      constructor( private cart : Cart,
                   private http: HttpClient,
                   
                    ) { 
      }

  
    //  addProductsInBackend (body:any) {
    //    console.log(body);
    //     return this.http.post(`${this.baseUrl}/products`,body);
    //     }

  

     // const params=new HttpParams().set("limit",this.number); //otra opcion dinamica para paginar


      
    //  getProductsFromBackend( ){
       
    //   let params=new HttpParams().set("limit","4");
    //    return this.http.get( `${this.baseUrl}/products`, { params } );
    //   //  return this.http.get(`${this.baseUrl}/api/products`,{params});
     
    //   }

   getProductsFromBackend( ){
       
      let params=new HttpParams().set("limit","4");
      this.http.get( `${this.baseUrl}/products`, { params } )
      .subscribe( (res:any)=>{
        this.woodProducts = res.product
      })
     
      };


   
     dataProductsToBackend( archivo: File , body:any  ) {
        
        this.bodyObjectString = JSON.stringify(body);
        console.log(archivo) 
        const formData = new FormData();
        formData.append('bodyFront', this.bodyObjectString);
        formData.append('imagen', archivo);
        
        const upload = this.http.post( `${this.baseUrl}/products`, formData, {
        reportProgress: true,
        observe: 'events'
      })
      .pipe(
        finalize(() => this.reset())
      );

      this.uploadSub = upload.subscribe(event => {
      if (event.type == HttpEventType.UploadProgress) {
        this.uploadProgress = Math.round(100 * (event.loaded / event.total));

      }
      })
        
     }
  
   
  

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
    }
    
    reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
    }
    
    


    //  async dataProductsToBackend( archivo: File , body:any  ) {
  
    //   this.bodyObjectString = JSON.stringify(body);
    //   console.log(archivo) 

    //   try {
  
    //     const url = 'http://localhost:8080/api/products';
    //     const formData = new FormData();
    //     formData.append('bodyFront', this.bodyObjectString);
    //     formData.append('imagen', archivo);
  
    //     const resp = await fetch( url, {
    //       method: 'POST',
    //       headers: {
    //         // 'Content-Type': 'application/x-www-form-urlencoded'
    //         // 'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
    //         // 'Content-Type': 'multipart/form-data'
    //       },
    //       body: formData
    //     });
  
    //     const data = await resp.json();
  
    //     if ( data.ok ) {
    //       return data;
    //     } else {
    //       console.log(data);
    //       return false;
    //     }
        
    //   } catch (error) {
    //     console.log(error);
    //     return false;    
    //   }
  
    // }

    // getProductos(productos){
    
    //   return products;
    // }

    // getIndex(i){

    //   return this.productos[i];
    //  };
     
    getIndex(i:any){
    
      return  this.woodProducts[i];
      
     };
       
    itemsProductos(){
    
    return this.productos.length;
    
     };
    
     cartIsEmpty(){
      if( this.cart.lines.length != 0 ){
         this.lineIsEmpty=true;
      }
  
      return;
    }
    
    }