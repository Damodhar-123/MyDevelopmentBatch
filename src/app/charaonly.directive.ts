import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharaonly]'
})
export class CharaonlyDirective {

  constructor( private elementRef :ElementRef) {}
  
 @HostListener ('input' , ["$event"] )
 onInputBoxChange(){
       var onInputBoxInitialValue = this.elementRef.nativeElement.value;
       this.elementRef.nativeElement.value = onInputBoxInitialValue.replace(/[^a-zA-Z]*/g, '') 
 }
}
