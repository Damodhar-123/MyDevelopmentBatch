import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

 show :boolean= true;
 values =[20, 30, 40, 50,60]
 players:Array<any>;
 color = 'red';
 styleProperty = 'main2';
 stylePropertyNew = 2000000;
 multipleStyle = 'Maske';
 inlineCss = 'purple';
 headingProperty: any;

 constructor(){
  this.players=[
   {
     Name: 'Sachin',
     Matches: 444,
     Runs: 35121
   },

   {
     Name: 'Virat',
     Matches: 240,
     Runs: 26144
   },
   {
     Name: 'Rohit',
     Matches: 288,
     Runs: 21543
   },
   {
     Name: 'Dhoni',
     Matches: 364,
     Runs: 22364
   }
  ]
 };


showdiv(){
  this.show = true;

}
hidediv(){
  this.show = false;
}
toggle(){
  this.show = !this.show;
}
setClass():any{
return 'main1' ;
}


}
