import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  constructor(private elemant: ElementRef) {
    elemant.nativeElement.style.color = 'red'
   }

  
}
