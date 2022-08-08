import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringreverse'
})
export class StringreversePipe implements PipeTransform {

  transform(value: string): string {
    let reverse = ''
    for(let i of value){
      reverse = i + reverse
    }
    return reverse;
  }

}
