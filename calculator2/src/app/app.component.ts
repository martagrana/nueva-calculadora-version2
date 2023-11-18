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

  operador1: number = 0;
  operador2: number = 0;

  operar(operador: string) {
    if (this.operador1 === 0 && this.operador2 === 0) {
      this.advertencia = 'Introduce dos números';
    }
    else if (operador === '+') {
      console.log('vamos a sumar');
      this.resultado = this.sumar(this.operador1, this.operador2);
    } else if (operador === '-') {
      console.log('vamos a restar');
      this.resultado = this.restar(this.operador1, this.operador2);
    }
    else if (operador === '*') {
      console.log('vamos a multiplicar');
      this.resultado = this.multiplicar(this.operador1, this.operador2);
    }
    else if (operador === '/') {
      console.log('vamos a dividir');
      this.resultado = this.dividir(this.operador1, this.operador2);
    }
    else {
      console.log('operador desconocido');
    }
  }

  sumar(sumando1: number, sumando2: number): number {
    return sumando1 + sumando2;
  }
  restar(minuendo: number, sustraendo: number): number {
    return minuendo - sustraendo;
  }
  multiplicar(factor1: number, factor2: number): number {
    return factor1 * factor2;
  }
  dividir(dividendo: number, divisor: number): number {
    if (divisor === 0) {
      console.log('No se puede hacer la división');
      this.advertencia = 'No se puede hacer la división';
      return NaN
    }
    else {
      return Math.round((dividendo / divisor) * 100) / 100;
    }
  }
}



