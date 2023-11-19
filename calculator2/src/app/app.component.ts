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
    else {
      switch (operador) {
        case '+': {
          console.log('vamos a sumar');
          this.resultado = this.sumar(this.operador1, this.operador2);
          break;
        }
        case '-': {
          console.log('vamos a restar');
          this.resultado = this.restar(this.operador1, this.operador2);
          break;
        }
        case '*': {
          console.log('vamos a multiplicar');
          this.resultado = this.multiplicar(this.operador1, this.operador2);
          break;
        }
        case 'dividir':
        case '/': {
          this.resultado = this.dividir(this.operador1, this.operador2);
          if (Number.isNaN(this.resultado)) {
            console.log('No se puede hacer la división');
            this.advertencia = 'No se puede hacer la división';
          }
          break;
        }
        default: {
          console.log('operador desconocido');
          break;
        }
      }
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
      return NaN;
    }
    else {
      return Math.round((dividendo / divisor) * 100) / 100;
    }
  }
}



