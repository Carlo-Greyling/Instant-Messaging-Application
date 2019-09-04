import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoCallingComponent } from './video-calling/video-calling.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { SharedModule } from './shared/share.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    VideoCallingComponent,
    MultimediaComponent,
    ChatWindowComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // This shared module contains angular material modules (In one module for more cleaner code)
    SharedModule
  ],
  providers: [],
  entryComponents: [
    MultimediaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
