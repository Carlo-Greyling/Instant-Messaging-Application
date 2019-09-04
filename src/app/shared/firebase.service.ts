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
  // TODO: Sing up
  createUser() {}
}
