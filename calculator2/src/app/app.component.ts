import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator2';

  resultado: number = 0;
  advertencia: string = 'hola'

  numeros = {
    numero1: 0,
    numero2: 0,
  };

  sumar() {
    if (this.numeros.numero1 === 0 && this.numeros.numero2 === 0) {
      this.advertencia = 'Introduce dos números';
    } else {
      this.resultado = this.numeros.numero1 + this.numeros.numero2;
    };
  }

  restar() {
    if (this.numeros.numero1 === 0 && this.numeros.numero2 === 0) {
      this.advertencia = 'Introduce dos números';
    } else {
      this.resultado = this.numeros.numero1 - this.numeros.numero2;
    };
  }

  multiplicar() {
    if (this.numeros.numero1 === 0 && this.numeros.numero2 === 0) {
      this.advertencia = 'Introduce dos números';
    } else {
      this.resultado = this.numeros.numero1 * this.numeros.numero2;
    };
  }

  dividir() {
    if (this.numeros.numero1 === 0 && this.numeros.numero2 === 0) {
      this.advertencia = 'Introduce dos números';
    } else {
      this.resultado = this.numeros.numero1 / this.numeros.numero2;
      this.resultado = Number(this.resultado.toFixed(2));
    };
  }
}
