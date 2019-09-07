import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

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

  uploadImage(userId, contactId, Base64String, Filename) {
    // Upload Image
  }

  uploadVideo(userId, contactId, Base64String, Filename) {
    // Upload Video
  }

  uploadAudio(userId, contactId, Base64String, Filename) {
    // Upload Audio
  }
}
