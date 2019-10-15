import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FirebaseService} from '../shared/firebase.service';
import {EncoderService} from '../shared/Encoder.service';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {MultimediaComponent} from '../multimedia/multimedia.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  base64DP = '';

  constructor(private snackBar: MatSnackBar, private firebaseService: FirebaseService,
              private encodeService: EncoderService) { }

  ngOnInit() {
  }

  SignUp(form: NgForm) {
    const value = form.value;
    this.firebaseService.createUser(value.userId, value.name, value.password, this.base64DP);
  }

  async OpenImage(event: any) {
    // The file is in this event
    console.log(event.target.files[0].name);
    // this.encodeService.Base64EncodeImage(event.target.files[0], event.target.files[0].name, this.data.UserId, this.data.ContactId, this.data.ActiveContact);
    this.openSnackBar('Icon Uploaded', 'Close');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
