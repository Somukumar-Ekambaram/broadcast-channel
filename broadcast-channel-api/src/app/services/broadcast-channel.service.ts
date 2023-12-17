import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BroadcastChannelService {

  private channel: BroadcastChannel;

  constructor() { 
    this.channel = new BroadcastChannel("Chat Channel");
  }

  public sendMessage(message: any): void {
    this.channel.postMessage(message);
  }

  public getMessageObservable(): BroadcastChannel {
    return this.channel;
  }

  public closeChannel(): void {
    this.channel.close();
  }
}
