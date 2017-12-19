import { Component, OnInit } from '@angular/core';
import { sha3_512 } from 'js-sha3';
import { User } from './../user.model';
import { Manthro } from './../manthro.service';
import *  as firebase from 'firebase'; //THIS IS THE DUMBEST THING WHY DID I NEED THIS I HATE EVERYTHING UGH

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
  loggedInUser;
  admin: boolean = false;
  constructor(private userService: Manthro) {
    firebase.auth().onAuthStateChanged(function(user){
      if(user) {
        this.loggedInUser = user;
      } else {
        this.loggedInUser = null;
      }
      console.log(this.loggedInUser);
      if(this.loggedInUser != null && this.loggedInUser.uid === "uWGfalcH57Ws49XyYTKzVZKFGU82") {
        this.admin = true;
      }
    })
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
      alert("You're signed out");
    }).catch(function(error) {
      alert("signout error, please try again");
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
    let screenWidth = (window.screen.width);
    if(screenWidth > 1025) {
      if(oneway) {
        this.display = false;
      } else {
        this.display = !this.display;
      }
    } else {
      this.display = true;
    }
  }

}
