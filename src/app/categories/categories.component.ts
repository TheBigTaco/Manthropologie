import { Component, OnInit } from '@angular/core';
import { Product } from './../product.model';
import { Router } from '@angular/router';
import { Manthro } from './../manthro.service';
import *  as firebase from 'firebase';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [Manthro]
})
export class CategoriesComponent implements OnInit {
  public category;
  public products;
  public user;
  public popup;
  public priceWanted: string = "all";
  public priceSorted: string = "low-high";
  public wasInBasket: boolean = false;
  public newProduct;
  constructor(public manthro: Manthro, public router: Router) {
    this.products = manthro.getProducts();
  }

  ngOnInit() {
    this.category = window.location;
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }

  goToDetailPage(clickedProduct) {
    this.router.navigate(['product', clickedProduct.$key]);
  }

  removeConfirmation() {
    this.popup = null;
  }
  addToBasket(product) {
    if(this.user === null) {
      alert("Please sign into account to add to basket");
    } else {
      if(this.user.basket != undefined) {
        for(let i = 0; i < this.user.basket.length; i++) {
          if(this.user.basket[i].productKey === product) {
            this.user.basket[i].quantity++;
            this.wasInBasket = true;
            break;
          } else {
            this.newProduct = {
              productKey : product,
              quantity : 1
            }
          }
        }
        if(this.wasInBasket) {
          this.wasInBasket = false;
        } else {
          this.user.basket.push(this.newProduct);
        }
      } else {
        let newProduct = product;
        let addedProduct = {
          productKey : product,
          quantity : 1
        }
        this.user.basket = [addedProduct];
      }
      this.popup = product;
      setTimeout((() => {
        this.removeConfirmation();
      }), 3000);
    }
  }

}
