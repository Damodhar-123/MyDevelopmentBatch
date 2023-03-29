import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, searchBoxAmount: number): any{
  if (!value) {
    return null;
  }
  return value * 81;
  };
}
