import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToInr',
  standalone: true
})
export class UsdToInrPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;

  // <p>{{20 | usdToInr}}</p>
  // transform(value: number, ...args: unknown[]): unknown {
  //   return value*80;
  // }

  transform(value: number, ...args: number[]): unknown {
    const [x] = args;
    return value*x;
  }

}
