import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkImg'
})
export class CheckImgPipe implements PipeTransform {

  transform(value: string, defaultImg: string): unknown {
    return value.length === 0 ? defaultImg : value;
  }

}
