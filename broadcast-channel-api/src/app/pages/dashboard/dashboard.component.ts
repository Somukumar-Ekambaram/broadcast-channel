import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BroadcastChannelService } from 'src/app/services/broadcast-channel.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  constructor(private router: Router, private broadcaseChannelService: BroadcastChannelService) {}


  onLogout() {
    this.broadcaseChannelService.sendMessage('Logout');
    this.router.navigate(['login']);
  }

}
