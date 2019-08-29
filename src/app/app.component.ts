import { Component } from '@angular/core';
import {Users} from './shared/users.model';
// import { FirebaseApp } from '@angular/fire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'instant-messaging-app';
  modal = document.getElementById('myModal') as HTMLImageElement;
  img = document.getElementById('profile-picture') as HTMLImageElement;
  modalImg = document.getElementById('img01') as HTMLImageElement;
  input; filter; ul; li; a; i; txtValue;

  users: Users[] = [
    new Users('Keanu Jooste', 'online', 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/60937380_2227964937285183_6900601698239119360_n.jpg?_nc_cat=106&_nc_oc=AQmjhYtcyLXTRQ9EjwQGp70e3OYU16x3YMCc7ODLc-uvgPqj_BBvs-T6p5EsgzeoTho&_nc_ht=scontent-jnb1-1.xx&oh=9c51d38a12ea4a82dc6aeea28465c637&oe=5E10F323'),
    new Users('Jeandre Pretorius', 'left 7 mins ago', 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/19904938_1911186905828058_7381270267279841437_n.jpg?_nc_cat=100&_nc_oc=AQk0FJdBM1FmI9KAtrOOyLOxmKXV8rzdBkoERbDf-yk-LBsac1A5ldVwbLej1TZAI3k&_nc_ht=scontent-jnb1-1.xx&oh=37bebc49635c6f06cbdf814f9a1ad4ae&oe=5E0C581E'),
    new Users('Stiaan Bouwer', 'online', 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/16938651_1420230568048345_476885994405757357_n.jpg?_nc_cat=108&_nc_oc=AQlqb8ODhECeR4rP0EjCsIOLNEdv22u9fS3CAUDaTtj0tM_UVTBxp8rb8PBAYbPcm-U&_nc_ht=scontent-jnb1-1.xx&oh=8735366cef0719e77c8139048879ee0e&oe=5E04B854'),
    new Users('Eduan Naude', 'left 30 mins ago', 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/41215967_2073383522693329_4417942590620434432_n.jpg?_nc_cat=104&_nc_oc=AQk_-RsprR49AV__tXA09KVzvb3g3V-Du7r_9ZsFp5I5QXvU64IYEo05WbvQ1aO9gGc&_nc_ht=scontent-jnb1-1.xx&oh=7289a5f55c7c797e0814554f0aa82b60&oe=5E0F949B'),
    new Users('Ernst Blignaut', 'online', 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/41991171_2204128929876901_2659512653843529728_n.jpg?_nc_cat=100&_nc_oc=AQmfXWDIka8j7Ylz30Uokz0190eIjvShDDT2fZw2eC-TF-S2C7CODkxED5wqjtiRNsk&_nc_ht=scontent-jnb1-1.xx&oh=ada48dbae40d52ef629194f7d068adea&oe=5E03C633')
  ];

  // Get the <span> element that closes the modal
  span = document.getElementsByClassName('close')[0];

  videoCalling() {
    window.location.href = 'https://youtu.be/-HrPr6IQNac?t=25';
  }

  /*constructor(public app: FirebaseApp) {

  }*/

  enlargeImg() {
    this.modal.style.display = 'Block';
    this.modalImg.src = this.img.src;
  }

// When the user clicks on <span> (x), close the modal
  closeModal() {
    this.modal.style.display = 'none';
  }

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
}
