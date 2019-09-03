import {Time} from '@angular/common';

export class Messages {
  public msgID: number;
  public msgContents: string;
  public msgType: string;
  public arrivalTime: Time;

  constructor(msgID: number, msgContents: string, msgType: string, /*arrivalTime: Time*/) {
    this.msgID = msgID;
    this.msgContents = msgContents;
    this.msgType = msgType;
    // this.arrivalTime = arrivalTime;
  }
}
