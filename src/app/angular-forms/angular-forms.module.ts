import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFormsRoutingModule } from './angular-forms-routing.module';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TemplatedrivenformComponent,
    ReactiveformComponent,
    
    

  
  ],
  imports: [
    CommonModule,
    AngularFormsRoutingModule,
     SharedModule,
     FormsModule,
     ReactiveFormsModule,
    

  ],
  exports:[
    

  ]
})
export class AngularFormsModule { }
