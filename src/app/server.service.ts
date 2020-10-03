import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http : HttpClient) { }

  servers = [];

  async getServers(){
    let servers = await this.http.get('http://localhost:3000/').toPromise();
    this.servers =  servers['servergroups'];
  }

  async postServerDetails(server){
     await this.http.post('http://localhost:3000/printDetails', server).toPromise();
  }


}
