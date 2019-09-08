import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ChatWindowComponent} from './chat-window/chat-window.component';
import { VideoCallingComponent } from './video-calling/video-calling.component';
import {VoiceCallingComponent} from './voice-calling/voice-calling.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'chatWindow', component: ChatWindowComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'videoCalling', component: VideoCallingComponent },
  { path: 'voiceCalling', component: VoiceCallingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
