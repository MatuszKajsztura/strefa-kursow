import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userShortcut'
})
export class UserShortcutPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    return value.charAt(0) + '.';
  }

}
