import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_novbatch';
  myName = "Damodhar";
  mySurName : string = 'Sawant';
  mySurName2? : string;
  testProperty : any = 5000;

  constructor(){
   console.log(' inside constructor...');
   
  } 
  test(){
    var xyz = 100;
    this.mySurName2 = 'Maske';
  }
  test2(){
    this.mySurName2 = this.mySurName ;
    this.test();
  }
}
