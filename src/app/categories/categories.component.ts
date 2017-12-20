import { Component, OnInit } from '@angular/core';
import { Product } from './../product.model';
import { Router } from '@angular/router'
import { Manthro } from './../manthro.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [Manthro]
})
export class CategoriesComponent implements OnInit {
  public category;
  public products;
  public priceWanted: string = "all";
  public priceSorted: string = "low-high";
  constructor(public manthro: Manthro, public router: Router) {
    this.products = manthro.getProducts();
  }

  ngOnInit() {
    this.category = window.location;
  }

  goToDetailPage(clickedProduct) {
    this.router.navigate(['product', clickedProduct.$key]);
  }
}
