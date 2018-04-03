import { AccountsListComponent } from './Accounts/account-list/account-list.component';
import { AccountService } from './Accounts/account.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AddAccountComponent } from './Accounts/add-account/add-account/add-account.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeAccountsComponent } from './welcome-accounts/welcome-accounts.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountsListComponent,
    AddAccountComponent,
    WelcomeAccountsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'accounts', component: AccountsListComponent },
      { path: 'accounts/new', component: AddAccountComponent },
      { path: 'accounts/view/:id', component: AddAccountComponent },
      { path: 'accounts/welcome', component: WelcomeAccountsComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
