import { Component, OnInit } from '@angular/core';
import *  as firebase from 'firebase';
import { Manthro } from './../manthro.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [Manthro]
})
export class UserComponent implements OnInit {
  private user;
  public basket: any[] = [];
  public totalPrice: number = 0;
  public currentPrice: any[] = [];
  public popup: boolean = false;
  public newProduct;
  constructor(public manthro: Manthro) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    if(this.user != null) {
      if(this.user.basket != undefined) {
        for(let i = 0; i < this.user.basket.length; i++) {
          if(this.basket.length < this.user.basket.length) {
            let inBasket = this.manthro.getProductById(this.user.basket[i].productKey);
            this.manthro.getProductPrice(this.user.basket[i].productKey).subscribe(lastData => {
              this.newProduct = {
                product : inBasket,
                quantity : this.user.basket[i].quantity,
                subtotalPrice: lastData.$value * this.user.basket[i].quantity
              }
              let checker = false;
              for(let k = 0; k < this.basket.length; k++) {
                if(this.newProduct.product.$ref.path.o[1] === this.basket[k].product.$ref.path.o[1]) {
                  checker = true;
                }
              }
              if(checker === false) {
                this.basket.push(this.newProduct);
                this.currentPrice.push(lastData.$value * this.user.basket[i].quantity);
                this.totalPrice = this.currentPrice.reduce((a, b) => a + b, 0);
              }
            });
          }
        }
      }
    }
  }

  checkout() {
    if(this.basket.length != 0) {
      delete this.user.basket;
      this.basket = [];
      this.totalPrice = 0;
      this.popup = true;
    }
  }
}
