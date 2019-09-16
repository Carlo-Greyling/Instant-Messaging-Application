import {Time} from '@angular/common';

export class Messages {
  public msgID: string;
  public msgContents: string;
  public msgType: string;
  public arrivalTime: string;

  constructor(msgID: string, msgContents: string, msgType: string, arrivalTime: string) {
    this.msgID = msgID;
    this.msgContents = msgContents;
    this.msgType = msgType;
    this.arrivalTime = arrivalTime;
  }
}
