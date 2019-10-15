export class Users {
  public name: string;
  public status: string;
  public profilePicture: string;
  public onlineIcon: string;
  public userID: string;
  public openChatUserIds: string[];

  constructor(userID: string, name: string, status: string, profilePicture: string, onlineIcon: string, openChatUserIds: string[]) {
    this.userID = userID;
    this.name = name;
    this.status = status;
    this.profilePicture = profilePicture;
    this.onlineIcon = onlineIcon;
    this.openChatUserIds = openChatUserIds;
  }
}
