import { Component } from '@angular/core';
import { AccountsListComponent } from './Accounts/account-list/account-list.component';
import { AccountService } from './Accounts/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  appTitle = 'Accounts Application';
}
