import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ProtectedRoutingModule } from './protected-routing.module';



@NgModule({
  
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatProgressBarModule,
    MatGridListModule,
    MatIconModule,
    ReactiveFormsModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
