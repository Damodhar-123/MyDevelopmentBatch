import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title ="StudentData";
  Data :Array<any> ;
  show :boolean = false;
  imgName ='angular.png';

  constructor( ){
    this.Data = [
      { Name: 'Ravi', Age:'25', Mobile:9975343739},
      { Name: 'Rahul', Age:'28', Mobile:9974464564},
      { Name: 'Ram', Age:31, Mobile:9763330729},
      { Name: 'Raj', Age:30, Mobile:9359875970}
      

    ];
  }

  toggle1(){
    this.show = !this.show;
}

}