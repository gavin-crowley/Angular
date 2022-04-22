import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef, private renderer: Renderer2) {
    el.nativeElement.style.backgroundColor = 'green';

    this.renderer.addClass(el.nativeElement, 'test')
  }

}
