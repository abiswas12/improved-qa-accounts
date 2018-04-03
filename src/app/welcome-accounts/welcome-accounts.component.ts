import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-accounts',
  templateUrl: './welcome-accounts.component.html',
  styleUrls: ['./welcome-accounts.component.css']
})
export class WelcomeAccountsComponent implements OnInit {
  title = 'Accounts Application';
  constructor() { }

  ngOnInit() {
  }

}
