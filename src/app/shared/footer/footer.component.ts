import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  formFooter: FormGroup = this.fb.group(
    {
      nombre: ['', [ Validators.required, Validators.minLength(3) ] ],
      mensaje: ['', [ Validators.required, Validators.maxLength(300), Validators.minLength(0) ]]
    }
  )

  ngOnInit(): void {
  }

  enviar() {
    let mensaje = "Hola Pablo, mi nombre es " + this.titleCase(this.formFooter.controls['nombre'].value) + " y te contacto desde tu Portafolio: " + this.formFooter.controls['mensaje'].value
    window.open(`https://wa.me/+56978569972?text=` + mensaje, '_blank')
  }

  titleCase(texto: String) {
    if(!texto) return texto;
    return texto[0].toUpperCase() + texto.substr(1).toLowerCase()
  }

}
