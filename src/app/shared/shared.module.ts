import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharaonlyDirective } from '../charaonly.directive';
import { NumonlyDirective } from '../numonly.directive';
import { TemplatedrivenformComponent } from '../angular-forms/templatedrivenform/templatedrivenform.component';



@NgModule({
  declarations: [
    CharaonlyDirective,
    NumonlyDirective

  
    
  ],
  
  imports: [
    CommonModule
  ],
  exports: [
    CharaonlyDirective,
    NumonlyDirective

    

  

  ]
  
})
export class SharedModule { }
