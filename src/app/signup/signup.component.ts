import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FirebaseService} from '../shared/firebase.service';
import {EncoderService} from '../shared/Encoder.service';
import {MatDialogRef} from '@angular/material';
import {MultimediaComponent} from '../multimedia/multimedia.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  base64DP = '';

  constructor(private firebaseService: FirebaseService,
              private encodeService: EncoderService) { }

  ngOnInit() {
  }

  SignUp(form: NgForm) {
    const value = form.value;
    this.firebaseService.createUser(value.userId, value.name, value.password, this.base64DP);
  }
}
