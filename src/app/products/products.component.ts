import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Manthro } from './../manthro.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';
import *  as firebase from 'firebase';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [Manthro]
})
export class ProductsComponent implements OnInit {
  public category;
  public productId: string;
  public productToDisplay;
  private user;
  public popup;
  public quantity: number = 1;
  public wasInBasket: boolean = false;
  public newProduct;
  constructor(private route: ActivatedRoute, private manthro: Manthro, private location: Location) { }
  public display: boolean = null;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.productId = urlParameters['id'];
    });
    this.productToDisplay = this.manthro.getProductById(this.productId);
    this.category = window.location;
  }

  sliderMove(input) {
    this.display = input;
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }
  removeConfirmation() {
    this.popup = null;
  }
  getQuantity() {
    console.log(this.quantity);
  }
  addToBasket() {
    if(this.user === null) {
      alert("Please sign into account to add to basket");
    } else {
      if(this.user.basket != undefined) {
        for (let i = 0; i < this.quantity; i++) {
          if(this.user.basket[i].productKey === this.productId) {
            for(let j = 0; j < this.quantity; j++) {
              this.user.basket[i].quantity++;
            }
            console.log(this.user.basket[i].quantity);
            this.wasInBasket = true;
            break;
          } else {
            this.newProduct = {
              productKey : this.productId,
              quantity : this.quantity
            }
          }
        }
        if(this.wasInBasket) {
          this.wasInBasket = false;
        } else {
          this.user.basket.push(this.newProduct);
        }
      } else {
        let addedProduct = {
          productKey : this.productId,
          quantity : this.quantity
        }
        this.user.basket = [addedProduct];
      }
      this.popup = this.productId;
      setTimeout((() => {
        this.removeConfirmation();
      }), 3000);
    }
  }

}
