import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoCallingComponent } from './video-calling/video-calling.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { SharedModule } from './shared/share.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    VideoCallingComponent,
    MultimediaComponent,
    ChatWindowComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    AppRoutingModule,
    //This shared module contains angular material modules (In one module for more cleaner code)
    SharedModule
  ],
  providers: [],
  entryComponents: [
    MultimediaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
