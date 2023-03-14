import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor( private router:Router){
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
  redirect(){
   this.router.navigateByUrl('/admin')
  }
  redirectabout(){
    this.router.navigateByUrl('/aboutus-module')
  }
}
