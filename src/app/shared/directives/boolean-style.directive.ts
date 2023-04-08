import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBooleanStyle]'
})
export class BooleanStyleDirective implements OnInit{
  @Input('appBooleanStyle') value!: boolean

  constructor(
    private element: ElementRef,
    private rederer: Renderer2
  ) {
  }
  
  ngOnInit(): void {
    this.rederer.setStyle(
      this.element.nativeElement, 
      'color',
      this.value ? '#08FF3D' : '#FF0101'
      )
  }

}
