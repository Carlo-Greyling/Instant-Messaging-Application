import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { EncoderService } from '../shared/Encoder.service';
import * as rx  from 'rxjs';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.scss']
})
export class MultimediaComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private dialogRef: MatDialogRef<MultimediaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private encodeService: EncoderService) { }

  ngOnInit() {
  }

  Close() {
    this.dialogRef.close();
  }

  async OpenImage(event: any) {
    // The file is in this event
    // console.log(event.target.files[0].name);
    // this.encodeService.Base64EncodeImage(event.target.files[0], event.target.files[0].name, this.data.UserId, this.data.ContactId);
    // this.openSnackBar('Image Send', 'Close');
    // this.dialogRef.close();
    this.encodeService.Base64Encoder(event.target.files[0]);
  }
  OpenVideo(event: any) {
    // The file is in this event
    console.log(event.target.files[0].name);
    this.encodeService.Base64EncodeVideo(event.target.files[0], event.target.files[0].name, this.data.UserId, this.data.ContactId);
    this.openSnackBar('Video file send', 'Close');
    this.dialogRef.close();
  }
  OpenAudio(event: any) {
    // The file is in this event
    console.log(event.target.files[0].name);
    this.encodeService.Base64EncodeAudio(event.target.files[0], event.target.files[0].name, this.data.UserId, this.data.ContactId);
    this.openSnackBar('Audio file send', 'Close');
    this.dialogRef.close();
  }

  testSnackBar() {
    this.openSnackBar('Keep calm and Code', 'Close');
  }

  // We will use this message method to tell the user if the message where send successfully or not
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
