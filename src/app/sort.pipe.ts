import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, sortInput: any): any {
    if(sortInput === "low-high") {
      let output = value.sort((n1, n2) => {
        if (n1.price > n2.price) {
          return 1;
        }

        if (n1.price < n2.price) {
          return -1;
        }

        return 0;
      });
      return output;
    } else {
      let output = value.sort((n1, n2) => {
        if (n1.price > n2.price) {
          return -1;
        }

        if (n1.price < n2.price) {
          return 1;
        }

        return 0;
      });
      console.log(output);
      return output;
    }
  }

}
