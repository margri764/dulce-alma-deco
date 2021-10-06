import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent implements OnInit {

  fileName = '';
  uploadProgress:number;
  uploadSub: Subscription;
  requiredFileType = ['pdf','jpg']

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  onFileSelected(event) {
    const file:File = event.target.files[0];
  
    if (file) {
        this.fileName = file.name;
        const formData = new FormData();
        formData.append("thumbnail", file);

        const upload = this.http.post("http://localhost:8080/api/thumbnail-upload", formData, {
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
}

cancelUpload() {
this.uploadSub.unsubscribe();
this.reset();
}

reset() {
this.uploadProgress = null;
this.uploadSub = null;
}
}
