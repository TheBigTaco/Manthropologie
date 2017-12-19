import { Component, OnInit } from '@angular/core';
import { sha3_512 } from 'js-sha3';
import { User } from './../user.model';
import { Manthro } from './../manthro.service';

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
  loggedInUser: string = null;
  constructor(private userService: Manthro) { }

  ngOnInit() {

  }

  login() {
    console.log(this.username, this.password);
    let hash = sha3_512(this.password);
    console.log(hash);
  }

  createAccount() {
    let hash = sha3_512(this.newPassword);
    let user = new User(this.newUsername, hash);
    this.newUsername = "";
    this.newPassword = "";
    this.userService.addUser(user);
  }

  categoryClick(oneway) {
    let screenWidth = (window.screen.width);
    console.log(screenWidth);
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
