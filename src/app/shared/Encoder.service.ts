import { Injectable } from '@angular/core';
import { FileSystem } from '@angular/compiler-cli/src/ngtsc/file_system';
import * as CryptoJS from 'crypto-js';
import { FirebaseService } from './firebase.service';
import { Messages } from './messages.model';
import {LZStringService} from 'ng-lz-string';


@Injectable({
  providedIn: 'root'
})
// This class is used to Encode multi-media files into a Base64
// and to encrypt and decrypt anything
export class EncoderService {
  EncryptionPassword = 'CodingWizard';
  thisUserID = localStorage.getItem('currentUserId');
  message: Messages[] = [];
  today;
  msgMinutes;
  msgHours;
  public activeContact;  // variable for setting the current open contact in the chat window;

  constructor(private firebaseService: FirebaseService, private lz: LZStringService) {}

  // Encode Image to base64 and upload
  Base64EncodeImage(theFile: any, fileName: any, UserId: any, ContactId: any, active: any) {
    this.activeContact = active;
    const reader = new FileReader();
    reader.readAsDataURL(theFile);
    let result;
    reader.onload = (e) => {
      result = reader.result;
      console.log(result);
      this.onGenerateNewImageMessage(result);
      // this.firebaseService.uploadImage(UserId, ContactId, result, fileName);
    };
  }

  // Just a Base64 Image Encoder
  Base64Encoder(theFile: any) {
    const reader = new FileReader();
    reader.readAsDataURL(theFile);
    let result;
    reader.onload = (e) => {
      result = reader.result;
      console.log(result);
      return result;
    };
  }

  // Encode Video to base64 and upload
  Base64EncodeVideo(theFile: any, fileName: any, UserId: any, ContactId: any, active: any) {
    this.activeContact = active;
    const reader = new FileReader();
    reader.readAsDataURL(theFile);
    let result;
    reader.onload = (e) => {
      result = reader.result;
      console.log(result);
      this.onGenerateNewVideoMessage(result);
      // this.firebaseService.uploadVideo(UserId, ContactId, result, fileName);
    };
  }

  // Encode Audio to base64 and upload
  Base64EncodeAudio(theFile: any, fileName: any, UserId: any, ContactId: any, active: any) {
    this.activeContact = active;
    const reader = new FileReader();
    reader.readAsDataURL(theFile);
    let result;
    reader.onload = (e) => {
      result = reader.result;
      console.log(result);
      this.onGenerateNewAudioMessage(result);
      // this.firebaseService.uploadAudio(UserId, ContactId, result, fileName);
    };
  }

   // Base64 Decoder
   // Het dit nie nodig nie want ons kan dit direk display op HTML van base64
   // bv: <img id="myImage" src="base64String">


// Encrypt Make research on a encryption method (SHA-256 is a one way hashing)
EncryptTextMessage(message: any): any {
  return CryptoJS.AES.encrypt(message.trim(), this.EncryptionPassword).toString();
}
// Decrypt the Encrypted File
DecryptTextMessage(encryptedMessage: any): any {
  return CryptoJS.AES.decrypt(encryptedMessage.trim(), this.EncryptionPassword).toString(CryptoJS.enc.Utf8);
}

// Download File using a Base64String
DownloadBase64(b64: string) {
  const base64string = this.lz.decompress(b64);
  const byteCharacters = atob(base64string);

  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);

  const blob = new Blob([byteArray]);
  if (navigator.msSaveBlob) {
      const filename = 'base64media';
      navigator.msSaveBlob(blob, filename);
      } else {
      const link = document.createElement('a');

      link.href = URL.createObjectURL(blob);

      link.setAttribute('visibility', 'hidden');
      link.download = 'base64media';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }
  }

  onGenerateNewImageMessage(imageBase64String: string) {
    const base64string = this.lz.compress(imageBase64String);
    this.today  = new Date();
    this.msgMinutes = this.today.getMinutes();
    this.msgHours = this.today.getHours();

    if (this.msgHours < 10) {
      this.msgHours = '0' + this.msgHours;
    }

    if (this.msgMinutes < 10) {
      this.msgMinutes = '0' + this.msgMinutes;
    }

    const newMessage = new Messages(localStorage.getItem('currentUserId'), base64string, 'msgImage', this.msgHours + ':' + this.msgMinutes);
    this.message.unshift(newMessage);
    this.firebaseService.newMessage(newMessage, this.activeContact);
  }

  onGenerateNewVideoMessage(imageBase64String: string) {
    const base64string = this.lz.compress(imageBase64String);
    this.today  = new Date();
    this.msgMinutes = this.today.getMinutes();
    this.msgHours = this.today.getHours();

    if (this.msgHours < 10) {
      this.msgHours = '0' + this.msgHours;
    }

    if (this.msgMinutes < 10) {
      this.msgMinutes = '0' + this.msgMinutes;
    }
    const newMessage = new Messages(localStorage.getItem('currentUserId'), base64string, 'msgVideo', this.msgHours + ':' + this.msgMinutes);
    this.message.unshift(newMessage);
    this.firebaseService.newMessage(newMessage, this.activeContact);
  }
  onGenerateNewAudioMessage(imageBase64String: string) {
    const base64string = this.lz.compress(imageBase64String);
    this.today  = new Date();
    this.msgMinutes = this.today.getMinutes();
    this.msgHours = this.today.getHours();

    if (this.msgHours < 10) {
      this.msgHours = '0' + this.msgHours;
    }

    if (this.msgMinutes < 10) {
      this.msgMinutes = '0' + this.msgMinutes;
    }
    const newMessage = new Messages(localStorage.getItem('currentUserId'), base64string, 'msgAudio', this.msgHours + ':' + this.msgMinutes);
    this.message.unshift(newMessage);
    this.firebaseService.newMessage(newMessage, this.activeContact);
  }

  profilePicBase64(theFile: any, fileName: any) {
    // Do Conversion
    // localStorage.setItem('base64PP', result);
    const reader = new FileReader();
    reader.readAsDataURL(theFile);
    let result;
    reader.onload = (e) => {
      result = reader.result;
      console.log(result);
      localStorage.setItem('base64PP', result);
    };
  }
}
