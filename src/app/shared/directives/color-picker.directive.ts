import { Directive, ElementRef, Input, Renderer2,OnInit } from '@angular/core';

@Directive({
  selector: '[appColorPicker]'
})
export class ColorPickerDirective implements OnInit{
  @Input('appColorPicker') value!: number

  constructor(
    private element: ElementRef,
    private rederer: Renderer2
  ) {

   }

   ngOnInit(): void {
    this.rederer.setStyle(
      this.element.nativeElement, 
      'color',
      this.value > 10 ? '#42ed65' : '#f71b1b'
    )
  }

}
