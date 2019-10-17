import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../shared/firebase.service';
import * as firebase from 'firebase';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [FirebaseService]
})
export class LoginComponent implements OnInit {
  signInMessage: any;

  constructor(private router: Router, private snackBar: MatSnackBar,
              private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  // Just to give info the application user
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  // DONT EDIT!!!
  LogIn(form: NgForm) {
    const value = form.value;
    this.firebaseService.userSignIn(value.username, value.password);
  }

  onSignUpClicked() {
    this.router.navigate(['signup']);
  }
}
