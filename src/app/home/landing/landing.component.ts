import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  carName ?: string ;
  data: any;
  fruit: any;
  constructor( private dataService:DataService){

  }
  ngOnInit(){
     this.carName = this.dataService.carName;
     this.dataService.fruit = 'Orange';
     this.dataService.carName = this.carName;
  }
  getData(){
    this.data = this.dataService.data ;
    this.fruit = this.dataService.fruit;
    this.carName = this.dataService.carName;
  }
  setData(){
    this.dataService.fruit = 'Mango';
    this.dataService.carName = 'Swift';
  }
}
