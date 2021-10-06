import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopComponent } from './workshop/workshop.component';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    WorkshopComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressBarModule
  ],
  exports:[
    WorkshopComponent
  ]
})
export class WorkshopModule { }
