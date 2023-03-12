import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  data = [10,20,30,40,50];
  myName = 'Damodhar';
  disableBox = true ;
  no = 70 ;
  myValue = 'Ram' ;

 getValue(){
  // return 'Rahul'
  this.disableBox ;
 }
 changeInputValue(){
  return this.myValue
 }

}
