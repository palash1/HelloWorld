import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
    @Input('myHighlight') highlightColor: string="red";

    constructor(public el: ElementRef) {
       el.nativeElement.style.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseenter') 
    onMouseEnter() {
        this.highlight(this.highlightColor);
      }
      
      @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
      }
      
      private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
        console.log(this.highlightColor);
      }
}