import { Injectable } from '@angular/core';
import {MatSnackBar,MatSnackBarConfig} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root' 
})
export class NotificationService {

  constructor(public snackBar : MatSnackBar) { }

    config: MatSnackBarConfig = {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass:['notification']
    }

    success(msg:any){
    
      this.snackBar.open(msg,'',this.config)
    }
  
}

