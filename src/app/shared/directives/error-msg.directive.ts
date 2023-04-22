import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  htmlElement: ElementRef<HTMLElement>

  constructor(private el: ElementRef<HTMLElement> ){

    this.htmlElement = el;

  }

  private _colorDefault: string = 'pink'
  private _labelDefault: string = 'Este campo es Obligatorio'

  @Input() set color(valor:string ) {

              this._colorDefault = valor
              this.setColor()
         }

  @Input() set label(valor:string) {

            this._labelDefault = valor
            this.setTexto()
  }

  @Input() set valido(valor:boolean) {
      if (valor){
        this.htmlElement.nativeElement.classList.add('hidden')
      }else{
        this.htmlElement.nativeElement.classList.remove('hidden')

      }
  }



  ngOnChanges(changes: SimpleChanges): void {
   /*   console.log(changes);

    if (changes['label']){
      const newLabel = changes['label'].currentValue
      this.htmlElement.nativeElement.innerText = newLabel
    }
    if (changes['color']){
      const newColor = changes['color'].currentValue
      this.htmlElement.nativeElement.style.color = newColor
    }
 */
  }

  ngOnInit(): void {
    this.setColor();
    this.setTexto();
    this.addClass()
  }

  setColor():void{
    this.htmlElement.nativeElement.style.color = this._colorDefault
  }

  setTexto():void{
    this.htmlElement.nativeElement.innerText = this._labelDefault
  }

  addClass():void{
    this.htmlElement.nativeElement.classList.add('form-text', 'shadow')
  }
}
