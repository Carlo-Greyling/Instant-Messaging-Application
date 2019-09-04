import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FirebaseService} from '../shared/firebase.service';
import {User} from 'firebase';

export interface UserInterface {
  name: string;
  status: string;
  profilePicture: string;
  onlineIcon: string;
  userID: string;
  password: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  newUser: UserInterface;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  SignUp(form: NgForm) {
    const value = form.value;
    this.newUser.name = value.name;
    this.newUser.status = value.status;
    this.newUser.profilePicture = value.profilePicture;
    this.newUser.onlineIcon = value.onlineIcon;
    this.newUser.userID = value.userID;
    this.newUser.password = value.password;
    this.firebaseService.createUser(this.newUser);
  }
}
