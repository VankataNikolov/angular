import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countDown'
})
export class CountDownPipe implements PipeTransform {

  transform(value: number, start: number): number {
    let result = start - value;
    return result >= 0 ? result : 0;
  }

}
