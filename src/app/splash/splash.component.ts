import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
  public category;

  ngOnInit() {
    this.category = window.location;
  }

}


//https://stackoverflow.com/questions/34881401/style-html-body-from-web-component-angular-2
