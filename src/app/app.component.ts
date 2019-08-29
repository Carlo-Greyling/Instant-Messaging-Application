import { Component } from '@angular/core';

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

  /*users: Users[] = [

  ];*/

  // Get the <span> element that closes the modal
  span = document.getElementsByClassName('close')[0];

  videoCalling() {
    window.location.href = 'https://youtu.be/-HrPr6IQNac?t=25';
  }

  enlargeImg() {
    this.modal.style.display = 'Block';
    this.modalImg.src = this.img.src;
  }

// When the user clicks on <span> (x), close the modal
  closeModal() {
    this.modal.style.display = 'none';
  }
}
