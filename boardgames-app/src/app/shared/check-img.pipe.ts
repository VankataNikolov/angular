import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkImg'
})
export class CheckImgPipe implements PipeTransform {

  transform(value: string, defaultImg: string): string {
    return value.trim().length === 0 ? defaultImg : value;
  }

}
