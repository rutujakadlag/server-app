import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-server-table',
  templateUrl: './server-table.component.html',
  styleUrls: ['./server-table.component.css']
})
export class ServerTableComponent implements OnInit {

  constructor(private serverSvc : ServerService) { }

  serverGroups = [];
  selectedServer = {};
  isServerSelected : Boolean = false;


  ngOnInit(): void {
    this.getServerList();
    this.isServerSelected = false;
  }

  async getServerList(){
    await this.serverSvc.getServers();
    this.serverGroups = this.formatServerObjects(this.serverSvc.servers);
  }

  formatServerObjects(servergrps){

    servergrps.forEach((servergrp)=>{

      servergrp.servers.forEach((server)=>{
          server.name = servergrp.groupname;
          server.path =  servergrp.pathatserver;
      })
    })

    return servergrps;

  }

  printServerDetails(server){
    this.serverSvc.postServerDetails(server);
    this.selectedServer = server;
    this.isServerSelected = true;
  }

}
