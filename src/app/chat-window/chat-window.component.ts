import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Users} from 'src/app/shared/users.model';
import { Messages } from '../shared/messages.model';
import { FirebaseApp } from '@angular/fire';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';
import { MatDialog, MatSnackBar } from '@angular/material';
import { MultimediaComponent } from '../multimedia/multimedia.component';
import {VideoCallingComponent} from '../video-calling/video-calling.component';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  thisUserID = 1234;
  title = 'instant-messaging-app';
  modal = document.getElementById('myModal') as HTMLImageElement;
  img = document.getElementById('profile-picture') as HTMLImageElement;
  modalImg = document.getElementById('img01') as HTMLImageElement;
  input; filter; ul; li; a; i; txtValue;
  newMessage: string;
  public msgTime: Date = new Date();

  users: Users[] = [
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
  ];

  // Get the <span> element that closes the modal
  span = document.getElementsByClassName('close')[0];

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) { }

  // Just to give info the application user
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  videoCalling() {
    window.location.href = '/videoCalling';
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
        ContactId: 0
      },
      panelClass: 'MultimediaCSS',
      position: { right: right - 350 + 'px', top: top - 120 + 'px' }
    });

    // If wish to apply a action after popup close
    dialogRef.afterClosed().subscribe(() => {
      console.log('Multi-Media Component popup has closed');
    });
  }

  ngOnInit() {
    this.openSnackBar('Login Successful', 'close');
  }

  onGenerateNewMessage() {
      this.message.push(new Messages(this.thisUserID, this.newMessage, '', '14:47'));
  }

}
