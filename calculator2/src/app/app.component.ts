import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator2';

  resultado: number = 0;
  advertencia: string = '¿Que operación deseas realizar?'

  numeros = {
    numero1: 0,
    numero2: 0,
  };

  operar(operador: string) {
    if (operador === '+') {
      console.log('vamos a sumar');
      this.resultado = this.sumar(this.numeros.numero1, this.numeros.numero2);
    } else if (operador === '-') {
      console.log('vamos a restar');
    }
    else {
      console.log('operador desconocido');
    }

  }

  sumar(operando1: number, operando2: number): number {
    return operando1 + operando2;

  }

  restar() {
    if (this.numeros.numero1 === 0 && this.numeros.numero2 === 0) {
      this.advertencia = 'Introduce dos números';
    } else {
      this.resultado = this.numeros.numero1 - this.numeros.numero2;
      this.advertencia = 'Operación realizada';
    };
  }

  multiplicar() {
    if (this.numeros.numero1 === 0 && this.numeros.numero2 === 0) {
      this.advertencia = 'Introduce dos números';
    } else {
      this.resultado = this.numeros.numero1 * this.numeros.numero2;
      this.advertencia = 'Operación realizada';
    };
  }

  dividir() {
    if (this.numeros.numero1 === 0 && this.numeros.numero2 === 0) {
      this.advertencia = 'Introduce dos números';
    } else {
      this.resultado = this.numeros.numero1 / this.numeros.numero2;
      this.resultado = Number(this.resultado.toFixed(2));
      this.advertencia = 'Operación realizada';
    };
  }
}
