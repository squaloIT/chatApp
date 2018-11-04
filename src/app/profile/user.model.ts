export class User {
  public username: string;
  public email: string;
  public password: string;
  public friends: User[];

  constructor(username: string, email: string, password: string, friends: User[]) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.friends = friends;
  }
}
