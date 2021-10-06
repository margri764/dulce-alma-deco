import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize, tap } from 'rxjs/operators';
import { ImagesService } from 'src/app/shared/services/images.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  imgSrc: string='';
  selectedImage: any;
  isSubmitted: boolean;
  public upImage: File;
  public upImageToBackend: File;
  public imgTemp: any = null;
  imgTemplate: string='';
  uploadProgress:number;
  uploadSub: any;
  test :any;
  hidden: boolean = true;
  private baseUrl: string = environment.baseUrl; //ojo con el import xq puede ser prod!!








  constructor(  private _imageService : ImagesService,
                private http: HttpClient,
                private fb : FormBuilder,
                private _validatorservice : ValidatorService
                ) { 

  }

  formTemplate : FormGroup = this.fb.group({
    name:     ['',[Validators.required,Validators.pattern( this._validatorservice.nameLastName)]],
    price:    ['',[Validators.required] ],
    category: ['',[Validators.required] ],
    description: [''],
    status: [''], 
    // img: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
    this.resetForm();
        }

validField( field: string ) {

  return this.formTemplate .controls[field].errors && this.formTemplate .controls[field].touched;
}


    
    reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
     }
     
  
  showPreview(file: File) {
    
    if ( !file ) { 
      this.upImage= file;
      
      return (this.imgSrc = '../assets/img/image_placeholder.jpg',
      this.selectedImage=null)
    }
    const reader = new FileReader();
    reader.readAsDataURL( file );
    this.upImage = file;
    this.imgTemplate= file.name;


    reader.onload = (e: any) => this.imgSrc = e.target.result;
    reader.onloadend = () => {
      this.imgTemp = reader.result;
    }
  }


  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      name: '',
      price:'',
      category: '',
      description: '',
      status: true,
    });
    this.imgSrc = '../assets/img/image_placeholder.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
    this.imgTemplate = '';
  }
 
  sendProductsToBackend(body){

    if ( this.formTemplate.invalid ) {
      this.formTemplate.markAllAsTouched();
      return;
    }
    this.hidden=false;


    this.dataProductsToBackend(this.upImage ,body);

 
  
   }
  


    dataProductsToBackend( archivo: File , body:any  ) {

      // const fileJson = new File([JSON.stringify(body)], "file.json", {type: '"application/json'});

  

      // const bodyObjectString = JSON.stringify(body);
      let formData = new FormData();
      formData.append("name", this.formTemplate.get('name').value);
      formData.append("category", this.formTemplate.get('category').value);
      formData.append("price", this.formTemplate.get('price').value);
      formData.append("description", this.formTemplate.get('description').value);
      formData.append("status", this.formTemplate.get('status').value);


      
      // formData.append('bodyFront', fileJson);
      formData.append('imagen', archivo);
      // let options =new HttpHeaders().set('Content-Type','multipart/form-data');
      // const options = this.createRequestOptions();

    
     const upload = this.http.post( `${this.baseUrl}/products`, formData,  {
      // headers: options,
      reportProgress: true,
      observe: 'events'
  
    })
    .pipe(
       finalize( () => this.reset()),
            
    );
    
    this.uploadSub = upload.subscribe ( (event) => {
    if (event.type == HttpEventType.UploadProgress) {
      this.uploadProgress = Math.round(100 * (event.loaded / event.total));
     }

    if(event.type == HttpEventType.ResponseHeader){
       if(event.ok){
         this.hidden=true;
         alert('producto ok');
        

         this.resetForm();

       }

    }

    },(err: HttpErrorResponse)=> {

    this.hidden = true;

 //error de base dato offline
      // console.log(err.status) 

// error desde los check
      // console.log(err.error.error.errors.name.message) 
      
      //error de desconexion con el back end
      if(err.status===0){
        alert ('opps!!')
        return;
      };


      if(err.status === 400 || err.status === 403 ){

        if(err.error.msg){ //error desde el controller (no hay archivo!!)
          alert(err.error.msg);
          return;
          };

        if(err.error.errors){ // error desde los check (nombre obligatorio)
          const test = err.error.errors;

          //recorro el arreglo de errores y guardo en "msgs" cada error y muestro la propiedad error
         test.map(msgs => {
           
           if(!msgs.msg.includes('Cast'))
           alert (msgs.msg)
           console.log(msgs)
         });
         
         return;  
         };
       
      };
       
   })
    
      
   }

  
  
}
     
