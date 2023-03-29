import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
 title:string = 'My Web Page';
 todayDate ='03-11-2023';
 today =  new Date();
 todayDate2 : any;
 searchText : any;
 amount = 200;
 

 employee =[
  { Name:'Ram', Age:35, Salary:45000},
  { Name:'Raj', Age:37, Salary:48000},
  { Name:'Ramesh', Age:38, Salary:55000}
 ];
  
  
 ngOnInit(){
  this.dateFormate()
 }
 dateFormate(){
  let day = this.today.getDate();
  let Month = this.today.getMonth() + 1;
  let year = this.today.getFullYear();

  this.todayDate2 = Month + '-' + day + '-' + year ;

  console.log(this.today.toLocaleDateString());
   
 }
}
