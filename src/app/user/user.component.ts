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
  constructor(public manthro: Manthro) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    if(this.user != null) {
      if(this.user.basket != undefined) {
        for(let i = 0; i < this.user.basket.length; i++) {
          if(this.basket.length < this.user.basket.length) {
            let inBasket = this.manthro.getProductById(this.user.basket[i]);
            this.basket.push(inBasket);
            let currentPrice;
            this.manthro.getProductPrice(this.user.basket[i]).subscribe(lastData => {
              this.currentPrice.push(lastData.$value);
              this.totalPrice = this.currentPrice.reduce((a, b) => a + b, 0);
            });
          }
        }
      }
    }
  }
  checkout() {
    if(this.basket.length != 0) {
      this.user.basket = [];
      this.basket = [];
      this.totalPrice = 0;
      this.popup = true;
    }
  }
}
