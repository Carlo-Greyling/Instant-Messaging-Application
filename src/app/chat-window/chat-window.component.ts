import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Users} from 'src/app/shared/users.model';
import { Messages } from '../shared/messages.model';
import { FirebaseApp } from '@angular/fire';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';
import { MatDialog, MatSnackBar } from '@angular/material';
import { MultimediaComponent } from '../multimedia/multimedia.component';
import {VideoCallingComponent} from '../video-calling/video-calling.component';
import {FirebaseService} from '../shared/firebase.service';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {debounceTime, switchMap} from 'rxjs/operators';
import { ViewsettingsComponent } from '../view-settings/viewsettings.component';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { EncoderService } from '../shared/Encoder.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  thisUserID = localStorage.getItem('currentUserId');
  title = 'instant-messaging-app';
  userOnlineStatus: string;
  modal = document.getElementById('myModal') as HTMLImageElement;
  img = document.getElementById('profile-picture') as HTMLImageElement;
  modalImg = document.getElementById('img01') as HTMLImageElement;

  input;
  filter;
  ul;
  li;
  a;
  i;
  txtValue;

  public activeContact;  // variable for setting the current open contact in the chat window;
  public activeContactName: string;
  public activeProfilePicture: string;

  newMessage: string;
  public today: Date;
  public msgMinutes;
  public msgHours;
  private openChatIds: string[];
  private openChatUserIds: string[];

  // Jeandre voice note recording
  // Lets initiate Record OBJ
  private record;
  // Will use this flag for detect recording
  recording = false;
  // Url of Blob
  voiceNoteUrl;
  private error;

  interval;

  users: Users[] = [];
  message: Messages[] = [];
  newMessageArr: Messages[] = [];

  initialGetMessage = false;
  arrDiff = 0;
  arrDiffMessageArr: Messages[] = [];

  /*users: Users[] = [
    new Users('0765843028', 'Keanu Jooste', 'online', 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/60937380_2227964937285183_6900601698239119360_n.jpg?_nc_cat=106&_nc_oc=AQmjhYtcyLXTRQ9EjwQGp70e3OYU16x3YMCc7ODLc-uvgPqj_BBvs-T6p5EsgzeoTho&_nc_ht=scontent-jnb1-1.xx&oh=9c51d38a12ea4a82dc6aeea28465c637&oe=5E10F323', 'online_icon'),
    new Users('0713304416', 'Jeandre Pretorius', 'left 7 mins ago', 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/19904938_1911186905828058_7381270267279841437_n.jpg?_nc_cat=100&_nc_oc=AQk0FJdBM1FmI9KAtrOOyLOxmKXV8rzdBkoERbDf-yk-LBsac1A5ldVwbLej1TZAI3k&_nc_ht=scontent-jnb1-1.xx&oh=37bebc49635c6f06cbdf814f9a1ad4ae&oe=5E0C581E', 'online_icon offline'),
    new Users('0731102348', 'Stiaan Bouwer', 'online', 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/16938651_1420230568048345_476885994405757357_n.jpg?_nc_cat=108&_nc_oc=AQlqb8ODhECeR4rP0EjCsIOLNEdv22u9fS3CAUDaTtj0tM_UVTBxp8rb8PBAYbPcm-U&_nc_ht=scontent-jnb1-1.xx&oh=8735366cef0719e77c8139048879ee0e&oe=5E04B854', 'online_icon'),
    new Users('0815817200', 'Eduan Naude', 'left 30 mins ago', 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/41215967_2073383522693329_4417942590620434432_n.jpg?_nc_cat=104&_nc_oc=AQk_-RsprR49AV__tXA09KVzvb3g3V-Du7r_9ZsFp5I5QXvU64IYEo05WbvQ1aO9gGc&_nc_ht=scontent-jnb1-1.xx&oh=7289a5f55c7c797e0814554f0aa82b60&oe=5E0F949B', 'online_icon offline'),
    new Users('0824189002', 'Ernst Blignaut', 'online', 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/41991171_2204128929876901_2659512653843529728_n.jpg?_nc_cat=100&_nc_oc=AQmfXWDIka8j7Ylz30Uokz0190eIjvShDDT2fZw2eC-TF-S2C7CODkxED5wqjtiRNsk&_nc_ht=scontent-jnb1-1.xx&oh=ada48dbae40d52ef629194f7d068adea&oe=5E03C633', 'online_icon'),
  ];

  message: Messages[] = [
    new Messages(1234, 'msg1', 'msgText', '14:29'),
    new Messages(2222, 'msg2', 'msgText', '14:29'),
    new Messages(1234, 'msg3', 'msgText', '14:30'),
    new Messages(3211, 'msg4', 'msgText', '14:30'),
  ];*/

  // Get the <span> element that closes the modal
  span = document.getElementsByClassName('close')[0];

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar,
              private firebaseService: FirebaseService, private domSanitizer: DomSanitizer, private encoderService: EncoderService) {}

  setActiveContact(userID: string) {
    // this.message = [];
    this.message.length = 0;
    if (userID !== this.activeContact) {
      this.activeContact = userID;
    } else {
      return;
    }

    for (this.i = 0; this.i < this.users.length; this.i++) {
      if (this.users[this.i].userID === this.activeContact) {
        this.activeContactName = this.users[this.i].name;
        this.activeProfilePicture = this.users[this.i].profilePicture;
      }
    }

    this.message = this.firebaseService.getMessages(userID);
    localStorage.setItem('activeContact', this.activeContact);
    return this.activeContact;
  }

  // Just to give info the application user
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  // Jeandre Voice Note Methods
  initiateRecording() {

    this.recording = true;
    const mediaConstraints = {
      video: false,
      audio: true
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }
  successCallback(stream) {
    const options = {
      mimeType: 'audio/mp3',
      numberOfAudioChannels: 1
    };
    // Start Actual Recording
    const StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }
  /**
   * Process Error.
   */
  errorCallback(error) {
    this.error = 'Can not play audio in your browser';
  }
  /**
   * Stop recording.
   */
  stopRecording() {
    this.recording = false;
    this.record.stop(this.processRecording.bind(this));
    // this.sanitize(this.voiceNoteUrl);
  }
  /**
   * processRecording Do what ever you want with blob
   * @param  {any} blob Blog
   */
  processRecording(blob) {
    this.voiceNoteUrl = URL.createObjectURL(blob);
    blob = blob.slice(0, blob.size, 'audio/mp3');
    // console.log(blob);
    this.encoderService.Base64EncodeAudio(blob, 'VoiceNote', '0', '0', this.activeContact);

    // This is just to make it look real, the voice note are uploaded
    (async () => {
      // Do something before delay
      console.log('before delay');
      this.openSnackBar('Please Wait....', 'Close');
      await this.delay(1500);
      // Do something after
      console.log('after delay');
      this.openSnackBar('Voice Note Send', 'Close');
     })();
  }
  sanitize(url: string) {
    // return this.domSanitizer.bypassSecurityTrustUrl(url);
    // this.encoderService.Base64EncodeAudio(this.domSanitizer.bypassSecurityTrustUrl(url), 'VoiceNote', '0', '0', this.activeContact);
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  videoCalling() {
    window.location.href = '/init-video';
  }

  voiceCalling() {
    window.location.href = '/voiceCalling';
  }

  /*constructor(public app: FirebaseApp) {

  }*/

  /*enlargeImg() {
    this.modal.style.display = 'Block';
    this.modalImg.src = this.img.src;
  }*/

// When the user clicks on <span> (x), close the modal
  /*closeModal() {
    this.modal.style.display = 'none';
  }*/

  searchContacts() {
    this.input = document.getElementById('searchID');
    this.filter = this.input.value.toUpperCase();
    this.ul = document.getElementById('contactsUL');
    this.li = this.ul.getElementsByTagName('li');

    for (this.i = 0; this.i < this.li.length; this.i++) {
      this.a = this.li[this.i].getElementsByTagName('a')[0];
      this.txtValue = this.a.textContent || this.a.innerText;
      if (this.txtValue.toUpperCase().indexOf(this.filter) > -1) {
        this.li[this.i].style.display = '';
      } else {
        this.li[this.i].style.display = 'none';
      }
    }
  }

  // Opening the multimedia popup
  OpenMultiMedia() {
    console.log('Opening the Multi-Media Component');
    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = document.getElementById('attachment').getBoundingClientRect();
    const right = bodyRect.right - elemRect.right;
    const top = elemRect.top - bodyRect.top;
    const dialogRef = this.dialog.open(MultimediaComponent, {
      // This is only if we wish to send parameters to the popup component
      data: {
        UserId: 0,
        ContactId: 0,
        ActiveContact: this.activeContact
      },
      panelClass: 'MultimediaCSS',
      position: { right: right - 350 + 'px', top: top - 120 + 'px' }
    });

    // If wish to apply a action after popup close
    dialogRef.afterClosed().subscribe(() => {
      console.log('Multi-Media Component popup has closed');
    });
  }

  openSettings() {
    console.log('Opening the Multi-Media Component');
    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = document.getElementById('settings').getBoundingClientRect();
    const right = bodyRect.right - elemRect.right;
    const top = elemRect.top - bodyRect.top;
    const dialogRef = this.dialog.open(ViewsettingsComponent, {
      // This is only if we wish to send parameters to the popup component
      data: {
        UserId: 0,
        ContactId: 0
      },
      panelClass: 'MultimediaCSS',
      position: { right: right + 'px', top: top + 'px' }
    });

    // If wish to apply a action after popup close
    dialogRef.afterClosed().subscribe(() => {
      console.log('Multi-Media Component popup has closed');
    });
  }

  ngOnInit() {
    this.userOnlineStatus = 'online_icon';
    this.openSnackBar('Login Successful', 'close');
    this.users = this.firebaseService.getUserProfiles();
    const myID = localStorage.getItem('currentUserId');
    // this.setActiveContact(this.users[0].userID);
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userID === myID) {
        this.setActiveContact(this.users[i].openChatUserIds[0]);
      }
    }
    this.updateMessages();
    /*this.users = this.firebaseService.getUserProfiles();
    console.log(this.users.toString());
    this.setActiveContact(this.users[0].userID);*/

    /*this.interval = setInterval(() => {
      this.updateMessages();
      // this.message.length = 0;
      // this.message = this.updateMessages();
      /*if (this.initialGetMessage === false) {
        this.message = this.firebaseService.getMessages(this.activeContact);
        this.initialGetMessage = true;
      }
      if (this.initialGetMessage === true) {
        this.newMessageArr = this.updateMessages();
        if (this.message.length < this.newMessageArr.length) {
          this.arrDiff = this.message.length - this.newMessageArr.length;
          for (let i = this.arrDiff; i === 0; i--) {
            this.message.unshift(this.newMessageArr[i]);
            this.arrDiffMessageArr.unshift(this.newMessageArr[i]);
          }
        }
      }
      this.arrDiff = 0;*/
    // }, 15000);

    this.interval = setInterval(() => {
      this.updateMessages();
    }, 15000);

    /*this.activeContact = this.users[0].userID;
    this.activeContactName = this.users[0].name;
    this.activeProfilePicture = this.users[0].profilePicture;*/
    console.log(this.users);
    // this.setActiveContact(this.users[0].userID);
    /*this.activeContact = this.users[0].userID;
    this.activeContactName = this.users[0].name;
    this.activeProfilePicture = this.users[0].profilePicture;*/
  }

  updateMessages(): any {
    this.newMessageArr.length = 0;
    const currentLength = this.message.length;
    this.newMessageArr = this.firebaseService.getMessages(this.activeContact);
    if (this.newMessageArr.length > currentLength) {
      const diff = this.newMessageArr.length - currentLength;
      for (let i = diff; i === 0; i--) {
        this.message.unshift(this.newMessageArr[i]);
        // TODO: Send Notification here
        // User who sent message: this.activeContactName
        // User who sent message profile pic = this.activeContact.profilePicture
        // Message Contents = this.newMessageArr[i].msgContents
      }
    }
    // setTimeout(this.updateMessages(), 1000);
    // this.message = this.firebaseService.getMessages(this.activeContact);
    // return this.firebaseService.getMessages(this.activeContact);
  }

  onGenerateNewMessage() {
    this.today  = new Date();
    this.msgMinutes = this.today.getMinutes();
    this.msgHours = this.today.getHours();

    if (this.msgHours < 10) {
      this.msgHours = '0' + this.msgHours;
    }

    if (this.msgMinutes < 10) {
      this.msgMinutes = '0' + this.msgMinutes;
    }

    const newMessage = new Messages(this.thisUserID, this.newMessage, 'msgText', this.msgHours + ':' + this.msgMinutes);
    this.message.unshift(newMessage);
    this.firebaseService.newMessage(newMessage, this.activeContact);

    this.newMessage = '';
  }

  // onGenerateNewMultiMediaMessage is moved to Encoder.service component

}
