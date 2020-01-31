import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertCurrency'
})
export class ConvertCurrencyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value / 71.49;
  }

}
