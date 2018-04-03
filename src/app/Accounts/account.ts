export class IAccount {
  id: number;
  accountNo: string;
  firstName: string;
  lastName: string;
    constructor(id: number, firstName: string, lastName: string, email: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
