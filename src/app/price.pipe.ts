import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: any, price: any): any {
    let output = [];
    if(price === "all") {
      return value;
    } else if (price === "low") {
      for(let i = 0; i < value.length; i++) {
        if(parseInt(value[i].price) < 50) {
          output.push(value[i]);
        }
      }
    } else if (price === "mid") {
      for(let i = 0; i < value.length; i++) {
        if(parseInt(value[i].price) >= 50 && parseInt(value[i].price) <= 100) {
          output.push(value[i]);
        }
      }
    } else {
      for(let i = 0; i < value.length; i++) {
        if(parseInt(value[i].price) > 100) {
          output.push(value[i]);
        }
      }
    }
    return output;
  }

}
