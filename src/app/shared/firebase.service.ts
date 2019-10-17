import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentData} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import { Messages } from './messages.model';
import { Users } from './users.model';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public openChatUserIds: string[] = [];
  private userProfilesArr: Users[] = [];
  private messagesArr: Messages[] = [];
  public ChatIdFinal = '';

  constructor(public db: AngularFirestore, private snackBar: MatSnackBar,
              private router: Router) {}

// Just to give info the application user
openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 2000,
  });
}

  userSignIn(userId, password) {
    let myName: string;
    let myStatus: string;
    let myProfilePicture: string;
    let myOnlineIcon: string;
    let myUserID: string;
    let myPassword: string;
    let myChatsIdArr: string[] = []; // 0123456789_9876543210
    let myOpenChatUserIds: string[] = []; // 0123456789
    let logged = false;
    const usersRef = this.db.collection('users').doc(userId);
    const getDoc = usersRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('not found'); // add toastr notification
          this.openSnackBar('Username or Password incorrect', 'close');
        } else {
          if (doc.data().password === password) {
            myName = doc.data().name;
            myStatus = doc.data().status;
            myProfilePicture = doc.data().profilePicture;
            myOnlineIcon = doc.data().onlineIcon;
            myUserID = doc.data().userId;
            myPassword = doc.data().password;
            myChatsIdArr = doc.data().ChatsIdArr;
            myOpenChatUserIds = doc.data().openChatUserIds;

            myStatus = 'Online';
            myOnlineIcon = 'online_icon';

            const data = {
              name: myName,
              status: myStatus,
              profilePicture: myProfilePicture,
              onlineIcon: myOnlineIcon,
              userId: myUserID,
              password: myPassword,
              ChatsIdArr: myChatsIdArr,
              openChatUserIds: myOpenChatUserIds,
            };

            // const usersRef = this.db.collection('users').doc(myId);
            usersRef.set(data);
            this.router.navigate(['chatWindow']);
            localStorage.setItem('currentUserId', userId);
            logged = true;
          }else{
            this.openSnackBar('Username or Password incorrect', 'close');
          }
        }
      }).catch(err => {
        console.log('Error', err); // add toastr notification
        this.openSnackBar('Username or Password incorrect', 'close');
      });
  }
  // TODO: Sign up
  createUser(userId, name, password) {
    const base64ProPic = localStorage.getItem('base64PP');
    const ChatsIdArr: string[] = []; // 0123456789_9876543210
    const openChatUserIds: string[] = []; // 0123456789
    const data = {
      name,
      status: 'online',
      profilePicture: base64ProPic,
      onlineIcon: 'online_icon',
      userId,
      password,
      ChatsIdArr,
      openChatUserIds
    };
    const usersRef = this.db.collection('users').doc(userId);
    usersRef.set(data);
  }
  /*createUser(userId, name, password) {
    const data = {
      name,
      status: 'null',
      profilePicture: 'null',
      onlineIcon: 'null',
      userId,
      password
    };
    const usersRef = this.db.collection('users').doc(userId);
    usersRef.set(data);
  }*/

  getUserProfiles(): Users[] {
    const userRef = this.db.collection('users').doc(localStorage.getItem('currentUserId'));
    const getDoc = userRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('not found'); // add toastr notification
        } else {
          this.openChatUserIds = doc.data().openChatUserIds;
          for (let i = 0; i < this.openChatUserIds.length; i++) {
            const ref = this.db.collection('users').doc(this.openChatUserIds[i]);
            const document = ref.get().toPromise()
              .then(udoc => {
                if (!udoc.exists) {
                  console.log('not found'); // add toastr notification

                } else {
                  this.userProfilesArr.push(new Users(
                    udoc.data().userId,
                    udoc.data().name,
                    udoc.data().status,
                    udoc.data().profilePicture,
                    udoc.data().onlineIcon,
                    doc.data().openChatUserIds));
                }
              }).catch(err => {
                console.log('Error', err); // add toastr notification
                this.openSnackBar('Oops something went wrong, user not found', 'close');
              });
          }
        }
      }).catch(err => {
        console.log('Error', err); // add toastr notification
        this.openSnackBar('Oops something went wrong', 'close');
      });
    console.log(this.userProfilesArr);
    return this.userProfilesArr;
  }

  getMessages(friendId: string): Messages[] {
    let arrTimeArray: string[] = [];
    let msgContentsArray: string[] = [];
    let msgIdArray: string[] = [];
    let msgTypeArray: string[] = [];
    const ChatIDV1 = localStorage.getItem('currentUserId') + '_' + friendId;

    const chatsRef = this.db.collection('chats').doc(ChatIDV1);
    const getDoc = chatsRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('not found'); // add toastr notification

          this.messagesArr = this.getMessagesWithOtherChatId(friendId);
        } else {
          arrTimeArray = doc.data().arrivalTime;
          msgContentsArray = doc.data().msgContents;
          msgIdArray = doc.data().msgId;
          msgTypeArray = doc.data().msgType;
          // Messages(msgID: number, msgContents: string, msgType: string, arrivalTime: string)
          for (let i = 0; i < msgIdArray.length; i++) {
            this.messagesArr.push(new Messages(msgIdArray[i], msgContentsArray[i], msgTypeArray[i], arrTimeArray[i]));
          }
        }
      }).catch(err => {
        console.log('Error', err); // add toastr notification
        this.openSnackBar('Oops something went wrong', 'close');
      });
    console.log(this.messagesArr);
    return this.messagesArr;
  }

  getMessagesWithOtherChatId(friendId): Messages[] {
    let arrTimeArray: string[] = [];
    let msgContentsArray: string[] = [];
    let msgIdArray: string[] = [];
    let msgTypeArray: string[] = [];
    const ChatIDV2 = friendId + '_' + localStorage.getItem('currentUserId');

    const chatsRef = this.db.collection('chats').doc(ChatIDV2);
    const getDoc = chatsRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          const data = {
            arrivalTime: arrTimeArray,
            msgContents: msgContentsArray,
            msgId: msgIdArray,
            msgType: msgTypeArray
          };

          chatsRef.set(data);
        } else {
          arrTimeArray = doc.data().arrivalTime;
          msgContentsArray = doc.data().msgContents;
          msgIdArray = doc.data().msgId;
          msgTypeArray = doc.data().msgType;
          // Messages(msgID: number, msgContents: string, msgType: string, arrivalTime: string)
          for (let i = 0; i < msgIdArray.length; i++) {
            this.messagesArr.push(new Messages(msgIdArray[i], msgContentsArray[i], msgTypeArray[i], arrTimeArray[i]));
          }
        }
      }).catch(err => {
        console.log('Error', err); // add toastr notification
        this.openSnackBar('Oops something went wrong', 'close');
      });
    console.log(this.messagesArr);
    return this.messagesArr;
  }

  newMessage(newMessage: Messages, friendId) {
    let arrTimeArray: string[] = [];
    let msgContentsArray: string[] = [];
    let msgIdArray: string[] = [];
    let msgTypeArray: string[] = [];

    const ChatIDV1 = localStorage.getItem('currentUserId') + '_' + friendId;
    const chatRef = this.db.collection('chats').doc(ChatIDV1);
    const getDoc = chatRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('not found'); // add toastr notification

          this.newMessageWithOtherChatId(newMessage, friendId);
        } else {
          arrTimeArray = doc.data().arrivalTime;
          msgContentsArray = doc.data().msgContents;
          msgIdArray = doc.data().msgId;
          msgTypeArray = doc.data().msgType;

          arrTimeArray.unshift(newMessage.arrivalTime);
          msgContentsArray.unshift(newMessage.msgContents);
          msgIdArray.unshift(newMessage.msgID);
          msgTypeArray.unshift(newMessage.msgType);

          const data = {
            arrivalTime: arrTimeArray,
            msgContents: msgContentsArray,
            msgId: msgIdArray,
            msgType: msgTypeArray
          };

          chatRef.set(data);
        }
      }).catch(err => {
        console.log('Error', err); // add toastr notification
        this.openSnackBar('Oops something went wrong', 'close');
      });
  }

  newMessageWithOtherChatId(newMessage: Messages, friendId) {
    let arrTimeArray: string[] = [];
    let msgContentsArray: string[] = [];
    let msgIdArray: string[] = [];
    let msgTypeArray: string[] = [];

    const ChatIDV2 = friendId + '_' + localStorage.getItem('currentUserId');
    const chatRef = this.db.collection('chats').doc(ChatIDV2);
    const getDoc = chatRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('not found'); // TODO: Create chat id
        } else {
          arrTimeArray = doc.data().arrivalTime;
          msgContentsArray = doc.data().msgContents;
          msgIdArray = doc.data().msgId;
          msgTypeArray = doc.data().msgType;

          arrTimeArray.unshift(newMessage.arrivalTime);
          msgContentsArray.unshift(newMessage.msgContents);
          msgIdArray.unshift(newMessage.msgID);
          msgTypeArray.unshift(newMessage.msgType);

          const data = {
            arrivalTime: arrTimeArray,
            msgContents: msgContentsArray,
            msgId: msgIdArray,
            msgType: msgTypeArray
          };

          chatRef.set(data);
        }
      }).catch(err => {
        console.log('Error', err); // add toastr notification
        this.openSnackBar('Oops something went wrong', 'close');
      });
  }
  Logoff(myId) {
    let myName: string;
    let myStatus: string;
    let myProfilePicture: string;
    let myOnlineIcon: string;
    let myUserID: string;
    let myPassword: string;
    let myChatsIdArr: string[] = []; // 0123456789_9876543210
    let myOpenChatUserIds: string[] = []; // 0123456789

    const userRef = this.db.collection('users').doc(myId); // localStorage.getItem('currentUserId')
    const getDoc = userRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('not found'); // add toastr notification

        } else {
          // console.log(doc.data().toString());
          myName = doc.data().name;
          myStatus = doc.data().status;
          myProfilePicture = doc.data().profilePicture;
          myOnlineIcon = doc.data().onlineIcon;
          myUserID = doc.data().userId;
          myPassword = doc.data().password;
          myChatsIdArr = doc.data().ChatsIdArr;
          myOpenChatUserIds = doc.data().openChatUserIds;

          myStatus = 'offline';
          myOnlineIcon = 'online_icon offline';

          const data = {
            name: myName,
            status: myStatus,
            profilePicture: myProfilePicture,
            onlineIcon: myOnlineIcon,
            userId: myUserID,
            password: myPassword,
            ChatsIdArr: myChatsIdArr,
            openChatUserIds: myOpenChatUserIds,
          };

          const usersRef = this.db.collection('users').doc(myId);
          usersRef.set(data);
        }
      }).catch(err => {
        console.log('Error', err); // add toastr notification
        this.openSnackBar('Oops something went wrong', 'close');
        this.db.collection('log').doc(myId).set(err);
      });
    localStorage.clear();
  }

  newChat(friendUserId) {
    let myName: string;
    let myStatus: string;
    let myProfilePicture: string;
    let myOnlineIcon: string;
    let myUserID: string;
    let myPassword: string;
    let myChatsIdArr: string[] = []; // 0123456789_9876543210
    let myOpenChatUserIds: string[] = []; // 0123456789

    const userRef = this.db.collection('users').doc(localStorage.getItem('currentUserId')); // localStorage.getItem('currentUserId')
    const getDoc = userRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('not found'); // add toastr notification

        } else {
          // console.log(doc.data().toString());
          myName = doc.data().name;
          myStatus = doc.data().status;
          myProfilePicture = doc.data().profilePicture;
          myOnlineIcon = doc.data().onlineIcon;
          myUserID = doc.data().userId;
          myPassword = doc.data().password;
          myChatsIdArr = doc.data().ChatsIdArr;
          myOpenChatUserIds = doc.data().openChatUserIds;

          myOpenChatUserIds.push(friendUserId);

          const data = {
            name: myName,
            status: myStatus,
            profilePicture: myProfilePicture,
            onlineIcon: myOnlineIcon,
            userId: myUserID,
            password: myPassword,
            ChatsIdArr: myChatsIdArr,
            openChatUserIds: myOpenChatUserIds,
          };

          const usersRef = this.db.collection('users').doc(myUserID);
          usersRef.set(data);
          this.AddChatToFriend(localStorage.getItem('currentUserId'), friendUserId);
        }
      }).catch(err => {
        console.log('Error', err); // add toastr notification
        this.openSnackBar('Oops something went wrong', 'close');
      });
  }

  AddChatToFriend(myId, friendId) {
    let myName: string;
    let myStatus: string;
    let myProfilePicture: string;
    let myOnlineIcon: string;
    let myUserID: string;
    let myPassword: string;
    let myChatsIdArr: string[] = []; // 0123456789_9876543210
    let myOpenChatUserIds: string[] = []; // 0123456789

    const userRef = this.db.collection('users').doc(localStorage.getItem(friendId)); // localStorage.getItem('currentUserId')
    const getDoc = userRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('not found'); // add toastr notification

        } else {
          // console.log(doc.data().toString());
          myName = doc.data().name;
          myStatus = doc.data().status;
          myProfilePicture = doc.data().profilePicture;
          myOnlineIcon = doc.data().onlineIcon;
          myUserID = doc.data().userId;
          myPassword = doc.data().password;
          myChatsIdArr = doc.data().ChatsIdArr;
          myOpenChatUserIds = doc.data().openChatUserIds;

          myOpenChatUserIds.push(myId);

          const data = {
            name: myName,
            status: myStatus,
            profilePicture: myProfilePicture,
            onlineIcon: myOnlineIcon,
            userId: myUserID,
            password: myPassword,
            ChatsIdArr: myChatsIdArr,
            openChatUserIds: myOpenChatUserIds,
          };

          const usersRef = this.db.collection('users').doc(myUserID);
          usersRef.set(data);
        }
      }).catch(err => {
        console.log('Error', err); // add toastr notification
        this.openSnackBar('Oops something went wrong', 'close');
      });
  }

  getNameByID(idToSearch): string {
    let nameOfId = '';
    const usersRef = this.db.collection('users').doc(idToSearch);
    const getDoc = usersRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('not found'); // add toastr notification

        } else {
          nameOfId = doc.data().name;
        }
      }).catch(err => {
        console.log('Error', err); // add toastr notification
        this.openSnackBar('Oops something went wrong', 'close');
      });
    return nameOfId;
  }
}
