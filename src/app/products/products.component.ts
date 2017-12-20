import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Manthro } from './../manthro.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [Manthro]
})
export class ProductsComponent implements OnInit {

  public display: boolean = null;

  public category;
  public productId: string;
  public productToDisplay;
  constructor(private route: ActivatedRoute, private manthro: Manthro, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.productId = urlParameters['id'];
     console.log(urlParameters['id']);
    });
    this.productToDisplay = this.manthro.getProductById(this.productId);
    this.category = window.location;
    console.log(this.productId);
  }

  sliderMove(input) {
    if(input === this.display){
      this.display = null;
    }else{
      this.display = input;
    }
  }

}
