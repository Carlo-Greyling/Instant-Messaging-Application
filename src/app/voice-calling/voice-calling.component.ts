import { Component, OnInit } from '@angular/core';
import { AngularAgoraRtcService, Stream } from 'angular-agora-rtc';

@Component({
  selector: 'app-voice-calling',
  templateUrl: './voice-calling.component.html',
  styleUrls: ['./voice-calling.component.scss']
})
export class VoiceCallingComponent implements OnInit {
  localStream: Stream;
  public remoteCalls: any = [];

  constructor(private agoraService: AngularAgoraRtcService) {
    this.agoraService.createClient();
  }

  startCall() {
    this.agoraService.client.join(null, '1000', null, (uid) => {
      this.localStream = this.agoraService.createStream(uid, true, null, null, true, false);
      this.localStream.setVideoProfile('720p_3');
      this.subscribeToStreams();
    });
  }

  private subscribeToStreams() {
    this.localStream.on('accessAllowed', () => {
      console.log('accessAllowed');
    });
    // The user has denied access to the camera and mic.
    this.localStream.on('accessDenied', () => {
      console.log('accessDenied');
    });

    this.localStream.init(() => {
        console.log('getUserMedia successfully');
        this.localStream.play('agora_local');
        this.agoraService.client.publish(this.localStream,
          // tslint:disable-next-line:only-arrow-functions
          function(err) {
            console.log('Publish local stream error: ' + err);
          });
        this.agoraService.client.on('stream-published',
          // tslint:disable-next-line:only-arrow-functions
          function(evt) {
            console.log('Publish local stream successfully');
          });
      },
      // tslint:disable-next-line:only-arrow-functions
      function(err) {
        console.log('getUserMedia failed', err);
      });

    this.agoraService.client.on('error', (err) => {
      console.log('Got error msg:', err.reason);
      if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
        this.agoraService.client.renewChannelKey('', () => {
          console.log('Renew channel key successfully');
        }, (err) => {
          console.log('Renew channel key failed: ', err);
        });
      }
    });

    this.agoraService.client.on('stream-added', (evt) => {
      const stream = evt.stream;
      this.agoraService.client.subscribe(stream, (err) => {
        console.log('Subscribe stream failed', err);
      });
    });

    this.agoraService.client.on('stream-subscribed', (evt) => {
      const stream = evt.stream;
      if (!this.remoteCalls.includes(`agora_remote${stream.getId()}`)) {
        this.remoteCalls.push(`agora_remote${stream.getId()}`);
        setTimeout(() => stream.play(`agora_remote${stream.getId()}`), 2000);
      }
    });

    this.agoraService.client.on('stream-removed', (evt) => {
      const stream = evt.stream;
      stream.stop();
      this.remoteCalls = this.remoteCalls.filter(call => call !== `#agora_remote${stream.getId()}`);
      console.log(`Remote stream is removed ${stream.getId()}`);
    });

    this.agoraService.client.on('peer-leave', (evt) => {
      const stream = evt.stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = this.remoteCalls.filter(call => call === `#agora_remote${stream.getId()}`);
        console.log(`${evt.uid} left from this channel`);
      }
    });
  }

  ngOnInit() {
  }
}
