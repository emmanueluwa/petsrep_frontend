import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  api_url = ' http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get(this.api_url);
  }
}
