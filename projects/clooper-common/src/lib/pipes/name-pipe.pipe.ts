import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePipe'
})
export class NamePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
