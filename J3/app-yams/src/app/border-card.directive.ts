import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  
  @Input('appBorderCard') borderColor: string = '';

  constructor(private el : ElementRef) { }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('yellow', 2);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('blue', 2);
  }

  private setBorder(color: string, px: number){
    this.el.nativeElement.style.border = 'color', 2;
  }
}
