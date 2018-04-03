export class IAccount {
  id: number;
  accountNo: string;
  firstName: string;
  lastName: string;
    constructor(id: number, accountNo: string, firstName: string, lastName: string) {
    this.id = id;
    this.accountNo = accountNo;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
