import { Component } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverCreated = false;
  allowNewServer = false;
  serverCreationStatus = 'No server created';
  serverName = 'testServer';
  servers = ['server 1', 'new one serv'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
