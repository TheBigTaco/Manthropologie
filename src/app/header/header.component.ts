import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public display: boolean = false;
  constructor() { }

  ngOnInit() {

  }

  // onResize(event) {
  //   alert("hi");
  //   let screenWidth = (window.screen.width);
  //   if(screenWidth > 1025) {
  //     this.display = true;
  //   }
  // }

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
