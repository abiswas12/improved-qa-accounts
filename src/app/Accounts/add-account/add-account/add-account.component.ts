import { IAccount } from '../../account';
import { AccountService } from '../../account.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit, OnDestroy {

  id: number;
  account: IAccount;
  
  accountForm: FormGroup;
  private sub: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private _accountService: AccountService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.accountForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ])
    });
    if (this.id) { // Edit Page
      this._accountService.getAccountById(this.id).subscribe(
        account => {
            this.id = account.id;
            this.accountForm.patchValue({
            firstName: account.accountNo,
            lastName: account.firstName,
            email: account.lastName,
          });
         },
        error => {
          console.log(error);
         }
      );
    }
  }
  ngOnDestroy(): void {this.sub.unsubscribe(); }
  onSubmit() {
    if (this.accountForm.valid) {
      if (this.id) {
        let account: IAccount = new IAccount(this.id,
          this.accountForm.controls['acountNo'].value,
          this.accountForm.controls['firstName'].value,
          this.accountForm.controls['lastName'].value);
          this._accountService.updateAccount(account).subscribe();
      } else {
        let account: IAccount = new IAccount(null,
          this.accountForm.controls['acountNo'].value,
          this.accountForm.controls['firstName'].value,
          this.accountForm.controls['lastName'].value);
          this._accountService.saveAccount(account).subscribe();
      }
      this.accountForm.reset();
      this.router.navigate(['/accounts']);
    }
  }
  returnToList() {
    this.router.navigate(['/accounts']);
  }
}
