import { IAccount } from '../account';
import { AccountService } from '../account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-acc-list',
  templateUrl: './account-list.component.html',
})

export class AccountsListComponent implements OnInit {
  pageTitle = 'Account List';
  protected accounts: IAccount[];
  constructor(private _router: Router,
    private _accountService: AccountService) {}
  ngOnInit(): void {
    this.getAccounts();
  }
  getAccounts() {
    this._accountService.getAccounts().subscribe(
      accounts => {
        this.accounts = accounts;
      },
      err => {
        console.log(err);
      }
    );
  }
  addAccount() {
    this._router.navigate(['/accounts/new']);
  }
  editAccount(account: IAccount) {
    if (account) {
      this._router.navigate(['accounts/view/:id', account.id]);
    }
  }
  deleteAccount(account: IAccount) {
    if (account) {
      this._accountService.deleteAccountById(account.id).subscribe(
        res => {
          this.getAccounts();
          this._router.navigate(['/accounts']);
          console.log('done');
        }
      );
    }
  }
}
