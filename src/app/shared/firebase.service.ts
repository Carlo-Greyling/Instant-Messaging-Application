import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentData} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import { Messages } from './messages.model';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public openChatUserIds: string[] = [];
  private userProfilesArr: Users[] = [];
  private messagesArr: Messages[] = [];
  public ChatIdFinal = '';

  constructor(public db: AngularFirestore,
              private router: Router) {}

  userSignIn(userId, password) {
    const usersRef = this.db.collection('users').doc(userId);
    const getDoc = usersRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('not found'); // add toastr notification
        } else {
          if (doc.data().password === password) {
            this.router.navigate(['chatWindow']);
            localStorage.setItem('currentUserId', userId);
          }
        }
      }).catch(err => {
        console.log('Error', err); // add toastr notification
      });
  }
  // TODO: Sign up
  createUser(userId, name, password, base64ProPic) {
    const data = {
      name,
      status: 'online',
      profilePicture: base64ProPic,
      onlineIcon: 'online_icon',
      userId,
      password
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
              });
          }
        }
      }).catch(err => {
        console.log('Error', err); // add toastr notification
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
          /*const data = {
            arrivalTime: arrTimeArray,
            msgContents: msgContentsArray,
            msgId: msgIdArray,
            msgType: msgTypeArray
          };

          chatsRef.set(data);*/
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
      });
  }

  newOpenChat(userId) {
    const userRef = this.db.collection('users').doc(localStorage.getItem('currentUserId'));
    const getDoc = userRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('not found'); // add toastr notification
        } else {
          this.openChatUserIds = doc.data().openChatUserIds;
          this.openChatUserIds.push(userId);
          const data = {openChatUserIds: this.openChatUserIds};
          this.db.collection('users').doc(localStorage.getItem('currentUserId')).set(data);
        }
      }).catch(err => {
        console.log('Error', err); // add toastr notification
      });
  }
}
