export class employee {
  id!: number;
  firstname!: string;
  lastname!: string;
  email!: string;
  active!: boolean;

  contsructor(id: number, firstName: string, lastName: string, emailId: string, active: boolean) {
    this.id = id;
    this.firstname = firstName;
    this.lastname = lastName;
    this.email = emailId;
    this.active = active;
  }

}
