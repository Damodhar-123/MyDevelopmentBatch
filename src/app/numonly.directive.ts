import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumonly]'
})
export class NumonlyDirective {

  constructor( private elementRef :ElementRef) { }
  @HostListener('input', ['$event'] )
  onInputNumvalue(){
    var inputBoxOldValue =this.elementRef.nativeElement.value;
    this.elementRef.nativeElement.value = inputBoxOldValue.replace(/[^0-9]*/g , '')

  }
}
