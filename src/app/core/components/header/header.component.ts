import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() { }

  login() {
    window.localStorage.setItem('user', 'true');
  }
}
