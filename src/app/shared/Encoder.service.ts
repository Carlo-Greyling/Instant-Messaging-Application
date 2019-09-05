import { Injectable } from '@angular/core';
import { FileSystem } from '@angular/compiler-cli/src/ngtsc/file_system';

@Injectable()
// This class is used to Encode multi-media files into a Base64
// and to encrypt and decrypt anything
export class EncoderService {
  constructor(private fs: FileSystem) {}

// Convert to base54 a media file
  base64Encode(filePath) {
    const bitmap = this.fs.readFile(filePath);
    return new Buffer(bitmap).toString('base64');
  }
// Decode from base64
  base64Decode(base64Str, filePath) {
    const bitmap = new Buffer(base64Str, 'base64');
    return this.fs.writeFile(filePath, bitmap.toString());
  }
// Encrypt Make research on a encryption method (SHA-256 is a one way hashing)

// Decrypt the Encrypted File

}
