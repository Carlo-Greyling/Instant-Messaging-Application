import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoCallingComponent } from './video-calling/video-calling.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VideoCallingComponent,
    MultimediaComponent,
    ChatWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
