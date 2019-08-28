import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'instant-messaging-app';

  videoCalling() {
    window.location.href = 'https://youtu.be/-HrPr6IQNac?t=25';
  }
}
