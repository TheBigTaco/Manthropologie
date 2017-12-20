import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public display: boolean = null;

  constructor() { }

  ngOnInit() {
  }

  sliderMove(input) {
    if(input === this.display){
      this.display = null;
    }else{
      this.display = input;
    }
  }

}
