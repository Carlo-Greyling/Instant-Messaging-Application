import { Injectable } from '@angular/core';
import { FileSystem } from '@angular/compiler-cli/src/ngtsc/file_system';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
// This class is used to Encode multi-media files into a Base64
// and to encrypt and decrypt anything
export class EncoderService {
  EncryptionPassword = 'CodingWizard';
  constructor() {}

  // Convert to base54 a media file
  // To use: const base64str = base64Encode('file.jpg');
  /*base64Encode(filePath) {
    const bitmap = this.fs.readFile(filePath);
    return new Buffer(bitmap).toString('base64');
  }*/
  // Decode from base64
  // To use: const file = base64EDecode(base64String, 'file.jpg');
  /*base64Decode(base64Str, filePath) {
    const bitmap = new Buffer(base64Str, 'base64');
    return this.fs.writeFile(filePath, bitmap.toString());
  }*/

// Encrypt Make research on a encryption method (SHA-256 is a one way hashing)
EncryptTextMessage(message: any): any {
  return CryptoJS.AES.encrypt(message.trim(), this.EncryptionPassword).toString();
}
// Decrypt the Encrypted File
DecryptTextMessage(encryptedMessage: any): any {
  return CryptoJS.AES.decrypt(encryptedMessage.trim(), this.EncryptionPassword).toString(CryptoJS.enc.Utf8);
}
}
