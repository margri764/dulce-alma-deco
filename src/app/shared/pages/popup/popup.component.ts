import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(  private fb: FormBuilder,
                public dialogRef : MatDialogRef<PopupComponent>,
                private router : Router
    ) {}

  ngOnInit() {
    
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });

    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
  }
  onClose(){
    this.router.navigateByUrl('/home')
    if(this.router.url!='./store/shopping-cart')
    this.dialogRef.close()
  }
}
