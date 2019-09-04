import {Time} from '@angular/common';

export class Messages {
  public msgID: number;
  public msgContents: string;
  public msgType: string;
  public arrivalTime: string;

  constructor(msgID: number, msgContents: string, msgType: string, arrivalTime: string) {
    this.msgID = msgID;
    this.msgContents = msgContents;
    this.msgType = msgType;
    this.arrivalTime = arrivalTime;
  }
}
