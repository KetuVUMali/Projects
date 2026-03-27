import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplication',
  standalone: true
})
export class MultiplicationPipe implements PipeTransform {

  transform(value: number, factor: number): number {
    // Multiply the input value by the factor
    return value * factor;
  }

}
