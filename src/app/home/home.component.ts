import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = 'Greg';
  tabs: string[] = ['home', 'profile', 'contact'];
  selectedTab = this.tabs[0];

  constructor() { }

  ngOnInit() {
  }

}
