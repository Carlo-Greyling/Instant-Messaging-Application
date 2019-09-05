import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { EncoderService } from '../shared/Encoder.service';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.scss']
})
export class MultimediaComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private dialogRef: MatDialogRef<MultimediaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private encoderService: EncoderService) { }

  ngOnInit() {
  }

  Close() {
    this.dialogRef.close();
  }

  OpenImage(event: any) {
    // The file are in this event
    console.log(event);
    // TO ENCODE (Send image file) : const base64str = base64Encode('file.jpg');
    // TO DECODE (Send base64 string and image file) : const file = base64EDecode(base64String, 'file.jpg');
    // Code here

    this.openSnackBar('Image Send', 'Close');
  }
  OpenVideo(event: any) {
    // The file are in this event
    console.log(event);

    // Code here

    this.openSnackBar('Video file send', 'Close');
  }
  OpenAudio(event: any) {
    // The file are in this event
    console.log(event);

    // Code here

    this.openSnackBar('Audio file send', 'Close');
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
