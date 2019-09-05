import { Injectable } from '@angular/core';
import { FileSystem } from '@angular/compiler-cli/src/ngtsc/file_system';
import * as CryptoJS from 'crypto-js';
import { FirebaseService } from './firebase.service';



@Injectable({
  providedIn: 'root'
})
// This class is used to Encode multi-media files into a Base64
// and to encrypt and decrypt anything
export class EncoderService {
  EncryptionPassword = 'CodingWizard';
  constructor(private firebaseService: FirebaseService) {}

  // Encode Image to base64 and upload
  Base64EncodeImage(theFile: any, fileName: any, UserId: any, ContactId: any) {
    const reader = new FileReader();
    reader.readAsDataURL(theFile);
    let result;
    reader.onload = (e) => {
      result = reader.result;
      console.log(result);
      this.firebaseService.uploadImage(UserId, ContactId, result, fileName);
    };
  }

  // Encode Video to base64 and upload
  Base64EncodeVideo(theFile: any, fileName: any, UserId: any, ContactId: any) {
    const reader = new FileReader();
    reader.readAsDataURL(theFile);
    let result;
    reader.onload = (e) => {
      result = reader.result;
      console.log(result);
      this.firebaseService.uploadVideo(UserId, ContactId, result, fileName);
    };
  }

  // Encode Audio to base64 and upload
  Base64EncodeAudio(theFile: any, fileName: any, UserId: any, ContactId: any) {
    const reader = new FileReader();
    reader.readAsDataURL(theFile);
    let result;
    reader.onload = (e) => {
      result = reader.result;
      console.log(result);
      this.firebaseService.uploadAudio(UserId, ContactId, result, fileName);
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
}
