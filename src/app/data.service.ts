import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 data = {
  name : 'Damodhar',
  age : 30,
  Mobno : 9763330729
 };
 carName? : string ;

 fruit? : string ;

  constructor() { }
}
