import { Component, OnInit } from '@angular/core';
import {Messages} from '../shared/messages.model';
import {Users} from '../shared/users.model';
import {FirebaseService} from '../shared/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-init-video',
  templateUrl: './init-video.component.html',
  styleUrls: ['./init-video.component.scss']
})
export class InitVideoComponent implements OnInit {
  channelID = '';
  joinWithID = '';
  thisUserID = localStorage.getItem('currentUserId');
  title = 'instant-messaging-app';
  modal = document.getElementById('myModal') as HTMLImageElement;

  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

  input;

  li;
  a;
  // i = 0;

  public activeContact;  // variable for setting the current open contact in the chat window;

  newMessage: string;
  public today: Date;
  public msgMinutes;
  public msgHours;

  users: Users[] = [];
  message: Messages[] = [];

  generateChannel() {
    for (let i = 0; i < 5; i++) {
      this.channelID += this.characters.charAt(Math.floor(Math.random() * this.characters.length));
    }

    this.onGenerateNewMessage();
  }

  videoCalling() {
    // window.location.href = '/videoCalling';
    this.router.navigate(['videoCalling']);
  }

  joinChannelID() {
    localStorage.setItem('channelID', this.joinWithID);
    // window.location.href = '/videoCalling';
    // this.router.navigate(['videoCalling']);
    this.videoCalling();
  }

  cancelVideo() {
    window.location.href = '/chatWindow';
  }

  onGenerateNewMessage() {
    this.newMessage = 'Hello! I would like to video call you, here is your channel ID: ' + this.channelID;
    localStorage.setItem('channelID', this.channelID);

    this.today  = new Date();
    this.msgMinutes = this.today.getMinutes();
    this.msgHours = this.today.getHours();

    if (this.msgHours < 10) {
      this.msgHours = '0' + this.msgHours;
    }

    if (this.msgMinutes < 10) {
      this.msgMinutes = '0' + this.msgMinutes;
    }

    const newMessage = new Messages(localStorage.getItem('currentUserId'), this.newMessage, 'msgText', this.msgHours + ':' + this.msgMinutes);
    this.message.unshift(newMessage);
    this.firebaseService.newMessage(newMessage, localStorage.getItem('activeContact'));

    console.log('currentUser: ' + localStorage.getItem('currentUserId'));
    console.log('active contact: ' + localStorage.getItem('activeContact'));
    console.log(this.newMessage);

    this.newMessage = '';
  }

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
  }

}
