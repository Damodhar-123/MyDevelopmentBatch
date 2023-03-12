import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
 inputBoxValue : any ;
 arrayItem=[ 100, 43 , 415 , 455 ,22]

 myFunction(value:any){
  this.inputBoxValue = value;
 }
 checkboxEvent(event:any)
 {
  console.log("event",event.target.value);
  this.checkboxEvent = event.target.value;
  
 }
}
