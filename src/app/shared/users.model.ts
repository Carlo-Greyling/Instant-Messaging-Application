export class Users {
  public name: string;
  public status: string;
  public profilePicture: string;

  constructor(name: string, status: string, profilePicture: string) {
    this.name = name;
    this.status = status;
    this.profilePicture = profilePicture;
  }
}
