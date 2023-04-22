import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

constructor( private fb:FormBuilder ){}

textoPersonalizado: string = 'debe ingresar este campo';
color: string = 'green'

miFormulario: FormGroup = this.fb.group({
  nombre: ['', Validators.required]
})

hasError(field: string):boolean{
  return this.miFormulario.get(field)?.invalid || false
}

cambiarTexto(){

  const texto = 'lorem fistrum de la cosa maravilla que esta hasa las narices jaelEspinosa'
  const textoArray = texto.split(' ');
  const rIndex = Math.floor((Math.random() * ((textoArray.length-1) - 0 + 1)) + 0)

  this.textoPersonalizado = textoArray[rIndex]

}

cambiarColor(){
  const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  this.color = color
}
}
