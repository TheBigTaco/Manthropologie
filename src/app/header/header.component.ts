import { Component, OnInit } from '@angular/core';
import { sha3_512 } from 'js-sha3';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public display: boolean = false;
  username: string;
  password: string;
  newUsername: string;
  newPassword: string;
  constructor() { }

  ngOnInit() {

  }

  login() {
    console.log(this.username, this.password);
    let hash = sha3_512(this.password);
    console.log(hash);
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
