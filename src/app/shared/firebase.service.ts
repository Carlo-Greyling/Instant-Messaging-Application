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

  uploadImage(userId, contactId, Base64String, Filename) {
    // Upload Image
  }

  uploadVideo(userId, contactId, Base64String, Filename) {
    // Upload Video
  }

  uploadAudio(userId, contactId, Base64String, Filename) {
    // Upload Audio
  }

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
                    udoc.data().onlineIcon));
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
    let msgIdArray: number[] = [];
    let msgTypeArray: string[] = [];

    const ChatID = localStorage.getItem('currentUserId') + '_' + friendId;

    const chatsRef = this.db.collection('chats').doc(ChatID);
    const getDoc = chatsRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('not found'); // add toastr notification
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
