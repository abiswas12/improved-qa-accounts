import { IAccount } from './account';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountService {
  private API = '//localhost:8080';
  private ACCOUNT_API = this.API + '/api/accounts';
  constructor(private http: HttpClient) {
  }

  getAccounts(): Observable<IAccount[]> {
    return this.http.get(this.ACCOUNT_API)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getAccountById(id: number): Observable<IAccount> {
    return this.http.get(this.ACCOUNT_API + '/' + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error'));
  }
  saveAccount(account: IAccount): Observable<IAccount> {
    return this.http.post(this.ACCOUNT_API + 'accounts', account)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  deleteAccountById(id: number): Observable<boolean> {
    return this.http.delete(this.API + '/' + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  updateAccount(account: IAccount): Observable<IAccount> {
    return this.http.put(this.API, account)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
