import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective implements OnInit {
  @Input('appFontSize') value!: number

  constructor(
    private element: ElementRef,
    private rederer: Renderer2
  ) {

   }

   ngOnInit(): void {
    this.rederer.setStyle(
      this.element.nativeElement, 
      'font-size',
      this.value + 'px'
      )
  }
}
