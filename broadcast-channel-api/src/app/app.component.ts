import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BroadcastChannelService } from './services/broadcast-channel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'broadcast-channel-api';

  constructor(private router: Router, private broadcaseChannelSerice: BroadcastChannelService) {

    let broadcastChannel = this.broadcaseChannelSerice.getMessageObservable();
    broadcastChannel.onmessage = (event) => {
      if (event.data === 'Logout') {
        localStorage.clear();
        this.router.navigate(['login']);
      }
    }

  }
}
