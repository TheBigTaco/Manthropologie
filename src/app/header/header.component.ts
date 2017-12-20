import { Component, OnInit } from '@angular/core';
import { sha3_512 } from 'js-sha3';
import { Manthro } from './../manthro.service';
import *  as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [Manthro]
})
export class HeaderComponent implements OnInit {
  public display: boolean = false;
  username: string;
  password: string;
  newUsername: string;
  newPassword: string;
  loggedInUser: Observable<firebase.User>;
  admin: boolean = false;
  private user;
  constructor(public manthro: Manthro) {

  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    if(this.user != null && this.user.uid === "uWGfalcH57Ws49XyYTKzVZKFGU82") {
      this.admin = true;
    }
  }

  ngOnInit() {

  }

  login() {
    let hash = sha3_512(this.password);
    firebase.auth().signInWithEmailAndPassword(this.username, hash);
    this.password = "";
    this.username = "";
  }

  logout() {
    if(this.admin) {
      this.admin = false;
    }
    firebase.auth().signOut().then(function(){

    }).catch(function(error) {

    })
  }

  createAccount() {
    let hash = sha3_512(this.newPassword);
    firebase.auth().createUserWithEmailAndPassword(this.newUsername, hash).catch(function(error) {
      console.log(error.message);
    })
    this.newUsername = "";
    this.newPassword = "";
  }

  categoryClick(oneway) {
    let screenWidth = (window.innerWidth);
    if(screenWidth < 1025) {
      if(oneway) {
        this.display = false;
      } else {
        this.display = !this.display;
      }
    } else {
      this.display = false;
    }
  }

}
