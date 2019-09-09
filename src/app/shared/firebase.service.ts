import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentData} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import { Messages } from './messages.model';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public openChatChatIds: string[] = [];
  public openChatUserIds: string[] = [];
  private userProfilesArr: Users[] = [];
  private messagesArr: Messages[] = [];
  private i: number;
  private userIdArr: string[] = [];

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
            /*const arr = this.getOpenChats(userId);
            console.log(arr);*/
          }
        }
      }).catch(err => {
        console.log('Error', err); // add toastr notification
      });
  }
  // TODO: Sign up
  /*createUser(data) {
    const usersRef = this.db.collection('users').doc(data.userId);
    usersRef.set(data);
  }*/
  createUser(userId, name, password) {
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
  }

  getMessages(openChatIds: any[]): Messages[] {
    return this.messagesArr;
  }

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
                  /*this.userProfilesArr[i].name = udoc.data().name;
                  this.userProfilesArr[i].onlineIcon = udoc.data().onlineIcon;
                  this.userProfilesArr[i].profilePicture = udoc.data().profilePicture;
                  this.userProfilesArr[i].status = udoc.data().status;
                  this.userProfilesArr[i].userID = udoc.data().userID;*/
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
}
