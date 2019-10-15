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
    this.firebaseService.createUser(value.userId, value.name, value.password);
  }
  OpenImage(event: any) {
    console.log(event.target.files[0].name);
    this.encodeService.profilePicBase64(event.target.files[0], event.target.files[0].name);

    // This is just to make sure the Async base64 are loaded to the local storage. Give some time
    (async () => {
      // Do something before delay
      console.log('before delay');
      this.openSnackBar('Please Wait....', 'Close');
      await this.delay(1500);
      // Do something after
      console.log('after delay');
      this.openSnackBar('Profile Picture Ready for Sign Up', 'Close');
     })();
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  UploadProfilePicture() {
    // send file to this.encoder.service.profilePicBase64();
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
